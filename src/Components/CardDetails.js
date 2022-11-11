import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import CardDetails_left from "./CardDetails_left";
import CardDetails_middle from "./CardDetails_middle";
import CardDetails_right from "./CardDetails_right";

function CardDetails() {
  return (
    <>
      <div className='relative container mx-auto px-28'>
        {/* ---------myCard-Header-------- */}
        <div className='flex space-x-5 px-3'>
          <h1 className='text-3xl pt-3 text-gray-700'>
            <MdOutlineKeyboardBackspace />
          </h1>
          <div>
            <h1 className='text-2xl font-bold pt-2 pb-2'>Web 3</h1>
            <p className='font-medium text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              voluptatem omnis, cupiditate accusantium ut eum nobis sint
              officiis est labore repudiandae ipsam nostrum rem, perspiciatis
              quo eaque, expedita ab
            </p>
          </div>
        </div>
        {/* -----------Cards----------- */}
        <div className='flex space-x-6 mt-9 pb-40'>
          <div className='w-1/4'>
            <div className=' bg-white rounded-md drop-shadow-md'>
              <CardDetails_left />
            </div>
          </div>
          <div className='w-full'>
            <div>
              <CardDetails_middle />
            </div>
          </div>
          <div className='w-1/4'>
            <div>
              <CardDetails_right />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
