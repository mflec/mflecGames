import React from "react";

export default function Error404(){
    return (
        <div className="body404">
            <img src="https://mario.wiki.gallery/images/a/ae/Mario_%28Defeated%29_-_Super_Mario_Sticker.gif" alt="game over mario gif"/>
          <h1> This is a invalid route</h1>
          <h3> Do you want come back to home? </h3>
          <form action="/home" method="get">
          <button className="button404">HOME</button>
          </form>
        </div>
      )
}