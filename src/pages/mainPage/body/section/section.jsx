import React from "react";
import "./section.scss";

import shape from "./shape.svg"


function Section({text,pos,random}) {
  let Style = {};

  if (pos % 2 === 0) {
    Style = {
      backgroundImage: "linear-gradient(to left,#003366,#38141A)",
    };
  } else {
    Style = {
      backgroundImage: "linear-gradient(to right,#003366,#38141A)",
    };
  }

  console.log("in the section")


  return (
        <div className="section" style={Style}>
            {
              //this is for left-right images-texts display
              (pos%2===0)?
              (
                <div className="text">
                  {text}
                </div>
              )
              :
              null
            }
            
            <div className="pokemon">
              <img src={shape} alt="svgShape" className="svgShape"/>

              {/* everytime shows random pokemon */}
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${random}.svg`} alt="pokemonImage"/>
            </div>

            {
              (pos%2!==0)?
              (
                <div className="text">
                  {text}
                </div>
              )
              :
              null
            }
        </div>
  )
}

export default Section