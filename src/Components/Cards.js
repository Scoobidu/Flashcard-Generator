import React from "react";
import user from "../Images/elon.PNG";

function Cards() {
  return (
    <div>
      <div className='relative container mx-auto px-28'>
        <div className='grid grid-rows-2 grid-flow-col gap-9 pt-20'>
          <div className='relative w-1/3 bg-white rounded-md border border-2 py-5 px-11 '>
            {/* <button className='bg-red-400 w-28 border rounded-full'> */}
            {/* </button> */}
            <img
              src='{user}'
              onerror=''
              className='absolute inset-x-36 -top-14 w-24 h-24 bg-red-400 rounded-full'
            />
            <div className='mt-8'>
              <h1>Web 1</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia, velit cupiditate natus debitis labore ducimus iusto.
                Maxime, enim facilis aliquid non architecto quos perspiciatis
                dignissimos quibusdam, deleniti expedita accusamus, excepturi ab
                eaque dolor dolores.
              </p>
              <p>4 cards</p>
              <button className='w-2/3 border border-2 border-red-600 rounded-md py-1 font-semibold'>
                <h3 className='pt-1 text-red-600'>View Cards</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
