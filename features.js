// Get references to the HTML elements
const inputElement = document.getElementById("keyword");
const jokeButton = document.getElementById("jokebutton");
const jokeElement = document.getElementById("joke");

// Function to add a typewriter effect
function typeWriter(text, element) {
  let i = 0;
  const speed = 300; // Speed of typing in milliseconds

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Function to get a joke from the API
function getJoke() {
  let apiKey = "f08f864ef6a33151ee24fc3db63obtbb";
  let context =
    "Please be funny and tell a short joke in poem format which includes the keyword you've just received in the userPrompt variable. Please generate  it as 4 line poem";
  let userPrompt = inputElement.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt}&context=${context}&key=${apiKey}`;

  // Set the text to "Working on your joke" before making the API call
  jokeElement.textContent = "Working on your poem...";

  axios
    .get(apiUrl)
    .then((response) => {
      // If the API call is successful, update the joke element with the joke
      jokeElement.textContent =
        response.data.answer + " - written by SheCodes AI";
      console.log(response.data.answer); // Add console.log here
    })
    .catch((error) => {
      // If the API call fails, update the joke element with the error message
      jokeElement.textContent =
        "Please try again, a 0 stumbled which made a 1 stumble too.";
    });
}

// Attach the getJoke function to the button's click event
jokeButton.addEventListener("click", getJoke);
