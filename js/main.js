// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('redirectButton');
    const span = document.getElementsByClassName('close')[0];
    
    // Open modal
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
    
    // Close modal
    span.onclick = function() {
        closeModal();
    }
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === "block") {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Video loading states
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        const loadingDiv = container.querySelector('.video-loading');
        
        iframe.addEventListener('load', function() {
            if (loadingDiv) {
                loadingDiv.style.display = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for elements
    const fadeInElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');
    
    function checkFade() {
        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Add initial styles for animation
    fadeInElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Check on load
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
});
