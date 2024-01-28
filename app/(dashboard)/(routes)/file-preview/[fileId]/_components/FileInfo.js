import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function FileInfo({ file }) {
  const [fileType, setFileType] = useState();

  useEffect(() => {
    if (file && file.type) {
      setFileType(file.type.split('/')[0]);
    }
  }, [file]);

  return file && (
    <div className='text-center border p-10 m-5 outline outline-1 outline-gray-200 rounded-lg'>
      <div className='flex flex-col items-center'>
        <Image
          src={fileType === 'image' ? file.fileUrl : '/file.png'}
          width={200}
          height={200}
          className='h-[200] rounded-md object-contain'
          alt='file'
        />
        <div className='mt-4'>
          <h2 className='text-black-500'>{file?.filename}</h2>
          <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
        </div>
      </div>
    </div>
  );
}

export default FileInfo;
