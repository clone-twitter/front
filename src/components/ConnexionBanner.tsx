import React from "react";
import Title from "../atoms/fonts/Title";
import Textcontent from "../atoms/fonts/TextContent";
import Button from "../atoms/Button";
import { Link, useLocation } from "react-router-dom";

const ConnexionBanner = () => {

  const location = useLocation();
  // console.log(location)

  return (
    <div className="connexion_banner">
      <div className="connexion_banner_content">
        <div className="connexion_banner_text">
          <div className="text_wrap">
            <Title
              title="Ne manquez pas ce qui se passe."
            />
            <Textcontent
              text="Les utilisateurs de Twitter sont les premiers à savoir."
            />
          </div>
        </div>
        <div className="connexion_banner_button">
          <Link
            to="/login"
            state={{backgroundLocation: location}}
          >
            <Button 
              text="Se&nbsp;connecter"
              type="secondary"
              size="medium"
            />
          </Link>
          <Link
            to="/register"
            state={{backgroundLocation: location}}
          >
            <Button 
              text="S'inscrire"
              type="tertiary"
              size="medium"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnexionBanner;