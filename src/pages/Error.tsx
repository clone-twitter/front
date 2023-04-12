import React from "react";
import { useRouteError } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
}

const Error = ({theme}: Props) => {

  const error = useRouteError();

  return (
    <div className="container">
      <SideMenu
        theme={theme as Theme}
        img="goku.jpeg"
        name="My Name"
        id="ItsMyId"
      />
      <main>
        <div>error {error?.status}</div>
      </main>
    </div>
  );
};

export default Error;