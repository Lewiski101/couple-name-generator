document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburgerMenu.addEventListener('click', function() {
        // Toggle active class on hamburger menu
        this.classList.toggle('active');
        
        // Toggle mobile navigation visibility
        mobileNav.classList.toggle('active');
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});

// Second event listener for generating couple name
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and input elements
    const generateBtn = document.getElementById('generate-btn');
    const maleNameInput = document.getElementById('male-name');
    const femaleNameInput = document.getElementById('female-name');
    const coupleNameDisplay = document.getElementById('couple-name');

    // Define multiple patterns for generating couple names
    const namePatterns = [
        (male, female) => male.slice(0, Math.ceil(male.length / 2)) + female.slice(Math.ceil(female.length / 2)),
        (male, female) => female.slice(0, Math.ceil(female.length / 2)) + male.slice(Math.ceil(male.length / 2)),
        (male, female) => male[0] + female + male.slice(-1), // First letter of male + female + last letter of male
        (male, female) => male + female[0] + female.slice(-1), // Male + first & last letters of female
        (male, female) => male.slice(0, 2) + female.slice(0, 2), // First two letters of both names
        (male, female) => male.slice(-3) + female.slice(-3) // Last three letters of both names
    ];

    let currentPatternIndex = 0; // To track the current pattern

    // Function to generate the couple name
    function generateCoupleName() {
        const maleName = maleNameInput.value.trim();
        const femaleName = femaleNameInput.value.trim();

        // Check if both names are entered
        if (maleName && femaleName) {
            // Get the current pattern and apply it
            const pattern = namePatterns[currentPatternIndex];
            let coupleName = pattern(maleName, femaleName);

            // Capitalize first letter and lowercase the rest
            coupleName = coupleName.charAt(0).toUpperCase() + coupleName.slice(1).toLowerCase();

            // Update the display and rotate to the next pattern
            coupleNameDisplay.textContent = `${coupleName}`;
            currentPatternIndex = (currentPatternIndex + 1) % namePatterns.length; // Cycle through patterns
        } else {
            coupleNameDisplay.textContent = "Please enter both names.";
        }
    }

    // Attach the event listener to the button
    generateBtn.addEventListener('click', generateCoupleName);
});

// Redundant hamburger menu toggle removed

// Fix undefined variables (generateButton, name1Input, etc.)
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-btn');
    const name1Input = document.getElementById('male-name');
    const name2Input = document.getElementById('female-name');
    const resultDiv = document.getElementById('couple-name');
    const shareSection = document.getElementById('share-section');

    // Function to create couple name (assuming this is how you want to generate it)
    generateButton.addEventListener('click', () => {
        console.log("Generate button clicked"); // Debugging
        const name1 = name1Input.value.trim();
        const name2 = name2Input.value.trim();
      
        if (!name1 || !name2) {
            resultDiv.textContent = "Please enter both names.";
            shareSection.style.display = "none";
            console.log("Invalid input, hiding share section"); // Debugging
            return;
        }
      
        const coupleName = createCoupleName(name1, name2);
        resultDiv.textContent = `Your Couple Name: ${coupleName}`;
        shareSection.style.display = "block"; // Should show the section
        console.log("Displaying share section"); // Debugging
    });
});

// Function to get the couple name from the page
function getCoupleName() {
    return document.getElementById('couple-name').innerText.trim();
}

// Function to handle WhatsApp share
function shareWhatsApp() {
    const coupleName = getCoupleName(); // Get the couple name
    const url = encodeURIComponent(window.location.href); // Current page URL
    const text = encodeURIComponent(`Check Out Our Awesome Couple Name: ${coupleName} . Visit [couplenamegenerator.netlify.app] for more!  ${url}`);
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, '_blank');
}

// Function to handle Facebook share
function shareFacebook() {
    const coupleName = getCoupleName(); // Get the couple name
    const url = encodeURIComponent(window.location.href); // Current page URL
    const text = encodeURIComponent(`Check Out Our Awesome Couple Name: ${coupleName} . Visit [couplenamegenerator.netlify.app] for more!  ${url}`);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    window.open(facebookUrl, '_blank');
}

// Function to handle Twitter share
function shareTwitter() {
    const coupleName = getCoupleName(); // Get the couple name
    const url = encodeURIComponent(window.location.href); // Current page URL
    const text = encodeURIComponent(`Check Out Our Awesome Couple Name: ${coupleName} . Visit [couplenamegenerator.netlify.app] for more!  ${url}`);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank');
}

