import React from "react";
import card from "../Images/card.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function CardDetails_middle() {
  return (
    <div>
      <div className='container bg-white rounded-md drop-shadow-md py-8 px-8'>
        <img
          src={card}
          alt='card'
          className='float-left h-64 p-5 pr-9 text-justify'
        />
        <p className='p-5 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo
          ab repellat consequatur, iure rerum enim dignissimos consectetur
          itaque voluptatibus. Suscipit impedit quas illo deleniti reprehenderit
          eum dolore cum veritatis nisi ipsum? Numquam aliquid magni nobis fugit
          molestias amet animi ex eligendi nisi dolores, dolorum suscipit.
          Corporis, reiciendis laboriosam assumenda corru
        </p>
      </div>
      <div className='flex place-content-center p-6 text-xl text-gray-500'>
        <div className='pt-1'>
          <BsChevronLeft />
        </div>
        <p className='px-5'>1 / 4</p>
        <div className='pt-1'>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default CardDetails_middle;
