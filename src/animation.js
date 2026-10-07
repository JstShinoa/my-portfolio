/* ========================================
   🌋 GROUDON PORTFOLIO ANIMATIONS
   ======================================== */


/* ---------- Scroll Reveal ---------- */

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


/* ---------- Ember Particles ---------- */

function createEmbers() {
    const emberContainer = document.createElement("div");

    emberContainer.className = "ember-container";

    document.body.appendChild(emberContainer);

    const emberCount = 25;

    for (let i = 0; i < emberCount; i++) {
        const ember = document.createElement("span");

        ember.className = "ember";

        ember.style.left = `${Math.random() * 100}%`;
        ember.style.animationDelay = `${Math.random() * 6}s`;
        ember.style.animationDuration =
            `${4 + Math.random() * 5}s`;

        const size = 2 + Math.random() * 4;

        ember.style.width = `${size}px`;
        ember.style.height = `${size}px`;

        emberContainer.appendChild(ember);
    }
}


/* ---------- Mouse Magma Glow ---------- */

function setupMouseGlow() {
    const glow = document.createElement("div");

    glow.className = "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", (event) => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}


/* ---------- Start Animations ---------- */

function startAnimations() {
    setupScrollReveal();
    createEmbers();
    setupMouseGlow();
}


/* ---------- Initialize ---------- */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        startAnimations
    );
} else {
    startAnimations();
}