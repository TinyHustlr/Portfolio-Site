// Braze chaotic campaign idea generator
// Create a random name and idea for each campaign
// Create a random number of levels deep and steps
// It needs to add a message step after most steps but can have different step types at each level e.g. level 3 might be action, decision and delay and each leads to a message

import { steps } from "./steps.js";

const chaosButton = document.getElementById("chaos-btn");
let parentElement = document.getElementById("new-step");


// Randomly builds canvas
function createCanvas() {

  // Randomly selects total number of steps for canvas
  let stepLength = randomNumberGenerator(5, -1) + 1;
  for (let i = 0; i < stepLength; i++) {
    let canvasStep = `step${i}`;

    // Randomly selects steps and matching background color
    let randomNumber = randomNumberGenerator(4, -1);
    let stepChoice = steps[i][canvasStep][randomNumber].stepName;
    let stepColor = steps[i][canvasStep][randomNumber].bgColor;

    // Creates new div for each action step in loop 
    let newDiv = document.createElement("div");
    newDiv.classList.add("step");
    newDiv.innerText = `${stepChoice}`;
    newDiv.style.backgroundColor = `${stepColor}`;
    parentElement.appendChild(newDiv);

    // Creates container for message steps to allow flex row to work
        let messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    parentElement.appendChild(messageContainer);

    // Selects random number of messages steps up to allocated total in steps.js
    let messageStepsMax = steps[i][canvasStep][randomNumber].msgStepsMax;
    let messageStepsMin = steps[i][canvasStep][randomNumber].msgStepsMin;
    let totalMessageSteps = randomNumberGenerator(messageStepsMax, messageStepsMin)

    for (let i = 0; i < totalMessageSteps; i++) {
      let newMessageDiv = document.createElement("div");
      newMessageDiv.classList.add("messages");
      newMessageDiv.innerText = "Message Step";
      newMessageDiv.style.backgroundColor = "green";
      messageContainer.appendChild(newMessageDiv);
    }
  }
}

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

chaosButton.addEventListener("click", () => {
  parentElement.innerHTML = "";
  createCanvas();
});
