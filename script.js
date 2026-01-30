document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation CSS with tilt
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatAnimation {
            0%, 100% {
                transform: translateY(0px) rotateY(15deg) rotateX(-5deg);
            }
            50% {
                transform: translateY(-30px) rotateY(15deg) rotateX(-5deg);
            }
        }
    `;
    document.head.appendChild(style);

    // Apply floating animation to hero_img container
    const heroImgContainer = document.querySelector('.right_hero .hero_img');
    
    if (heroImgContainer) {
        heroImgContainer.style.perspective = '1200px';
        heroImgContainer.style.animation = 'floatAnimation 4s ease-in-out infinite';
    }

    // Navigation smooth scrolling
    const navItems = document.querySelectorAll('.navlist ul li');
    const sections = {
        'home': '#hero',
        'about': '#page-2',
        'project': '#page-3',
        'contact': '#page-4'
    };

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemText = this.textContent.trim().toLowerCase();
            const targetSection = sections[itemText];
            
            if (targetSection) {
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Scroll down functionality for scrolDown element
    const scrolDownElement = document.querySelector('.scrolDown');
    if (scrolDownElement) {
        scrolDownElement.addEventListener('click', function() {
            // Scroll to the page-2 section smoothly
            const page2 = document.querySelector('.page-2');
            if (page2) {
                page2.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Resume download functionality
    const resumeButtons = document.querySelectorAll('.resume');
    resumeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = './assets/Jagamohan_resume.pdf'; // Path to your resume file
            link.download = 'Jagamohan_resume.pdf'; // Name for downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

});
