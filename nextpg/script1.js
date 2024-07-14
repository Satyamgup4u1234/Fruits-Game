// Initialize or retrieve the array from local storage
let valuesArray = JSON.parse(localStorage.getItem('valuesArray')) || [1];


// Function to handle the "Yes" button click
function handleYesClick() {
    valuesArray.push(1); // Store the value "1"
    localStorage.setItem('valuesArray', JSON.stringify(valuesArray)); // Save the array back to local storage
    navigateToNextPage(); // Navigate to the next page
    console.log(valuesArray);
    // console.log(typeof valuesArray);
}

// Function to handle the "No" button click
function handleNoClick() {
    valuesArray.push(0); // Store the value "0"
    localStorage.setItem('valuesArray', JSON.stringify(valuesArray)); // Save the array back to local storage
    navigateToNextPage(); // Navigate to the next page
    console.log(valuesArray);
    console.log(typeof valuesArray);
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


// Add event listeners to the buttons after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('yesButton').addEventListener('click', handleYesClick);
    document.getElementById('noButton').addEventListener('click', handleNoClick);
});
