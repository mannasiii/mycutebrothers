/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader")
            .classList.add("hide");

    }, 1000);

});


/* =========================
   NAVBAR
========================= */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   SCROLL FUNCTIONS
========================= */

function scrollToBrothers() {

    document
        .querySelector("#brothers")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToMessage() {

    document
        .querySelector("#message")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SURPRISE POPUP
========================= */

const popup = document.querySelector("#popup");

function showSurprise() {

    popup.classList.add("active");

    createConfetti();

}

function closeSurprise() {

    popup.classList.remove("active");

}


/* Close popup by clicking outside */

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        closeSurprise();
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver
                        .unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   FLOATING PARTICLES
========================= */

const particleContainer =
    document.querySelector(".particles");


for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";

    particleContainer.appendChild(particle);

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("span");

        confetti.innerHTML =
            Math.random() > .5
                ? "✦"
                : "♥";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex = "6000";

        confetti.style.color =
            Math.random() > .5
                ? "#d6a63a"
                : "#8f1825";

        confetti.style.fontSize =
            10 + Math.random() * 20 + "px";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(confetti);


        const animation =
            confetti.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(${window.innerHeight + 100}px)
                             rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        2500 + Math.random() * 2500,

                    easing: "cubic-bezier(.2,.8,.3,1)"
                }
            );


        animation.onfinish = () => {

            confetti.remove();

        };

    }

}