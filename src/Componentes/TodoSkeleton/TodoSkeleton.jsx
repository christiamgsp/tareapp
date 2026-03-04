import React from 'react';
import './TodoSkeleton.css';

function TodoSkeleton() {
  return (
    <div className='TodoSkeleton-container'>
      <span className='TodoSkeleton-completeIcon'></span>
      <p className='TodoSkeleton-text'></p>
      <span className='TodoSkeleton-deleteIcon'></span>
    </div>
  );
}

export { TodoSkeleton };
