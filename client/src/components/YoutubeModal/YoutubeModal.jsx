import Modal from 'react-modal';
import './YoutubeModal.css';
function YoutubeModal(props) {
  const { modalIsOpen, setModalIsOpen } = props;
  return (<Modal className="youtube-modal" isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }} >
    <div className="modal-header"><p>How to use this:</p><button onClick={() => setModalIsOpen(false)}>Close</button></div>
   
   <iframe width={560*0.8} height={315*0.8} className="youtube-instruction" src="https://www.youtube.com/embed/8aU_LGWzGXE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  
   
</Modal>)
}
export default YoutubeModal;