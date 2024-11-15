import React from 'react';
import { Link } from 'react-router-dom';

const AddBook = () => {
    const handleCraftAddItems = () =>{

    }

    const navItems = <>
    <li><Link to="/" className="text-blue-400 font-bold">Home</Link></li>
    <li><Link to="/addBook" className="text-blue-400 font-bold">Add Book</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold">All Books</Link></li>
    <li><Link to="/" className="text-blue-400 font-bold"> Borrowed Books</Link></li>
     
    </>
    return (
       
     <div className="bg-[#F4F3F0] p-24">
        <div id='register-nav' className='flex w-full display-none gap-5 justify-end mb-20'>
            {navItems}
        </div>
      <h1 className="mb-5 text-black text-3xl font-extrabold">add a book</h1>
      <form onSubmit={handleCraftAddItems}>
         {/* form name and Quantity row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="name" placeholder="Book Name" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="number" className="grow" name="quantity" placeholder="Available Quantity" />
      </div >
      </div>
         {/* form supplier row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="AuthorName" placeholder="Author Name" />
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="Category " placeholder="Category " />
      </div >
      </div>
         {/* form teste row  */}
      <div className="md:flex w-[100%] justify-center mb-3 gap-3">
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="Short-description" placeholder="Short description" />
      </div>
     
      <div className="input input-bordered flex items-center gap-2 md:w-1/2">
      <input type="text" className="grow" name="Rating " placeholder="Rating " />
      </div >
      </div>
      <div className="input input-bordered flex items-center gap-2 md:w-full">
      <input type="text" className="grow text-center" name="photo"  placeholder="Photo Url" />
      </div >

          <button type='submit' className="btn mt-5 w-full">Add button</button>
      </form>
     </div>





            
    );
};

export default AddBook;