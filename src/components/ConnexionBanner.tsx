import React from "react";
import Title from "../atoms/fonts/Title";
import Textcontent from "../atoms/fonts/TextContent";
import Button from "../atoms/Button";

const ConnexionBanner = () => {
  return (
    <div className="connexion_banner">
      <div className="connexion_banner_content">
        <div className="connexion_banner_text">
          <Title
            title="Ne manquez pas ce qui se passe."
          />
          <Textcontent
            text="Les utilisateurs de Twitter sont les premiers à savoir."
          />
        </div>
        <div className="connexion_banner_button">
          <Button 
            text="Se&nbsp;connecter"
            type="secondary"
            size="medium"
          />
          <Button 
            text="S'inscrire"
            type="tertiary"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnexionBanner;