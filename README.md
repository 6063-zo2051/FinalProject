## DMGY 6063 Final Project: DJ Table Set
## By: Zaria Oliver


### Milestone 1 - Due 11/29/23

#### Idea 1: DJ Table
I thought that creating an interactive DJ table would be a great way to combine the use of the Arduino, the audio library, and what I have learned in class so far. The image below shows my idea for the table setup, with two spinning records that each can play a different song. I would like to incorporate the Arduino board by having two buttons which can record scratch songs upon being clicked, and switch songs upon being pressed for about 5 seconds. Each button coordinates to a record. When the record is scratched, the records should spin back some and the song should also rewing a bit if possible. I would also like to incorporate some other features such as volume and speed control with sliders, a button that plays an 808 beat when clicked, and a audio visualizer. 
![Idea 1: DJ Table](./finalidea3.JPG)

#### Idea 2: Tree Decoration and Santa Claus Wack-a-Mole
This idea consists of two games combined. One game is decorating a Christmas tree with bulbs and garland. The garland would be applied via dragging of the mouse while the bulbs would be randomly placed with the click of a button on the Arduino. I also had an idea to possiibly have LEDs light up on the board that correspond to the lights drawn in the picture below. The Santa game would be a Santa head which pops up randomly on the screen, and the user would have to click his face to score a point.
![Idea 2: Christmas Game](./finalidea1.JPG)

#### Idea 3: Subway Game
This iddea is a game that challenges the palyer to cross the subway by jumping from car to car. The user can only enter and exit cars through the doors as shown in the image. The cars move across the screen and appear in random order on their tracks. When the player is on the car, their avatar will be shown moving with the train. I am not yet sure how I would like the avatar to look. There is also a feature where the user can ride a rat. I would like for the rat to also move across the screen at random points. Once the player reaches the other side of the racks, possibly a screen with a trophy or reward could popup. I would like to incorporate the Arduino by having 4 buttons that move the avatar forward, back, left, or right upon being clicked.
![Idea 2: Christmas Game](./finalidea2.JPG)

### Milestone 2 - Due 12/06/23

I decided to go with Idea 1 for my project as I felt like the DJ Table would allow for lots of creativity and fun features to be added. I can start simple and build on that foundation to achieve cooler features along the way. First, I wanted to focus on the Arduino board logic and getting it to control features within my p5js code. The goal of the Arduino board thus far in my project is to have a button that when pressed, pauses the current song that is playing. There will be a second button that plays the current song again. 

So far, I have been having a hard time with the ports of my Arduino. I have to press down on my wires to get it to read the values from my buttons.

#### Finite State Machines
 ![Finite State Machine for Pause and Play Buttons](./fsmbuttons.png)

This finite state machine shows the simple cycle between two states for when audio is playing and when audio is paused. The circuit diagram is also shown.

![Circuit Diagram for Pause and Play Buttons](./circbuttons.png)

#### External Data and Library
I intend on using the p5 sound library heavily for this project. I will at minimum be loading the audios following the setup for our Homework 8 assignment, but I would laos like to use some other calls to add detail to my project. I would like to potentially use a call to create the moving sound bar which fluctuates with the audio as it is playing. I am also interested in using the reverb calls to add another option for song adjustment besides just volume control.

### Output Component
I would like to have a light apear on my board when music is playing versus paused. This is a almost to give an "ON AIR" effect to the DJ set.

#### User Testing
After Milestone 3, I plan to get feedback from my classmates and friends on how easy the system is to use and on what features could be added or removed. I could do this via a survey more specifically, where users could have the link for interaction with the system and give feedback. Considering user feedback gave me the idea to include some sort of instruction for users on what keys to press on the keypad and Arduino board.

#### Relevance to Society
A recent reading assignment for this course revolved around the topic of media archaeology. I think that this project is very relevent to the subject. Media archaeology shows how technology and media has shaped our society over time. Old school DJ sets took up space and storage. They covered entire tabletops. Nowadays, we can achieve all and more within softwares such as GarageBand and games such as what I have chosen to create for my project.