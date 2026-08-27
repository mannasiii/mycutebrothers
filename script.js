/* ========================================
   PAGE LOADER
======================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .querySelector(".loader")
            .classList.add("hide");

    }, 1000);

});


/* ========================================
   NAVBAR
======================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ========================================
   SCROLL
======================================== */

function scrollToFamily() {

    document
        .querySelector("#family")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ========================================
   PERSONAL MESSAGES
======================================== */

const messages = {

    shubham: {

        name: "Shubham",

        label: "For My Brother",
 
        message:
            "Shubham, no matter how much we tease each other or have our silly arguments, you will always be one of the people I can count on. Thank you for being there, for the memories, the laughs and all those little moments that make our bond special. Happy Rakhi! ❤️"

    },


    siddhant: {

        name: "Siddhant",

        label: "For My Brother",

        message:
            "Siddhant, life is full of moments that come and go, but the memories we create together are the ones I will always keep close. Thank you for being a part of my life and for making our family a little more fun. Happy Raksha Bandhan! ❤️"

    },


    swaraj: {

        name: "Swaraj",

        label: "For My Brother",

        message:
            "Swaraj, brothers have a special talent for annoying each other and somehow still being there when it matters most. Thank you for every laugh, every memory and every crazy moment. I am lucky to have you as my brother. Happy Rakhi! ❤️"

    },


    harsh: {

        name: "Harsh",

        label: "For My Brother",

        message:
            "Harsh, some relationships don't need many words. The memories, laughter and little moments say enough. I hope we continue making crazy memories together for many more years. You will always have a special place in my heart. Happy Rakhi! ❤️"

    },


    father: {

        name: "Dad",

        label: "For My First Protector",

        message:
            "Dad, before anyone else taught me what protection, strength and unconditional love meant, you were already there. Thank you for everything you have done, everything you continue to do and for always being my strongest support. I may not say it enough, but I am incredibly lucky to have you. Happy Raksha Bandhan, Dad. ❤️"

    },
    // jimit: {
    //     name: "Jimit",
    //     label: "For My Brother",
    //     rakhi: "rakhi-jimit",
    //     message:
    //         "Jimit, every family has those special bonds filled with laughter, memories and countless little moments. I am grateful for all the memories we share and for having you as a part of this beautiful family. Keep smiling, keep shining and always stay the same. Happy Raksha Bandhan! ❤️"
    // },

    tanaya: {

        name: "Tanaya",

        label: "For Someone Special",

        message:
            "Tanaya, some people become special simply because of the happiness and warmth they bring into our lives. Thank you for all the beautiful moments, conversations, laughs and memories. I hope this bond always stays just as special. Happy Rakhi! ❤️"

    }

};


/* ========================================
   MODAL ELEMENTS
======================================== */

const modal =
    document.querySelector("#messageModal");

const modalName =
    document.querySelector("#modalName");

const modalLabel =
    document.querySelector("#modalLabel");

const modalMessage =
    document.querySelector("#modalMessage");


/* ========================================
   OPEN PERSONAL MESSAGE
======================================== */

function openMessage(person) {

    const data =
        messages[person];

    if (!data) return;


    modalName.textContent =
        data.name;

    modalLabel.textContent =
        data.label;

    modalMessage.textContent =
        data.message;


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";


    createGoldParticles();

}


/* ========================================
   CLOSE MESSAGE
======================================== */

function closeMessage() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


/* ========================================
   CLOSE ON OUTSIDE CLICK
======================================== */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeMessage();

    }

});


/* ========================================
   ESC KEY
======================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeMessage();

    }

});


/* ========================================
   GENERAL MESSAGE
======================================== */

function openGeneralMessage() {

    modalName.textContent =
        "My Family ❤️";

    modalLabel.textContent =
        "A Message From Me";

    modalMessage.textContent =
        "No matter how different we all are, every one of you has a special place in my life. Thank you for the memories, laughter, support and love. This Rakhi is just a small reminder that I am grateful to have you all.";

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

    createGoldParticles();

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("show");

                    observer
                        .unobserve(
                            entry.target
                        );

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ========================================
   HERO PARTICLES
======================================== */

const particleContainer =
    document.querySelector(".particles");


for (
    let i = 0;
    i < 40;
    i++
) {

    const particle =
        document.createElement("span");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        5 +
        Math.random() * 8 +
        "s";

    particleContainer.appendChild(
        particle
    );

}


/* ========================================
   GOLD MODAL PARTICLES
======================================== */

function createGoldParticles() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.innerHTML =
            "✦";

        particle.style.position =
            "fixed";

        particle.style.left =
            Math.random() * 100 +
            "vw";

        particle.style.top =
            Math.random() * 100 +
            "vh";

        particle.style.color =
            "#d4a43a";

        particle.style.fontSize =
            8 +
            Math.random() * 15 +
            "px";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex =
            "6000";

        document.body.appendChild(
            particle
        );


        particle.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0)",
                    opacity: 0
                },

                {
                    transform:
                        `translateY(-${50 + Math.random() * 100}px)
                         rotate(180deg)`,
                    opacity: .8
                },

                {
                    transform:
                        "translateY(-180px) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration:
                    1800 +
                    Math.random() * 1500,

                easing:
                    "ease-out"
            }
        ).onfinish = () => {

            particle.remove();

        };

    }

}