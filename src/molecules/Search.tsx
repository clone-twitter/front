import React, { useState } from "react";
import Logo from "../atoms/Logo";
import { Theme } from "../interfaces/Theme";

interface Props {
  placeholder: string,
  theme: Theme
}

const Search = ({placeholder, theme}: Props) => {

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
                theme={theme}
                name="Search"
                state="Blue"
              />
            ) :
            <Logo
              theme={theme}
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