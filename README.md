# Clicky-Game
Memory game that records images user has already clicked on and the user loses if the image is clicked on again.

# Motivation
This was an app made to practice React.

# Technologies Used
React, gh-pages npm.

# Challenges
Found that a "./" was needed for image paths, rather than just "/". it ran fine on localhost but github pages wasn't loading the images.

Also had an issue with trying to save an initial state, instead just looped through the friends array and changed all the alreadyClicked back to false when a user lost by clicking the same image twice.