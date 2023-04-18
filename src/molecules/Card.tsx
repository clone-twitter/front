import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../interfaces/Theme";
import { useNavigate } from "react-router-dom";
import Title from "../atoms/fonts/Title";

interface Props {
  text: string,
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
        <Title
          title={props.text}
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