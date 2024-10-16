"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const About = () => {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid gray',
      });
      setBtnText('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <>
      <div className="container mx-auto p-4" style={myStyle}>
        <h1 className="text-2xl font-bold my-3">About Us</h1>
        <div className="space-y-4 border-4" id="accordionExample" style={myStyle}>
          <div className="border-2 border-black-200 rounded-md" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="flex justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-md"
                style={myStyle}
                type="button"
                onClick={() =>
                  document.getElementById('collapseOne').classList.toggle('hidden')
                }
              >
                Accordion Item #1
                <IoIosArrowDown />
              </button>
            </h2>
            <div id="collapseOne" className="hidden px-4 py-2" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the{' '}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
          <div className="border-2 border-black-200 rounded-md" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="flex justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-md"
                style={myStyle}
                type="button"
                onClick={() =>
                  document.getElementById('collapseTwo').classList.toggle('hidden')
                }
              >
                Accordion Item #2
                <IoIosArrowDown />
              </button>
            </h2>
            <div id="collapseTwo" className="hidden px-4 py-2" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the{' '}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
          <div className="border-2 border-black-200 rounded-md" style={myStyle}>
            <h2 className="mb-0">
              <button
                className="flex justify-between w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-t-md"
                style={myStyle}
                type="button"
                onClick={() =>
                  document.getElementById('collapseThree').classList.toggle('hidden')
                }
              >
                Accordion Item #3
                <IoIosArrowDown />
              </button>
            </h2>
            <div id="collapseThree" className="hidden px-4 py-2" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the{' '}
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="container my-3">
          <button
            onClick={toggleStyle}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};



export default About;
