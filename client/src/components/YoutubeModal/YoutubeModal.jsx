import Modal from 'react-modal';
import './YoutubeModal.css';
function YoutubeModal(props) {
  return (<Modal className="youtube-modal" isOpen={props.modalIsOpen} onRequestClose={() => { props.setModalIsOpen(false) }} >
    <div className="modal-header"><p>How to use this:</p><button onClick={() => props.setModalIsOpen(false)}>Close</button></div>
   
   <iframe width={560*0.8} height={315*0.8} className="youtube-instruction" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  
   
</Modal>)
}
export default YoutubeModal;