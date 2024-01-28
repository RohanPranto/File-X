"use client";
import React, { useState, useEffect } from "react";
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({ uploadBtnClick, progress }) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [uploadComplete, setUploadComplete] = useState(false);

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 5000000) {
      console.log("File size is larger than 5MB");
      setErrorMsg("File size is larger than 5MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };

  const handleUploadClick = () => {
    if (file) {
      uploadBtnClick(file);
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setUploadComplete(true);
    }
  }, [progress]);

  return (
    <div className="p-5 md:p-10 text-center">
      {!uploadComplete && <div className="flex  items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 5MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label> 
      </div> }
      {errorMsg ? <AlertMsg msg={'Max file size limit is 5MB'} /> : null}
      {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}

      {progress > 0 ? <ProgressBar progress={progress} /> :
        <button
          disabled={!file}
          className="p-2 bg-primary disabled:bg-gray-400 hover:bg-blue-700 text-white w-[30%] rounded-full mt-5" onClick={handleUploadClick}>
          Upload
        </button>}

        
      {uploadComplete && 
        <p className="text-green-500 text-2xl mt-2 font-bold">Upload Complete</p> 
      }
    </div>
  );
}

export default UploadForm;