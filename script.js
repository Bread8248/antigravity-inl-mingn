document.addEventListener("DOMContentLoaded", () => {
    /* ========================================================
       1. Sticky Navbar
    ======================================================== */
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* ========================================================
       2. Mobile Hamburger Menu
    ======================================================== */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Hamburger Animation
        hamburger.classList.toggle("toggle");
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    /* ========================================================
       3. Scroll Reveal Animations (Intersection Observer)
    ======================================================== */
    // Add "reveal" class to elements we want to animate
    const sectionsToReveal = document.querySelectorAll('.section-title, .glass-panel, .skill-card');
    sectionsToReveal.forEach(el => el.classList.add('reveal'));

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    sectionsToReveal.forEach(section => {
        revealOnScroll.observe(section);
    });

    /* ========================================================
       4. Contact Form Handling
    ======================================================== */
    const form = document.getElementById("portfolio-form");
    const submitBtn = document.querySelector(".submit-btn");

    if(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page refresh (no backend)
            
            // Basic animation/feedback
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Sending...";
            submitBtn.style.opacity = "0.7";

            // Simulate form processing
            setTimeout(() => {
                submitBtn.innerText = "Message Sent!";
                submitBtn.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
                submitBtn.style.opacity = "1";
                submitBtn.style.boxShadow = "none";
                form.reset();

                // Revert back after 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.background = "";
                }, 3000);
            }, 1000);
        });
    }
});
