"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "./../../../../firebaseConfig";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import ProgressBar from "./_components/ProgressBar";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from './../../../_utils/GenerateRandomString';
import { useRouter } from "next/navigation";

function upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const [fileDocId, setFileDocId] = useState();

  const[uploadCompleted,setUploadCompleted]=useState();
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
          setUploadCompleted(true);
        });
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();
    await setDoc(doc (db, "uploadedFile", docId), {
      filename: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password:'',
      id:docId,
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL+'f/'+ docId,
    });
    setFileDocId(docId);
    router.push('/file-preview/' + docId);
  };

  useEffect(() => {
    if (uploadCompleted) {
      router.push('/file-preview/' + fileDocId);
    }
  }, [uploadCompleted, router, fileDocId]);
  
  return (
    <div className="p-5 px-6 md:px-28">
      <h2 className="text-[35px] font-bold text-center m-5">
        Start <span className="text-primary">Uploading</span> Files and{" "}
        <span className="text-primary">Share</span> It!
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
}

export default upload;
