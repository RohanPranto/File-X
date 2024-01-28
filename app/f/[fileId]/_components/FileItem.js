import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function FileItem({ file }) {
  const [password, setPassword] = useState('');
  return (
    file && (
      <div>
        {/* matbori */}

        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className=" sm:items-center md:gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:px-8 lg:p-12">
              <div className="text-center items-center">
                <h2 className="text-lg font-medium text-gray-900 mb-5">
                  <strong className="text-blue-600">{file.userName}</strong>{" "}
                  shared a file with you!
                </h2>
                <Link href="" className="items-center">
                  <Image
                    src="/download-file.gif"
                    width={100}
                    height={100}
                    className=" cursor-pointer ml-auto mr-auto mb-5"
                    alt="logo"
                  />
                </Link>
                <p className="text-gray-500">{file.filename}</p>
                <small  className="text-gray-500">
                    {file.fileType} •{" "}
                    {Math.round((file.fileSize / (1024 * 1024)) * 100) / 100} MB
                </small>
              </div>
              {file.password.length>3? <input
                type="password"
                className="p-2 w-full border rounded-md text-[14px] mt-5 text-center text-black outline-gray-400" onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Password to Access"
              /> :null}

              <button
                href=""
                className="flex gap-2 p-2 bg-primary text-white rounded-md w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center disabled:bg-gray-400" 
                onClick={() => {
                  window.open(file.fileUrl);
                }}
                disabled={file.password!==password}
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {/* matbori */}

        <h2 className="text-gray-400 text-[12px] text-center">
          *Terms and Conditions
        </h2>
      </div>
    )
  );
}

export default FileItem;
