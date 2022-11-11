import React from "react";

function Header() {
  return (
    <>
      <div className='relative container mx-auto px-28'>
        <div className='pb-5'>
          <h1 className='text-2xl font-bold pt-8 pb-4'>Create Flashcard</h1>
          <div className='flex space-x-10 font-semibold px-3 text-lg text-gray-500 shadow-gray-700'>
            <a href='#s'>Create New</a>
            <a href='#s'>My Flashcard</a>
          </div>
          <hr className='w-full bg-gray-300 mt-2' />
        </div>
      </div>
    </>
  );
}

export default Header;
