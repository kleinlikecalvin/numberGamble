const enterNum = () => {
  return new Promise((resolve, reject) => {
    const userNum = Number(window.prompt("Enter a number between 1 - 5"));
    const randomNum = Math.floor(Math.random() * 5 + 1);
    if (isNaN(userNum) || userNum > 5 || userNum < 1) {
      reject(new Error("Please enter a number between 1 and 13"));
    }
    if (userNum === randomNum) {
      resolve({
        points: 2000,
        randomNum,
      });
    }
    if (userNum === randomNum + 1 || userNum === randomNum - 1) {
      resolve({
        points: 1000,
        randomNum,
      });
    } else {
      resolve({
        points: 0,
        randomNum,
      });
    }
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to play again?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

let pointsCounter = 0;

const handleNumGuess = async () => {
  try {
    const result = await enterNum();
    if (result.points === 0) {
      pointsCounter += result.points;
      alert(
        `The magic number was ${result.randomNum}, you win 0 points... womp womp. But you still have ${pointsCounter} points!`
      );
    } else if (result.points === 1000) {
      pointsCounter += result.points;

      alert(
        `The magic number was ${result.randomNum}, you win 1000 points 😸 Now you have ${pointsCounter} points!`
      );
    } else {
      pointsCounter += result.points;
      alert(
        `The magic number was ${result.randomNum}, you win 2000 points 🥳 Now you have ${pointsCounter} points!`
      );
    }
    const continuing = await continueGame();
    if (continuing) {
      handleNumGuess();
    } else {
      alert("Good day to you. I'm keeping all your points.");
    }
  } catch (error) {
    alert(error);
    handleNumGuess();
  }
};

const start = () => handleNumGuess();
start();
