import React, { useState } from "react";
import Logo from "../atoms/Logo";

interface Props {
  placeholder: string,
}

const Search = ({placeholder}: Props) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <label 
      className={`search ${isActive ? 'active' : ''}`}
    >
      <div className="wrapper">
        <span className="icon">
          {
            isActive ? (
              <Logo
                name="Search"
                state="Blue"
              />
            ) :
            <Logo
              name="Search"
              state="Default"
            />
          }
        </span>
        <input 
          type="text" 
          placeholder={placeholder}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>
    </label>
  )
}

export default Search