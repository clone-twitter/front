import React from "react";
import { Theme } from "../interfaces/Theme";
import Search from "../molecules/Search";
import Title from "../atoms/fonts/Title";
import SideColumn from "../components/SideColumn";
import TrendItem from "../molecules/items/TrendItem";
import Card from "../molecules/Card";
import Profile from "../molecules/Profile";


const Explore = () => {
  return (
    <div className="explore">
      <div className="main_content">
        <div className="search_wrap">
          <Search
            placeholder="Recherche Twitter"
            theme={"DarkTheme" as Theme}
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
      </SideColumn>
    </div>
  );
};

export default Explore;