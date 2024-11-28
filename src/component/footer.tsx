import * as React from 'react';

export function Footer() {
  return (
    <div className='my-2 flex flex-col items-center justify-center align-middle text-lg'>
      <div id='done' className='flex'>
        Done:
        <div id='count'>&nbsp;0</div>
      </div>
      <div id='new-task' className='flex w-6/12 flex-col'>
        <p>Add todo</p>
        <input type='text' name='job' id='job' className='text-black' />
        <a
          href='#'
          className='w-[100px] items-center rounded-md bg-blue-500 p-1 text-center text-sm hover:bg-blue-700'
        >
          ADD TASK
        </a>
      </div>
    </div>
  );
}
