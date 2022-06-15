import React from "react";
import Modal from "react-modal";
import "./style.scss";
const customStyles = {
  content: {
    background: "transparent",
    overflow: "hidden",
    border: "none",
    padding: "0px",
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};
function MovieTrailerModal({ isOpen, onClose }) {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
        <>
          {/* <div className="modalHeader"></div> */}
          <div className="modalBody">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zAGVQLHvwOY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </>
      </Modal>
    </div>
  );
}

export default MovieTrailerModal;
