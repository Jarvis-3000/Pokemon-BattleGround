import React from "react"
import "./body.scss"

import Section from "./section/section.jsx"
import Texts from "./texts"

function Body(){

    let i=0

    const Randoms={}

    const randomGenerator=(i)=>{
        // because there are 898 pokemons in this API
        let random=Math.floor(Math.random() * 649) + 1; 

        while(random in Randoms){
            random=Math.floor(Math.random() * 649) + 1;
        }
        // console.log(random)
        Randoms[random]=i
    }

    // there are two section for the moment
    for(let i=0;i<Texts.length;i++){
        //generating only 2 randoms for 2 sections
        randomGenerator(i+1)
    }


    return(
        <div className="body">
           {
               Object.keys(Randoms).map(key=>{
                   let index=Randoms[key]
                    return(
                        <Section text={Texts[i++].text} pos={i-1} random={key} key={key}/>
                    )
               })
           }
        </div>
    )
}

export default Body
