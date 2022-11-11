import React from "react";
import { MdOutlineShare } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlinePrinter } from "react-icons/ai";

function CardDetails_right() {
  return (
    <div className='flex flex-col space-y-3'>
      <div className='container bg-white rounded-md drop-shadow-md  py-2 px-6'>
        <button className='flex'>
          <span className='pt-1 pr-4'>
            <MdOutlineShare />
          </span>
          Share
        </button>
      </div>
      <div className='container bg-white rounded-md drop-shadow-md  py-2 px-6'>
        <button className='flex'>
          <span className='text-xl pr-4 '>
            <HiOutlineDownload />
          </span>
          Download
        </button>
      </div>
      <div className='container bg-white rounded-md drop-shadow-md py-2 px-6'>
        <button className='flex'>
          <span className='text-xl pt-1 pr-4'>
            <AiOutlinePrinter />
          </span>
          Print
        </button>
      </div>
    </div>
  );
}

export default CardDetails_right;
