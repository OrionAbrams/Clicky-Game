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

var bestScore
class App extends Component {
  state = {
    friends,
    score: 0,
    maxScore: 0
  };

  clickedIt = id => {

    let friendArray = friends
    let friendClicked = friendArray.filter(friend => friend.id === id)
    let friendClickedId = friendClicked[0].id
    let chosenId
    for (var i = 0; i < friendArray.length; i++) {
      if (friendClickedId === friendArray[i].id) {
        chosenId = i
      }
    }

    if (friends[chosenId].alreadyClicked) {
      alert("You Lose!")
      for (var i = 0; i < friends.length; i++) {
        friends[i].alreadyClicked = false
      }
      this.setState({
        friends,
        score: 0
      })
    }
    else {
      console.log(this.state.score)

      if (this.state.score >= this.state.maxScore) {
        bestScore = this.state.score + 1
        if (bestScore === 12) {
          alert("You win!")
          // doesn't reset score here, wasn't working so i left out. have to refresh. (homework example also doesn't reset)
        }
        console.log(bestScore)
      }

      this.setState({
        friends: friends[chosenId].alreadyClicked = true,
        score: this.state.score + 1,
        maxScore: bestScore
      });
    }


  };

  render() {
    let shuffledImages = shuffleArray(friends);
    return (
      <Wrapper>
        <Navbar>Score: {this.state.score} Max Score: {this.state.maxScore}</Navbar>
        <Title>Clicky Game! Click on an image to earn points, but don't click on any more than once!</Title>
        {shuffledImages.map(friend => (
          <FriendCard
            clickedIt={this.clickedIt}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
