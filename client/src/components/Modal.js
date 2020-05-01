import React, { Component } from 'react'

export class Modal extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            show:false
        };  
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('i am being called')
    //     console.log(nextProps)
    //     console.log(prevState)
    //     if(nextProps.show === prevState.show){
    //         console.log('1')
    //       return { show:nextProps.show};
    //    }else if(nextProps.show !== prevState.show && (prevState.show === false)){
    //     console.log('2')
    //     return { show:true};
    //    }
    //    else return null;
    //   }
      

    render() {
        console.log(this.state.show)
        const {bigImage,show}=this.props;

        const closeModal =()=>{
            console.log('Closing!')
           this.setState({show:false})
           
        }
        
       
        const modal = show ? (
        <div className='modal-window'>
            HELLO FROM MODAL
        </div>
    ):(
        null
    );
    

        return (
            this.state.show ? (
                <div className='modal-window' style={{
                    backgroundImage: `url(${bigImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                
                
                }}>
                    <div className='close-btn' onClick={closeModal}>X</div>
                  
                </div>
            ):(
                null
            )
            
        )
    }
}

export default Modal
