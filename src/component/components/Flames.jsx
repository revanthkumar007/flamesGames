import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { action } from './Redux/Slice'
import {useNavigate} from 'react-router-dom'
function Flames() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [firstName,setFirstName]=  useState('')
    const [secondName,setSecondName] = useState('')
    const nameOne = firstName.toLowerCase().replace(' ','')
    const nameTwo = secondName.toLowerCase().replace(' ','')
        const handleSubmit=(e)=>{
            e.preventDefault();

            if(nameOne == '' && nameTwo == '')
            {
              return  alert('Enter the content')
            }

            dispatch(action.addNames({
                firstName:nameOne,
                secondName:nameTwo
            })) 
            navigation('/show')
        }
  return (
        <>
        <div className='container-fluid home-container'>
            <div className='container home-secondContainer'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 content-container my-4'>
                    <div className='p-3'>
                        <div>
                            <h1 className="display-4 text-center my-3">Enter the name for matching</h1>
                        </div>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group my-4">
                            <input type="text" class="form-control" placeholder="Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
                        </div>

                        <div class="form-group my-4">
                            <input type="text" class="form-control" placeholder="Another name" onChange={(e)=>{setSecondName(e.target.value)}}/>
                        </div>
                    

                        <div className='text-center'>
                            <button type="submit" class="btn btn-danger">match</button>
                        </div>
                </form>
                    <div>
                    </div>
                    </div>
                </div>
            </div>
       </div>
        </>
  )
}

export default Flames

