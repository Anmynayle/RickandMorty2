import React from 'react'


const Pagination = ({prev, next, onPrevius,onNext}) => {

    const handlePrevius = () =>{
        onPrevius();
    }

    const handleNext = () =>{
        onNext();
    }

  console.log(next)
  return (
    <nav>
        <ul className='pagination'>
            {prev ?(
            <li className='page-item'>
                <button className='page-link' onClick={handlePrevius}>Previus</button>
            </li>
            ):null} 
            {next ?(
            <li className='page-item'>
                <button className='page-link' onClick={handleNext}>Next</button>
            </li>
            ): null} 
        </ul>


    </nav>
  )
}

export default Pagination