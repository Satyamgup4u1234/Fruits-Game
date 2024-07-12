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

    // Function to handle the "Yes" button click
    function handleYesClick() {
        valuesArray.push(1); // Store the value "1"
        localStorage.setItem('valuesArray', JSON.stringify(valuesArray)); // Save the array back to local storage
        navigateToNextPage(); // Navigate to the next page
    }

    // Function to handle the "No" button click
    function handleNoClick() {
        valuesArray.push(0); // Store the value "0"
        localStorage.setItem('valuesArray', JSON.stringify(valuesArray)); // Save the array back to local storage
        navigateToNextPage(); // Navigate to the next page
    }

    // Function to navigate to the next page
    function navigateToNextPage() {
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page name
        let nextPage;

        switch (currentPage) {
            case 'index1.html':
                nextPage = 'index2.html';
                break;
            case 'index2.html':
                nextPage = 'index3.html';
                break;
            case 'index3.html':
                nextPage = 'index4.html';
                break;
            case 'index4.html':
                nextPage = 'result.html'; // Or any final page you want
                break;
            default:
                nextPage = 'index.html';
                break;
        }

        window.location.href = nextPage; // Navigate to the next page
    }

    // Function to determine result by image
    function resultByImage() {
        if (arraysEqual(valuesArray, avocado)) {
            console.log("avocado");
        } else if (arraysEqual(valuesArray, kiwi)) {
            console.log("kiwi");
        } else if (arraysEqual(valuesArray, blueberry)) {
            console.log("blueberry");
        } else if (arraysEqual(valuesArray, cherry)) {
            console.log("cherry");
        } else if (arraysEqual(valuesArray, fig)) {
            console.log("fig");
        } else if (arraysEqual(valuesArray, pomegranate)) {
            console.log("pomegranate");
        } else {
            console.log("Match Not Found");
        }
    }

    // Add event listeners to the buttons after DOM is fully loaded
    document.getElementById('yesButton').addEventListener('click', handleYesClick);
    document.getElementById('noButton').addEventListener('click', handleNoClick);
});
