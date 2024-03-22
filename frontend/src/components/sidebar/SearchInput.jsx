import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search_' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-6 h-6 outline-none'/>
        </button>
    </div>
  )
}

export default SearchInput
