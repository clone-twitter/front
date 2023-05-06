import React from "react";
import Modal from "../molecules/Modal";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Title from "../atoms/fonts/Title";
import Textcontent from "../atoms/fonts/TextContent";
import TextInput from "../atoms/forms/TextInput";
import PasswordInput from "../atoms/forms/PasswordInput";
import { AuthService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {

  const authService = new AuthService();
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form as HTMLFormElement);
    
    authService.login(data.get("username") as string, data.get("password") as string, () => {
      authService.isAuthenticated = true
      navigate('/home')
    })
  }

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
      <div className="form">
        <form onSubmit={(event) => handleSubmit(event)}>
          <TextInput
            props={{
              label: "Adresse e-mail",
              name: "username",
              autocomplete: "section-user username"
            }}
          />
          <PasswordInput
            props={{
              label: "Mot de passe",
              name: "password",
              autocomplete: "section-user current-password"
            }}
          />
          <Button 
            text="Connexion"
            type="tertiary"
            size="medium"
          />
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;