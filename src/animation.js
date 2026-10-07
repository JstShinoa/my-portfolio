import groudonBg from "./assets/groudon-bg.png";

/* ========================================
   🌋 GROUDON PORTFOLIO ANIMATIONS
======================================== */

function setupScrollReveal() {
    const elements = document.querySelectorAll(
        "section, .project"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}


/* ========================================
   🔥 FLOATING EMBERS
======================================== */

function createEmbers() {
    const emberContainer = document.createElement("div");

    emberContainer.className = "ember-container";

    document.body.appendChild(emberContainer);

    const emberCount = 25;

    for (let i = 0; i < emberCount; i++) {
        const ember = document.createElement("span");

        ember.className = "ember";

        ember.style.left = `${Math.random() * 100}%`;

        ember.style.animationDelay =
            `${Math.random() * 6}s`;

        ember.style.animationDuration =
            `${4 + Math.random() * 5}s`;

        const size = 2 + Math.random() * 4;

        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;

        emberContainer.appendChild(ember);
    }
}


/* ========================================
   🔥 MOUSE GLOW
======================================== */

function setupMouseGlow() {
    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", (event) => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}


/* ========================================
   🌋 PROJECT CARD INTERACTION
======================================== */

function setupProjectCards() {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        project.addEventListener("mousemove", (event) => {
            const rect = project.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            project.style.setProperty("--mouse-x", `${x}px`);
            project.style.setProperty("--mouse-y", `${y}px`);
        });

        project.addEventListener("mouseleave", () => {
            project.style.setProperty("--mouse-x", "50%");
            project.style.setProperty("--mouse-y", "50%");
        });
    });
}


/* ========================================
   🔥 PROFILE AURA
======================================== */

function setupProfileAura() {
    const profile = document.querySelector(".profile-img");

    if (!profile) return;

    profile.classList.add("profile-aura");
}


/* ========================================
   ⚡ NAVBAR INTERACTION
======================================== */

function setupNavbar() {
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("nav-active");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("nav-active");
        });
    });
}


/* ========================================
   🚀 START
======================================== */

function startAnimations() {
    setupGroudonBackground();

    setupScrollReveal();
    createEmbers();
    setupMouseGlow();
    setupProjectCards();
    setupProfileAura();
    setupNavbar();
    setupHeroInteraction();
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        startAnimations
    );
} else {
    startAnimations();
}

/* ========================================
   🌋 GROUDON BACKGROUND
======================================== */

function setupGroudonBackground() {
    const background = document.createElement("div");

    background.className = "groudon-background";

    background.style.backgroundImage =
        `url("${groudonBg}")`;

    document.body.prepend(background);

    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX =
            (event.clientX / window.innerWidth - 0.5);

        mouseY =
            (event.clientY / window.innerHeight - 0.5);

        targetX = mouseX * 18;
        targetY = mouseY * 12;
    });

    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
    });

    function animateBackground() {
        currentX +=
            (targetX - currentX) * 0.05;

        currentY +=
            (targetY - currentY) * 0.05;

        const parallaxY = scrollY * 0.08;

        background.style.transform =
            `translate3d(
                ${currentX}px,
                ${currentY + parallaxY}px,
                0
            ) scale(1.08)`;

        requestAnimationFrame(
            animateBackground
        );
    }

    animateBackground();
}

/* ========================================
   🔥 HERO MOUSE MOVEMENT
======================================== */

function setupHeroInteraction() {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    document.addEventListener("mousemove", (event) => {
        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        hero.style.setProperty(
            "--hero-x",
            `${x * 8}px`
        );

        hero.style.setProperty(
            "--hero-y",
            `${y * 5}px`
        );
    });
}