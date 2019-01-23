// pseudocode for getting functionality of game to work:
// render the cards randomly instead of in order to begin
// on click of a friend card, get the card's id, change clicked = true on that card
// if clicked was already true, you lose and reset game
// else ++ score and re-render the cards (make new state)


import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar"
import friends from "./friends.json";


//totally found this on the internet, too complicated for me to figure out how to shuffle
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const startingFriends = friends

console.log(startingFriends)
const initialState = {
  friends,
  score: 0
};
var bestScore

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    friends,
    score: 0,
    maxScore: 0
  };



  removeFriend = id => {

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    let friendArray = this.state.friends
    console.log(friendArray)
    // console.log(copiedFriends.filter(friend => friend.id === id))
    let friendClicked = friendArray.filter(friend => friend.id === id)
    console.log(friendClicked)
    let friendClickedId = friendClicked[0].id
    let chosenId
    for (var i = 0; i < friendArray.length; i++) {
      console.log("works")
      if (friendClickedId === friendArray[i].id) {
        chosenId = i;
        friendArray[i].alreadyClicked = true;
      }
    }
    console.log(this.state.friends[chosenId])
    if (friendArray[chosenId].alreadyClicked) {

      console.log(this.state.friends)
      alert("You Lose!")
      this.setState({
        friends,
        score: 0
      }) //need to reset alreadyClicked somehow
    }
    else {
      console.log(this.state.score)
      
      if (this.state.score >= this.state.maxScore) {
        bestScore = this.state.score + 1
        console.log(bestScore)
      }
      // Set this.state.friends equal to the new friends array
      this.setState({
        friends: friendArray,
        score: this.state.score + 1,
        maxScore: bestScore
      });
    }


  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let shuffledImages = shuffleArray(friends);
    return (
      <Wrapper>
        <Navbar>Score: {this.state.score} Max Score: {this.state.maxScore}</Navbar>
        <Title>Clicky Game!
Click on an image to earn points, but don't click on any more than once!</Title>
        {shuffledImages.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          // occupation={friend.occupation}
          // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
