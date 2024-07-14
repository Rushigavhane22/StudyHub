// ------------------------js for EY rating
document.addEventListener('DOMContentLoaded', function () {
    // Selecting DOM elements
    const prevButton = document.querySelector('.ey-review-prev'); // Previous button
    const nextButton = document.querySelector('.ey-review-next'); // Next button
    const track = document.querySelector('.slick-track'); // Track element to translate
    const items = document.querySelectorAll('.home-ey-review-carousel-item'); // Individual carousel items
    let currentIndex = 0;

    // Function to update carousel display based on newIndex
    function updateCarousel(newIndex) {
        items[currentIndex].classList.remove('slick-active');
        items[newIndex].classList.add('slick-active');
        track.style.transform = `translateX(-${newIndex * 100}%)`;
        currentIndex = newIndex;
    }

    // Event listener for previous button click
    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(newIndex);
    });

    // Event listener for next button click
    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % items.length;
        updateCarousel(newIndex);
    });
});






// ------------------------------js for courses
document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const items = carousel.querySelectorAll('.course-box');
        const itemWidth = items[0].offsetWidth + 20; // Include the margin between items
        const visibleItems = 4; // Adjust the number of visible items here
        let currentIndex = 0;

        function moveCarousel(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex > items.length - visibleItems) {
                currentIndex = items.length - visibleItems;
            }
            const newTransform = -currentIndex * itemWidth;
            track.style.transform = `translateX(${newTransform}px)`;
        }

        // Attach the moveCarousel function to the buttons within this carousel
        carousel.querySelector('.carousel-button.prev').addEventListener('click', () => moveCarousel(-1));
        carousel.querySelector('.carousel-button.next').addEventListener('click', () => moveCarousel(1));

        // Initial setting for responsive behavior
        moveCarousel(0);
    });
});








// -----------------------------js for menu

function menuToggle1() {
    const navbarBottom = document.querySelector('.navbar-bottom');
    const loginBtn = document.querySelector('.Login-btn');
    
    navbarBottom.classList.toggle('active');
    loginBtn.classList.toggle('active');
  }
  





// --------- toggle dropdown
function showContent(contentId) {
    // Hide all rightdetails
    var rightDetails = document.querySelectorAll('.rightdetails');
    rightDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Show the selected rightdetails based on contentId
    var selectedDetail = document.getElementById('rightContent' + contentId);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

function menuToggle() {
    var dropdownContent = document.querySelector('.courses-dropdown .dropdown-content');
    dropdownContent.classList.toggle('show');

    // Show the first content by default when menu is toggled
    showContent(1);
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon') && !event.target.matches('.courses-dropdown a')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Show Data Science & Analytics content by default
document.addEventListener('DOMContentLoaded', function() {
    showContent(1);
});




// ----------------------js for FAQ
document.addEventListener('DOMContentLoaded', function() {
    var defaultAnswer = document.getElementById('answer1');
    defaultAnswer.style.display = 'block';
});

function toggleAnswer(id) {
    // Reset all answers to hide them
    var answers = document.querySelectorAll('.answer');
    answers.forEach(function(answer) {
        answer.style.display = 'none';
    });

    // Display the clicked answer
    var answer = document.getElementById('answer' + id);
    answer.style.display = 'block';

    // Make the clicked question bold and reset others
    var questions = document.querySelectorAll('.faq-left ul li');
    questions.forEach(function(question, index) {
        if (index + 1 === id) {
            question.classList.add('bold');
        } else {
            question.classList.remove('bold');
        }
    });
}
