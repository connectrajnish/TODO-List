import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-50 py-4 shadow-md">
      <div className="flex justify-center items-center">
        <img src='/asset/todo.svg' className='h-14 w-14'/>
        <h1 className="m-2 text-3xl font-bold text-yellow-500">My TODO</h1>
      </div>
    </header>
  );
};

export default Header;
