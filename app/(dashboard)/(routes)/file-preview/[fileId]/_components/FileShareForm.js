import { Copy, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

function FileShareForm({ file, onPasswordSave }) {
  const [isPasswordEnable, setIsPasswordEnable] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [sendEmail, setSendEmail] = useState('');
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(file.shortUrl);
    alert("Copied to clipboard");
  };

  const handleSendEmail = () => {
    // Implement the logic to send an email notification
    // You can use the 'sendEmail' state value for the email address
    // and include necessary code to send the email
    alert(`Email sent to: ${sendEmail}`);
  };

  return file && (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm text-gray-500">Short URL</label>
        <div className="flex gap-2 p-2 border rounded-md justify-between">
          <input type="text" value={file.shortUrl} disabled className="disabled:text-gray-500 bg-transparent outline-none w-full" />
          <Copy className="text-gray-400 hover:text-gray-600 cursor-pointer" onClick={copyToClipboard}/>
        </div>
      </div>
      <div className="flex mt-5">
        <input type="checkbox" onChange={(e) => setIsPasswordEnable(e.target.checked)} className="mr-2" />
        <label className="text-sm text-gray-500">Enable Password?</label>
      </div>

      {isPasswordEnable && (
        <div className="flex flex-col gap-3">
          <label className="text-sm text-gray-500">Password</label>
          <div className="relative flex gap-2 w-full items-center">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded-md bg-transparent pr-10"
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isPasswordEnable}
            />
            <div className="absolute right-20 top-2">
              {showPassword ? (
                <EyeOff
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Eye
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
              disabled={password.length < 3}
              onClick={() => onPasswordSave(password)}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Additional section for sending email notification */}
      {/* <div className="flex flex-col gap-3 mt-5">
        <label className="text-sm text-gray-500">Send email to notify</label>
        <div className="flex gap-2 w-full items-center">
          <input
            type="email"
            className="w-full p-2 border rounded-md bg-transparent"
            onChange={(e) => setSendEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md"
            disabled={!sendEmail}
            onClick={handleSendEmail}
          >
            Send
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default FileShareForm;
