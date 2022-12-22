import React from 'react'
import "./Modal.css"
import { useStateValue } from './StateProvider';


function Modal({closeModal}) {
  // const [{ basket}, dispatch] = useStateValue();

  return (
    <div className="modal">
      <div className="popup-image">
      <p style={{color:"white", textAlign:"center", marginTop:"30vh"}}>see some pics</p>
      <span onClick={()=>closeModal(false)}>&times;</span>
      {/* <img src={image}></img> */}
      </div>
    </div>
  )
}

export default Modal
