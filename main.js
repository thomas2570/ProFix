// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Comparison Slider Logic
const slider = document.getElementById('slider');
const afterImg = document.getElementById('after-img');
const handle = document.getElementById('handle');

if (slider && afterImg && handle) {
    const moveSlider = (e) => {
        let x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        let rect = slider.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;

        if (position >= 0 && position <= 100) {
            afterImg.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }
    };

    slider.addEventListener('mousemove', moveSlider);
    slider.addEventListener('touchmove', moveSlider);
}

// Hero Slider Logic
const slides = document.querySelectorAll('.hero-slider .slide');
if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        // Remove prev from the slide that was previously hidden
        slides.forEach(s => s.classList.remove('prev'));
        
        // Mark current as prev
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        // Move to next
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000); // Change every 4 seconds
}


// Booking Modal Logic
const bookingModal = document.getElementById('bookingModal');
const closeModalBtn = document.getElementById('closeModal');
const bookingButtons = document.querySelectorAll('.open-booking-modal');
const bookingForm = document.getElementById('bookingForm');

if (bookingModal && closeModalBtn && bookingForm) {
    // Open Modal
    bookingButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            bookingModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal via Button
    closeModalBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close Modal via Overlay Click
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle Form Submit
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // In a real app, send data to backend here.
        alert("Thank you! Your booking request has been received. Our team will contact you shortly to confirm.");
        
        // Reset and close
        bookingForm.reset();
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}
