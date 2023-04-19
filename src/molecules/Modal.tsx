import React from "react";
import Logo from "../atoms/Logo";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {

  const navigate = useNavigate()

  const closeModal = () => {
    navigate(-1)
  }

  return (
    <div className="modal_wrapper">
      <div 
        className="modal_overlay"
        onClick={() => closeModal()}
      >
      </div>
      <div className="modal">
          <div 
            className="modal_close"
            onClick={() => closeModal()}
          >
            <Logo
              name="Back Arrow"
            />
          </div>
          <div className="modal_content">
            {children}
          </div>
        </div>
    </div>
  );
};

export default Modal;