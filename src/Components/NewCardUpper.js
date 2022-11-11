import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";

function NewCardUpper() {
  return (
    <>
      <div className='relative container mx-auto px-28'>
        <div className='pb-5'>
          <div>
            <div className='bg-white rounded-xl py-5 px-11 drop-shadow-md'>
              <div className='my-2'>
                <label className='font-semibold text-gray-500' htmlFor='Create'>
                  Create Group*
                </label>
              </div>
              <div className=' mb-5 flex space-x-4 '>
                <input
                  className='w-96 py-1 px-3 font-semibold border border-2 border-gray-400 rounded-[6px] shadow-none text-2xl
                  focus:outline-none'
                  type='text'
                  name='Create'
                  id='Create'
                />
                <button className=' border border-2 border-gray-400 rounded-md py-1 px-6 font-semibold shadow-none'>
                  <div className='flex space-x-4 text-blue-600'>
                    <h1 className='text-3xl'>
                      <MdOutlineUploadFile />
                    </h1>
                    <h3 className='pt-1 '>Upload Image</h3>
                  </div>
                </button>
              </div>
              <div className='my-2'>
                <label
                  className='font-semibold text-gray-500'
                  htmlFor='description'
                >
                  Add Description
                </label>
              </div>
              <div className='mb-5'>
                <textarea
                  className="w-3/4 pt-3 border border-2 border-gray-400 rounded-md py-1 px-6 resize-none font-semibold 
                  placeholder:opacity-50 placeholder:font-medium focus:outline-none shadow-none'"
                  name=''
                  id='description'
                  cols=''
                  rows='5'
                  placeholder='Describe the roles , responsibility , skills required for the job and help candidate understand the role better.'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCardUpper;
