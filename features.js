// Get references to the HTML elements
const inputElement = document.getElementById("keyword");
const jokeButton = document.getElementById("jokebutton");
const jokeElement = document.getElementById("joke");

// Function to get a joke from the API
function getJoke() {
  let apiKey = "f08f864ef6a33151ee24fc3db63obtbb";
  let context =
    "be funny and tell a joke which includes the keyword you've just received in the userPrompt variable";
  let userPrompt = inputElement.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt}&context=${context}&key=${apiKey}`;

  // Set the text to "Working on your joke" before making the API call
  jokeElement.textContent = "Working on your joke...";

  axios
    .get(apiUrl)
    .then((response) => {
      // If the API call is successful, update the joke element with the joke
      jokeElement.textContent = response.data.answer;
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