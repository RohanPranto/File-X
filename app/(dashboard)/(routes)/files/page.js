import { UserButton } from '@clerk/nextjs'
import { Upload } from 'lucide-react'
import React from 'react'
import UploadForm from './../upload/_components/UploadForm';
function Files() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/"/> */}
      <UploadForm />
    </div>
  )
}

export default Files
