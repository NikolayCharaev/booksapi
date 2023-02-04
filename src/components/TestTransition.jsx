import React, { useState,useEffect } from 'react';
import { Transition } from 'react-transition-group';

import './testStyles.css';
const TestTransition = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaderVisible(true),1000)
    setTimeout(() => setLoaderVisible(false),5000)
  })
  return (
    <>
      <button
        onClick={() => {
          setLoaderVisible(!loaderVisible);
        }}>
        {loaderVisible ? 'hide' : 'show'}
      </button>
      <div className="wrapper">
        <div className="box-wrapper">
          <Transition in={loaderVisible} timeout={500} mountOnEnter unmountOnExit>
            {(state) => <div className={`box ${state}`}></div>}
          </Transition>
        </div>
      </div>
    </>
  );
};

export default TestTransition;
