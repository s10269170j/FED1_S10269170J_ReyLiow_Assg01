const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;
const slides = Array.from(track.children);

// Function to update the carousel position
const updateCarousel = () => {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Handle clicking the "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel();
});

// Handle clicking the "Next" button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);


// Smooth scroll for "Get in Touch" button
document.querySelector('.cta-button').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});





// for contact page

    // Handle form submission and show confirmation message
    function handleFormSubmission(event) {
      event.preventDefault(); // Prevent form from submitting immediately

      // Show confirmation message
      document.getElementById('confirmationMessage').style.display = 'block';

      // Simulate sending a confirmation email (this should be handled by backend)
      sendConfirmationEmail();

      // You can also implement form submission via AJAX here if you don't want to reload the page.
      // For now, we just simulate a delay and "submit" the form.

      setTimeout(function() {
        // Simulate successful form submission
        alert('Your booking has been successfully submitted.');
        document.getElementById('playtimeForm').reset(); // Reset the form after submission
      }, 3000); // Simulate a 3-second delay before showing the success alert
    }

    function sendConfirmationEmail() {
      // In a real-world scenario, you would send the confirmation email from your backend
      console.log('Sending confirmation email...');
    }
  

    // menu page

// If you want to add an order confirmation alert
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("Thank you for your order! We will process it shortly.");
  });
});

//booking
// JavaScript for form submission handling
function handleBookingSubmission(event) {
  event.preventDefault(); // Prevent page reload

  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.style.display = 'block'; // Show the confirmation message
}

document.getElementById('playtime-form').addEventListener('submit', function (e) {
  const startTime = document.getElementById('start-time').value;
  const endTime = document.getElementById('end-time').value;

  if (endTime <= startTime) {
    e.preventDefault();
    alert('End time must be after the start time.');
  }
});



    








