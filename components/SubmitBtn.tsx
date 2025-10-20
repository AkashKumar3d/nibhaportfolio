import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SuccessPopup from "./SuccessPopup";
import { useState } from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const [showSuccess, setShowSuccess] = useState<any>(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // auto hide after 3s
  };
 
    return (
        <>
          <SuccessPopup 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        message="Message Send  Successfully!" 
      />
        
        <button
            onClick={handleSuccess}
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
            // disabled={pending}
        >
            {/* {pending ? ( */}
                {/* <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> */}
            {/* ) : ( */}
                <>
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            {/* )} */}
        </button>
        </>
        
    );
}