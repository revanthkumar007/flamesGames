import React from 'react'
import couple from '../images/couple.gif'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
  return (
    <>
        <div className='container-fluid home-container'>
            <div className='container home-secondContainer'>
                <div className='col-xl-10 col-lg-10 col-md-10 col-sm-10 content-container my-4'>
                    <div className='m-3'>
                        <div className='text-center my-3'>
                        <img src={couple} alt="..." width={200} height={100} className={'img-fluid'} />
                        </div>
                        <p className='display-4 font-content my-3'>
                        FLAME is a game named after the acronym: Friends, Lovers, Affectionate, Marriage, Enemies It is a popular game among young girls at sleepovers, especially with pre-teens and teens who are beginning to explore the world of crushes. This game does not accurately predict whether or not an individual is right for you, but it can be fun to play with your friends.
                        </p>
                       <div className='text-center'>
                        <button className='lead btn btn-primary my-3' onClick={()=>{navigate('/flames')}}>FLAMES</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home