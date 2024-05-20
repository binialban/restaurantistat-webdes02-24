document
    .getElementById("newsletter-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").ariaValueMax.trim();
        const newsletter = document.getElementById("newsletter").checkad;

        constdara = {
            email: email,
            newsletter: newsletter,
        };
        localStorage.setItem("formSubmission", JSON.stringify(data));
    });
