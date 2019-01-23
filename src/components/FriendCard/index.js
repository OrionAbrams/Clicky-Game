import React from "react";
import "./style.css";

// function addScore(){
//   if (this.alreadyClicked){
//     alert("You lose!")
//   }
//   else {
//     this.alreadyClicked = true;
//     // score++
//   }
// }

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.clickedIt(props.id)} className="click-me" alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      {/* <span  className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
