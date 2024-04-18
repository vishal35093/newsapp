import React, { Component } from 'react';
import loading from './Spinner.gif'

const spiner = () => {
 
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }

export default spiner
