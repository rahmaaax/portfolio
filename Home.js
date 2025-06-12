// All skills data
const allSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'Angular', 'AngularJS', 
    'Arduino', 'SQL', 'T-SQL', 'Microsoft SQL', 'OOP',
    'Microsoft Access', 'Microsoft Office', 'Odoo', 'Wix', 'Python',
    'Java', 'C', 'Git', 'Responsive Design', 'SEO',
    'Problem Solving', 'Time Management', 'Attention to Detail', 
    'Cloudflare', 'Google Analytics', 'Network Security', 
    'Image Processing', 'Machine Learning'
];

// DOM elements
const skillsTrack = document.getElementById('skillsTrack');
const skillsGrid = document.getElementById('skillsGrid');
const carouselContainer = document.getElementById('carouselContainer');
const toggleViewBtn = document.getElementById('toggleViewBtn');

// Create skill elements
function createSkillElements() {
    // Create carousel items
    skillsTrack.innerHTML = '';
    allSkills.forEach(skill => {
        const pill = document.createElement('span');
        pill.className = 'skill-pill';
        pill.textContent = skill;
        skillsTrack.appendChild(pill);
    });
    
    // Create grid items
    skillsGrid.innerHTML = '';
    allSkills.forEach(skill => {
        const gridPill = document.createElement('span');
        gridPill.className = 'skill-pill';
        gridPill.textContent = skill;
        skillsGrid.appendChild(gridPill);
    });
}

// Animate carousel
let currentIndex = 0;
let carouselInterval;
const visibleSkills = 10;

function startCarousel() {
    clearInterval(carouselInterval);
    
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % (allSkills.length - visibleSkills + 1);
        const pillWidth = document.querySelector('.skill-pill').offsetWidth + 15;
        const offset = -currentIndex * pillWidth;
        skillsTrack.style.transform = `translateX(${offset}px)`;
    }, 2000);
}

// Toggle between views
function toggleView() {
    const showingGrid = skillsGrid.style.display === 'grid';
    
    if (showingGrid) {
        // Show carousel
        skillsGrid.style.display = 'none';
        carouselContainer.style.display = 'block';
        toggleViewBtn.textContent = 'View All Skills';
        startCarousel();
    } else {
        // Show grid
        clearInterval(carouselInterval);
        carouselContainer.style.display = 'none';
        skillsGrid.style.display = 'grid';
        toggleViewBtn.textContent = 'Hide Skills';
    }
}

// Initialize
function init() {
    createSkillElements();
    startCarousel();
    toggleViewBtn.addEventListener('click', toggleView);
    
    // Pause on hover
    skillsTrack.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    skillsTrack.addEventListener('mouseleave', () => {
        if (skillsGrid.style.display !== 'grid') {
            startCarousel();
        }
    });
}

// Start everything
init();

const words = ['Web Developer', 'UI/UX Designer', 'Security Analyst', 'Tech Explorer'];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;
let wordIndex = 0;
let charIndex = 0;

const textSpan = document.querySelector('.text-animation');

function type() {
  if (charIndex < words[wordIndex].length) {
    textSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    textSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) setTimeout(type, delayBetweenWords);
});
