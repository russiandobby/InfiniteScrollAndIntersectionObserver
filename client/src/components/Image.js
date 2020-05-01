import React,{Fragment,useState} from 'react';
import { useInView } from 'react-intersection-observer';

export default function Image({image}) {

    const[show,setShow] = useState(false);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0,
      })

    const openModal =()=>{
        console.log('Opening Modal')
        setShow(true)
    }
    const closeModal = () =>{
        console.log('Closeing Modal')
        setShow(false)
    }

    const modal = show ? (
        <div className='modal-window' style={{
            backgroundImage: `url(${image.urls.full})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        
        
        }}>
            <div className='close-btn' onClick={closeModal}>X</div>
          
        </div>
    ):(
        null
    )
   

    return (
        console.log(inView),
        <Fragment>
            {modal}
            {/* <Modal  show={show} bigImage={image.urls.full} /> */}
        <img ref={ref} className={`single-photo-${inView ? 'show'  : 'hide'}`} src={image.urls.thumb} alt='image' onClick={openModal}/>
        
        </Fragment>
        
    )
}
