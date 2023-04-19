import React from "react";
import Modal from "../molecules/Modal";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Title from "../atoms/fonts/Title";
import Textcontent from "../atoms/fonts/TextContent";

interface Props {
}

const LoginModal = (props: Props) => {
  return (
    <Modal>
      <div className="logo">
        <Logo
          name="Logo"
        />
      </div>
      <div className="title">
        <Title
          title="Connectez-vous à Twitter"
        />
      </div>
      <div className="login">
        <Button
          text="Se connecter avec Google"
          type="tertiary"
          size="medium"
        />
        <Button
          text="Se connecter avec Apple"
          type="tertiary"
          size="medium"
        />
      </div>
      <div className="division">
        <div className="division_line"></div>
        <div className="division_text">
          <Textcontent text="ou"/>
        </div>
        <div className="division_line"></div>
      </div>
    </Modal>
  );
};

export default LoginModal;