import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux';
import scared from '../images/spongebob-nail-biting.gif'
import {useNavigate} from 'react-router-dom'
import affection from '../images/affection.gif'
function ShowDetails() {
    const showflame = useSelector(state => state.flamesNames)
    const navigation = useNavigate()
    const [show, setShow] = useState(false);
    let images = ``;
    useEffect(
      () => {
        let timer1 = setTimeout(() => setShow(true), 5 * 1000);
        return () => {
          clearTimeout(timer1);
        };
      },[]);

      if(showflame.flameName == 'Friend')
      {
        images = `https://c.tenor.com/8fEMO2YzQQkAAAAd/best-friend-love-you.gif`;
      }
      else if(showflame.flameName == 'Love')
      {
        images = `https://25.media.tumblr.com/9f1a295e303872403ffda316ae446fc6/tumblr_mx6ll5so1A1sm68mto1_500.gif`;
      }
      else if(showflame.flameName == 'Affection')
      {
        images = `https://media2.giphy.com/media/14yBzuX5bdUpd6/giphy.gif`;
      }
      else if(showflame.flameName == 'Marriage')
      {
        images = `https://c.tenor.com/OTX8q3IszxAAAAAM/sportsmanias-just-married.gif`;
      }
      else if(showflame.flameName == 'Enemies')
      {
        images = `https://c.tenor.com/2co4feAipsYAAAAM/hasbulla-hasbik.gif`;
      }
      else if(showflame.flameName == 'Sibling')
      {
        images = `https://i.gifer.com/origin/ca/cacf6d60371d6a0a46eb7185070799d5.gif`;
      }
  

  return (
    <div className='container-fluid home-container'>
            <div className='container home-secondContainer'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 content-container my-4'>
                    <div className='p-3'>
                        <div>
                            <div>{show?
                            <>
                                <div>
                                        <h1 className="display-4 text-center my-3">
                                            {showflame.flameName}
                                    </h1>
                                </div>

                               < div className='text-center'>
                                    <img src={images} alt="..."  width={200} height={100} className="rounded img-fluid"/>
                                </div>
                            </>
                            
                            :
                            <>
                                <div className='text-center'>
                                    <img src={scared} alt="..."  width={200} height={100} className="rounded img-fluid"/>
                                </div>
                            </>
                            }</div>
                        </div>
                       <div className='text-center m-5'>
                             <button className='btn btn-primary' onClick={()=>{navigation('/flames')}}>Back to Flames</button>
                       </div>
                    <div>
                    </div>
                    </div>
                </div>
            </div>
       </div>
  )
}

export default ShowDetails