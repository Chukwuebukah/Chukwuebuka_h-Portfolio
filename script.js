// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Skill bars animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const skill = bar.getAttribute('data-skill');
        
        bar.innerHTML = `
            <div class="flex justify-between mb-1">
                <span class="text-gray-700">${skill}</span>
                <span class="text-gray-700">${percentage}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full transition-all duration-1000" style="width: 0%"></div>
            </div>
        `;

        // Animate skill bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.bg-purple-600');
                    progressBar.style.width = `${percentage}%`;
                }
            });
        });

        observer.observe(bar);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/90', 'backdrop-blur-sm');
    } else {
        nav.classList.remove('bg-white/90', 'backdrop-blur-sm');
    }
});

// Add typing animation to hero text
const heroText = "Software Developer & Web Developer";
const heroElement = document.querySelector('#home p');
let index = 0;

function typeWriter() {
    if (index < heroText.length) {
        heroElement.textContent = heroText.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter); 