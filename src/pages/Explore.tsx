import React from "react";
import Search from "../molecules/Search";
import Title from "../atoms/fonts/Title";
import SideColumn from "../components/SideColumn";
import TrendItem from "../molecules/items/TrendItem";
import Card from "../molecules/Card";
import Profile from "../molecules/Profile";
import useAuth from "../hooks/auth";
import Button from "../atoms/Button";
import Textinfo from "../atoms/fonts/TextInfo";
import ConnexionBanner from "../components/ConnexionBanner";


const Explore = () => {

  const auth = useAuth()

  return (
    <div className="explore">
      <div className="main_content">
        <div className="search_wrap">
          <Search
            placeholder="Recherche Twitter"
          />
        </div>
        <div className="trends">
          <Title
            title="Tendances pour vous"
          />
          <TrendItem
            props={{
              info: "Tendances en France",
              title: "Covid-19",
              trend: "1,2K Tweets",
            }}
          />
          <TrendItem
            props={{
              info: "Tendances en France",
              title: "Covid-19",
              trend: "1,2K Tweets",
            }}
          />
          <TrendItem
            props={{
              info: "Tendances en France",
              title: "Covid-19",
              trend: "1,2K Tweets",
            }}
          />
          <TrendItem
            props={{
              info: "Tendances en France",
              title: "Covid-19",
              trend: "1,2K Tweets",
            }}
          />
        </div>
      </div>
      <SideColumn>
        {
          auth?.auth &&
          <Card
            text="Suggestions"
            link="/news"
          >
            <Profile 
              img='goku.jpeg'
              name="This is my name"
              id="myTwitterId"
              isButtonActive={true}
            />
            <Profile 
              img='goku.jpeg'
              name="This is my name"
              id="myTwitterId"
              isButtonActive={true}
            />
            <Profile 
              img='goku.jpeg'
              name="This is my name"
              id="myTwitterId"
              isButtonActive={true}
            />
          </Card>
        }
        {
          !auth?.auth &&
          <Card
            text="Nouveau sur Twitter ?"
          >
            <Textinfo
              text="Inscrivez-vous pour profiter de votre propre fil personnalisé !"
            />
            <div className="register">
              <Button
                text="S'inscrire avec Google"
                type="tertiary"
                size="medium"
              />
              <Button
                text="S'inscrire avec Apple"
                type="tertiary"
                size="medium"
              />
              <Button
                text="Créer un compte"
                type="tertiary"
                size="medium"
              />
            </div>
            <Textinfo
              text="En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies."
            />
          </Card>
        }
      </SideColumn>
      {
        !auth?.auth &&
        <ConnexionBanner/>
      }
    </div>
  );
};

export default Explore;