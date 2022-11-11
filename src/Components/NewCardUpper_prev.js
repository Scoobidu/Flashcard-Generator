import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";

function NewCardUpper() {
  return (
    <>
      <div className='relative lg:container lg:mx-auto px-10 md:px-28'>
        <div>
          <h1 className='text-2xl font-bold pt-8 pb-4'>Create Flashcard</h1>
          <div className='flex space-x-10 font-semibold px-3 text-gray-500'>
            <a href='#s'>Create New</a>
            <a href='#s'>My Flashcard</a>
          </div>
          <div>
            <div className='bg-white rounded-xl py-5 px-11'>
              <div>
                <label className='font-semibold text-gray-500' htmlFor='Create'>
                  Create Group*
                </label>
              </div>
              <div className='lg:flex lg:space-x-4 '>
                <input
                  className='w-full md:w-96 py-1 px-3 font-semibold border border-2 border-gray-400 rounded-[6px] shadow-none text-2xl
                  focus:outline-none '
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
              <div>
                <label
                  className='font-semibold text-gray-500'
                  htmlFor='description'
                >
                  Add Description
                </label>
              </div>
              <div>
                <textarea
                  className="w-full border border-2 border-gray-400 rounded-md py-1 px-6 font-semibold shadow-none'"
                  name=''
                  id='description'
                  cols=''
                  rows='5'
                  placeholder='Describe the roles, responsibility, skills required for the job and help candidate understand the role better'
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
