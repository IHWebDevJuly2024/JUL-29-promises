/*
Create a function that returns a promise. (new Promise) It console logs an instruction if the instruction exists and resolves. if not, reject it.
Create an array of instructions (15) (you can ask GPT)
Wrap your code inside a setTimeout that taks between 0 and 4 seconds
Call your function with a .then chain: Print each instruction.
Add a catch block
Add a finally ("Final part")
*/

const instructions = [
  "Place the ingredients in different bowls",
  "Take the apples and peel them",
  "Cut the apples into small pieces",
  "Add the apples to the bowl",
  "Add the sugar",
  "Add the cinnamon",
  "Mix everything together",
  "Use the blender to mix everything",
  "Add the flour",
  "Add the butter",
  "keep mixing",
  "Start the oven to 180 degrees",
  "Put the mix in a baking tray",
  "Put the tray in the oven",
  "Wait 30 minutes",
];

function getInstructions(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(instructions[step]);
      if (!instructions[step]) reject("Instructions not found");
      else resolve();
    }, Math.floor(Math.random() * 4000));
  });
}

getInstructions(0)
  .then(() => getInstructions(1))
  .then(() => getInstructions(2))
  .then(() => getInstructions(3))
  .then(() => getInstructions(4))
  .then(() => getInstructions(5))
  .then(() => getInstructions(6))
  .then(() => getInstructions(7))
  .then(() => getInstructions(8))
  .then(() => getInstructions(9))
  .then(() => getInstructions(10))
  .then(() => getInstructions(11))
  .then(() => getInstructions(12))
  .then(() => getInstructions(13))
  .then(() => getInstructions(14))
  .catch((error) => console.log(error))
  .finally(() => console.log("Final part")); 

