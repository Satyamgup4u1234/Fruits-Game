// Initialize or retrieve the array from local storage
let valuesArray = JSON.parse(localStorage.getItem('valuesArray')) || [1];

// Predefined arrays for fruit results
const avocado = [1, 0, 1, 0];
const kiwi = [1, 1, 0, 1];
const blueberry = [1, 0, 0, 1];
const cherry = [1, 1, 1, 0];
const fig = [1, 0, 1, 1];
const pomegranate = [1, 1, 1, 1];

// DOMContentLoaded event handler to initialize
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-container img");
    const rollButton = document.querySelector(".roll-button");

    rollButton.addEventListener("click", function() {
        rollImages();
    });

    // Function to roll images
    function rollImages() {
        let interval;
        const duration = 2000; // Total duration of the roll (in milliseconds)
        const intervalTime = 100; // Time between image switches (in milliseconds)
        let elapsed = 0;

        interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            images.forEach(img => img.classList.remove("active"));
            images[randomIndex].classList.add("active");

            elapsed += intervalTime;
            if (elapsed >= duration) {
                clearInterval(interval);
                checkAndDisplayMatchedFruit(); // Check for match and display image
            }
        }, intervalTime);

    }

    // Function to check for match and display matched fruit image
    function checkAndDisplayMatchedFruit() {
        let matchedFruit = null;

        if (arraysEqual(valuesArray, avocado)) {
            matchedFruit = 'avocado';
        } else if (arraysEqual(valuesArray, kiwi)) {
            matchedFruit = 'kiwi';
        } else if (arraysEqual(valuesArray, blueberry)) {
            matchedFruit = 'blueberry';
        } else if (arraysEqual(valuesArray, cherry)) {
            matchedFruit = 'cherry';
        } else if (arraysEqual(valuesArray, fig)) {
            matchedFruit = 'fig';
        } else if (arraysEqual(valuesArray, pomegranate)) {
            matchedFruit = 'pomegranate';
        }

        if (matchedFruit) {
            displayMatchedFruit(matchedFruit); // Display the matched fruit
        } else {
            console.log("Match Not Found");
        }
    }

    // Function to display matched fruit image
    function displayMatchedFruit(fruitName) {
        images.forEach(img => {
            if (img.alt.includes(fruitName)) {
                img.classList.add("active");
            } else {
                img.classList.remove("active");
            }
        });
        console.log(`Matched fruit: ${fruitName}`);
        // Optionally, you can update UI or perform other actions here
    }

    // Function to compare arrays for equality
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    // Add event listeners to the buttons after DOM is fully loaded
    document.getElementById('yesButton').addEventListener('click', handleYesClick);
    document.getElementById('noButton').addEventListener('click', handleNoClick);
});
