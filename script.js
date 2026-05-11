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

    /* Form handling is now managed by Formspree AJAX SDK in index.html */
    /* ========================================================
       5. Language Switcher Logic
    ======================================================== */
    const translations = {
        "en": {
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-vibe": "Vibe Coding",
            "nav-contact": "Contact",
            "welcome-title": "Welcome.",
            "welcome-p1": "My name is <strong>Michal Weglewski</strong>, and I am currently in my last year of the Swedish high school (Gymnasiet). I have a deep passion for computer science and software development.",
            "welcome-p2": "I enjoy bringing ideas to life, whether it's through interactive hardware projects, building robust databases, or crafting creative layouts. I am constantly learning new technologies and exploring innovative ways to code.",
            "skills-title-my": "My",
            "skills-title-skills": "Skills",
            "skills-subtitle": "A scalable overview of my current tech stack and projects.",
            "skill-fritzing-title": "Fritzing",
            "skill-fritzing-desc": "Designing electronic circuits and PCB layouts. Utilizing Fritzing to map out complex hardware interactions efficiently.",
            "skill-pico-title": "Raspberry Pi Pico",
            "skill-pico-desc": "Hardware programming utilizing components such as buttons, count displays, LEDs, and buzzers to build interactive physical systems.",
            "skill-sql-title": "Microsoft SQL",
            "skill-sql-desc": "Searching in databases, creating databases & tables, inserting values, enforcing constraint types, and writing Views & Stored Procedures.",
            "skill-csharp-title": "Programming in C#",
            "skill-csharp-desc": "Building applications with C#, leveraging object-oriented programming principles to solve intricate software challenges.",
            "vibe-title-view": "View on",
            "vibe-title-vibe": "Vibe Coding",
            "vibe-p1": "I think vibe coding is a great concept but it's not always practical. AI can help build applications or websites fast, but it doesn't always meet the requirements of the user. I think it's best to use AI as a tool to help you build the ground for applications or websites, but use your own brain to actually make sure they are secure, meet demands, changes are documented and the code is efficient.",
            "vibe-p2": "It's important to be able to adapt and use the newest technologies to stay competetive, but also know the risks that could come with it.",
            "contact-title-get": "Get in",
            "contact-title-touch": "Touch",
            "contact-desc": "Interested in collaborating or have a question? Leave a message below, and I'll get back to you soon.",
            "form-name": "Name",
            "form-email": "Email",
            "form-message": "Message",
            "form-submit": "Send Message",
            "form-success": "Thanks! Your message has been sent.",
            "form-error": "Oops! There was a problem submitting your form.",
            "show-more": "Show More",
            "back-to-about": "Back",
            "cv-role": "Computer Science Student",
            "cv-contact-heading": "Contact",
            "cv-email": "email@placeholder.com",
            "cv-phone": "+46 XXX XXX XXX",
            "cv-location": "Sweden",
            "cv-edu-heading": "Education",
            "cv-edu-degree": "Computer Science Programme",
            "cv-edu-school": "Gymnasiet",
            "cv-edu-dates": "2023 – 2026",
            "cv-skills-heading": "Skills",
            "cv-level-intermediate": "Intermediate",
            "cv-level-advanced": "Advanced",
            "cv-summary-heading": "Summary",
            "cv-summary-text": "Placeholder summary text. Replace this with a brief professional description about yourself, your goals, and what makes you stand out as a computer science student and developer.",
            "cv-exp-heading": "Experience",
            "cv-job1-title": "Placeholder Job Title, Company Name",
            "cv-job1-dates": "Month Year – Present",
            "cv-job1-b1": "Placeholder responsibility or achievement. Replace with a real bullet point describing what you did.",
            "cv-job1-b2": "Placeholder responsibility or achievement. Replace with a real bullet point describing what you did.",
            "cv-job1-b3": "Placeholder responsibility or achievement. Replace with a real bullet point describing what you did.",
            "cv-job2-title": "Placeholder Job Title, Company Name",
            "cv-job2-dates": "Month Year – Month Year",
            "cv-job2-b1": "Placeholder responsibility or achievement. Replace with a real bullet point describing what you did.",
            "cv-job2-b2": "Placeholder responsibility or achievement. Replace with a real bullet point describing what you did.",
            "cv-ref-heading": "References",
            "cv-ref-text": "References available upon request.",
            "footer-text": "&copy; 2026 Michal Weglewski. Designed with passion.",
            "back-to-skills": "&larr; Back to Skills",
            "skill-sql-title-detail": "SQL",
            "sql-detail-h3": "Database Design & Management",
            "sql-detail-p1": "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a robust software product with the primary function of storing and retrieving data as requested by other software applications.",
            "sql-detail-p2": "My capabilities include creating normalized databases and tables, inserting and manipulating values, enforcing constraint types to maintain data integrity, and conducting advanced queries. I also write complex Views and Stored Procedures, enabling optimized backend performance and secure data transactions for both straightforward and enterprise-level scenarios.",
            "skill-pico-title-detail": "Pico",
            "pico-detail-h3": "Physical Computing & Microcontrollers",
            "pico-detail-p1": "The Raspberry Pi Pico is a versatile microcontroller board built using the RP2040 microcontroller chip. It provides a perfect platform for learning hardware programming and interfacing directly with physical components.",
            "pico-detail-p2": "My work with the Pico involves programming in MicroPython or embedded C/C++ to utilize components such as tactile buttons, environmental sensors, 7-segment numerical displays, RGB LEDs, and buzzers. These projects combine both software logic and electrical engineering fundamentals to build interactive physical systems capable of responding to real-world stimuli.",
            "skill-fritzing-title-detail": "Circuit Design",
            "fritzing-detail-h3": "Circuit Design & PCB Layout",
            "fritzing-detail-p1": "Fritzing is an open-source hardware initiative that makes electronics accessible as a creative material for anyone. We offer a software tool, a community website, and services in the spirit of Processing and Arduino.",
            "fritzing-detail-p2": "In my projects, I utilize Fritzing to map out complex hardware interactions efficiently. It allows me to design electronic circuits, prototype with breadboards, and create final PCB layouts for professional manufacturing. By bridging the gap between physical prototypes and digital representations, Fritzing is an invaluable tool in my hardware engineering workflow.",
            "skill-csharp-title-detail": "C#",
            "csharp-detail-h3": "Software Engineering & Object-Oriented Principles",
            "csharp-detail-p1": "C# (C-Sharp) is a modern, object-oriented, and type-safe programming language. Created by Microsoft, C# enables developers to build secure, cross-platform and robust applications that run elegantly within the .NET ecosystem.",
            "csharp-detail-p2": "I employ C# for building complex business logic applications, actively leveraging strict object-oriented programming (OOP) principles to conceptualize and solve intricate software challenges. Through C#, I apply design patterns, maintain system scalability, and develop backend services that interface elegantly with databases and frontend frameworks."
        },
        "sv": {
            "nav-about": "Om mig",
            "nav-skills": "Färdigheter",
            "nav-vibe": "Vibe Coding",
            "nav-contact": "Kontakt",
            "welcome-title": "Välkommen.",
            "welcome-p1": "Mitt namn är <strong>Michal Weglewski</strong>, och jag går för närvarande mitt sista år på gymnasiet. Jag har ett djupt intresse för datavetenskap och mjukvaruutveckling.",
            "welcome-p2": "Jag gillar att förverkliga idéer, oavsett om det är genom interaktiva hårdvaruprojekt, robusta databaser eller kreativa layouter. Jag lär mig ständigt nya tekniker och utforskar innovativa sätt att koda.",
            "skills-title-my": "Mina",
            "skills-title-skills": "Färdigheter",
            "skills-subtitle": "En skalbar översikt av min nuvarande teknikstack och projekt.",
            "skill-fritzing-title": "Fritzing",
            "skill-fritzing-desc": "Design av elektroniska kretsar och PCB-layouter. Använder Fritzing för att effektivt kartlägga komplexa hårdvaruinteraktioner.",
            "skill-pico-title": "Raspberry Pi Pico",
            "skill-pico-desc": "Hårdvaruprogrammering med komponenter som knappar, displayer, LED-lampor och buzzers för att bygga interaktiva fysiska system.",
            "skill-sql-title": "Microsoft SQL",
            "skill-sql-desc": "Sökning i databaser, skapande av databaser och tabeller, insättning av värden och skrivande av vyer och lagrade procedurer.",
            "skill-csharp-title": "Programmering i C#",
            "skill-csharp-desc": "Bygga applikationer med C# och använda objektorienterade principer för att lösa komplexa mjukvaruutmaningar.",
            "vibe-title-view": "Syn på",
            "vibe-title-vibe": "Vibe Coding",
            "vibe-p1": "Jag tycker att vibe coding är ett bra koncept men det är inte alltid praktiskt. AI kan hjälpa till att bygga applikationer snabbt, men det uppfyller inte alltid användarens krav. Det är bäst att använda AI som ett verktyg för grunden, men använda sin egen hjärna för säkerhet och effektivitet.",
            "vibe-p2": "Det är viktigt att kunna anpassa sig till ny teknik för att vara konkurrenskraftig, men också känna till riskerna.",
            "contact-title-get": "Ta",
            "contact-title-touch": "Kontakt",
            "contact-desc": "Intresserad av samarbete eller har du en fråga? Lämna ett meddelande nedan så återkommer jag snart.",
            "form-name": "Namn",
            "form-email": "E-post",
            "form-message": "Meddelande",
            "form-submit": "Skicka meddelande",
            "form-success": "Tack! Ditt meddelande har skickats.",
            "form-error": "Hoppsan! Det uppstod ett problem när du skickade formuläret.",
            "show-more": "Visa mer",
            "back-to-about": "Tillbaka",
            "cv-role": "Datavetenskapsstudent",
            "cv-contact-heading": "Kontaktuppgifter",
            "cv-email": "email@placeholder.com",
            "cv-phone": "+46 XXX XXX XXX",
            "cv-location": "Sverige",
            "cv-edu-heading": "Utbildning",
            "cv-edu-degree": "Datorvetenskapsprogram",
            "cv-edu-school": "Gymnasiet",
            "cv-edu-dates": "2023 – 2026",
            "cv-skills-heading": "Kompetens",
            "cv-level-intermediate": "Medel",
            "cv-level-advanced": "Avancerad",
            "cv-summary-heading": "Sammanfattning",
            "cv-summary-text": "Platshållartext för sammanfattning. Ersätt detta med en kort professionell beskrivning om dig själv, dina mål och vad som gör dig unik som datavetenskapsstudent och utvecklare.",
            "cv-exp-heading": "Arbetslivserfarenhet",
            "cv-job1-title": "Platshållartitel, Företagsnamn",
            "cv-job1-dates": "Månad År – Nuvarande",
            "cv-job1-b1": "Platshållaransvar eller prestation. Ersätt med en riktig punkt som beskriver vad du gjorde.",
            "cv-job1-b2": "Platshållaransvar eller prestation. Ersätt med en riktig punkt som beskriver vad du gjorde.",
            "cv-job1-b3": "Platshållaransvar eller prestation. Ersätt med en riktig punkt som beskriver vad du gjorde.",
            "cv-job2-title": "Platshållartitel, Företagsnamn",
            "cv-job2-dates": "Månad År – Månad År",
            "cv-job2-b1": "Platshållaransvar eller prestation. Ersätt med en riktig punkt som beskriver vad du gjorde.",
            "cv-job2-b2": "Platshållaransvar eller prestation. Ersätt med en riktig punkt som beskriver vad du gjorde.",
            "cv-ref-heading": "Referenser",
            "cv-ref-text": "Referenser finns tillgängliga på begäran.",
            "footer-text": "&copy; 2026 Michal Weglewski. Designad med passion.",
            "back-to-skills": "&larr; Tillbaka till färdigheter",
            "skill-sql-title-detail": "SQL",
            "sql-detail-h3": "Databashantering & Design",
            "sql-detail-p1": "Microsoft SQL Server är ett relationellt databashanteringssystem utvecklat av Microsoft. Det är en robust mjukvara för att lagra och hämta data på begäran av andra applikationer.",
            "sql-detail-p2": "Mina kunskaper inkluderar att skapa normaliserade databaser, hantera data och skriva komplexa lagrade procedurer för att optimera prestanda och säkerhet.",
            "skill-pico-title-detail": "Pico",
            "pico-detail-h3": "Fysisk beräkning & Mikrokontroller",
            "pico-detail-p1": "Raspberry Pi Pico är ett mångsidigt mikrokontrollerkort byggt med RP2040-chippet. Det är en perfekt plattform för att lära sig hårdvaruprogrammering.",
            "pico-detail-p2": "Mitt arbete med Pico innebär programmering i MicroPython eller C/C++ för att styra komponenter som sensorer, LED-lampor och knappar för att bygga interaktiva system.",
            "skill-fritzing-title-detail": "Kretsdesign",
            "fritzing-detail-h3": "Kretsdesign & PCB-layout",
            "fritzing-detail-p1": "Fritzing är ett initiativ som gör elektronik tillgängligt för alla som ett kreativt material. Det är ett verktyg för att designa och prototypa hårdvara.",
            "fritzing-detail-p2": "I mina projekt använder jag Fritzing för att kartlägga hårdvaruinteraktioner och skapa professionella PCB-layouter för tillverkning.",
            "skill-csharp-title-detail": "C#",
            "csharp-detail-h3": "Mjukvaruutveckling & Objektorienterade principer",
            "csharp-detail-p1": "C# är ett modernt, objektorienterat och typsäkert programmeringsspråk skapat av Microsoft för .NET-ekosystemet.",
            "csharp-detail-p2": "Jag använder C# för att bygga komplexa affärsapplikationer och tillämpar designmönster och objektorienterade principer för att lösa mjukvaruutmaningar."
        }
    };

    const langToggle = document.getElementById("lang-toggle");
    
    function setLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang;
        
        // Save to localStorage
        localStorage.setItem("preferredLang", lang);

        // Sync toggle state
        if (langToggle) {
            langToggle.checked = (lang === "sv");
        }
    }

    // Initialize Language
    const savedLang = localStorage.getItem("preferredLang") || "en";
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener("change", () => {
            const newLang = langToggle.checked ? "sv" : "en";
            setLanguage(newLang);
        });
    }
});
