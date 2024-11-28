import * as React from 'react';

export function Job() {
  return (
    <div
      id='container'
      className='my-2 flex items-center justify-center gap-4 text-center align-middle'
    >
      <input
        type='checkbox'
        className='w-5 rounded-sm border-green-500 bg-black hover:bg-slate-400'
      />
      <div id='nama_job' className='w-6/12 bg-cyan-300 text-black'>
        job nomor 1
      </div>
      <a
        href='#'
        className='rounded-md border border-solid border-pink-400 p-1 hover:bg-indigo-950'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='20px'
          viewBox='0 -960 960 960'
          width='20px'
          fill='pink'
        >
          <path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z' />
        </svg>
      </a>
    </div>
  );
}
