import React from "react"
import "./Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"

const Player = ({ spotify }) => {
  return (
    <div className="Player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
      
    </div>
    
  )
}

export default Player;