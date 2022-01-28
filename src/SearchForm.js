import { useState } from 'react'

const SearchForm = () => {
const [ text, setText ] = useState('')

  return <div>
     <form>
         <label htmlFor='search'>
         <input type='text' placeholder='e.g politics' className='input' /><button type='submit' className='btn'>Search</button>
         </label>
         </form> 
  </div>;
};

export default SearchForm;
