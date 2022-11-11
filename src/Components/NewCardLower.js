import React from "react";

function NewCardLower() {
  return (
    <>
      <div className='relative container mx-auto px-28'>
        <div className='bg-white rounded-xl py-5 px-9 drop-shadow-md'>
          <div className='flex block my-5 space-x-7'>
            <button className='bg-red-500 text-white text-2xl rounded-full px-4 mt-2 mb-8'>
              1
            </button>
            <div className='flex flex-col space-y-3'>
              <label className='font-semibold text-gray-500' htmlFor='create'>
                Enter Terms*
              </label>
              <input
                className='w-96 py-1 px-3 font-semibold border border-2 border-gray-400 rounded-[6px] shadow-none text-2xl
                  focus:outline-none'
                type='text'
                name='create'
                id='create'
              />
            </div>
            <div className=' flex flex-col space-y-3'>
              <label
                className='font-semibold text-gray-500'
                htmlFor='definition'
              >
                Enter Definition*
              </label>
              <input
                className='w-96 py-1 px-3 font-semibold border border-2 border-gray-400 rounded-[6px] shadow-none text-2xl
                  focus:outline-none'
                type='text'
                name='definition'
                id='definition'
              />
            </div>
            <div className='pt-6'>
              <button className=' border border-2 border-gray-400 rounded-md pt-1 pb-2 px-8 font-semibold shadow-none'>
                <h3 className='pt-1  text-blue-600'>Select Image</h3>
              </button>
            </div>
          </div>
          <button className='font-semibold text-blue-600 pt-6 pb-4 px-14'>
            + Add more
          </button>
        </div>
        <div className='pt-14 pb-20'>
          <button className='block mx-auto bg-red-500 rounded-md pt-1 pb-2 px-14 font-semibold shadow-none'>
            <h3 className='pt-1 text-white'>Create</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewCardLower;
