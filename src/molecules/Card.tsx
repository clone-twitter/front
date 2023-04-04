import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Subtitle from "../atoms/fonts/Subtitle";
import { Theme } from "../interfaces/Theme";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string,
  theme: Theme,
  link: string,
}

const Card = (props: PropsWithChildren<Props>) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(props.link)
  }

  return (
    <div className="card">
      <header>
        <Subtitle
          text={props.text}
          theme={props.theme}
        />
      </header>
      <main>
        {props.children}
      </main>
      <footer onClick={handleClick}>
        <Link
          to={props.link}
        > 
          Show more
        </Link>
      </footer>
    </div>
  )
}

export default Card