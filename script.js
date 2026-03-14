// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================= MOBILE MENU AUTO CLOSE =================

const navLinks = document.querySelectorAll("#mobileMenu .nav-link");
const mobileMenu = document.getElementById("mobileMenu");

if (navLinks && mobileMenu) {

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            const bsCollapse = new bootstrap.Collapse(mobileMenu, {
                toggle: false
            });

            bsCollapse.hide();

        });

    });

}


// ================= GALLERY MODAL IMAGE =================

function showModal(src) {

    const modalImage = document.getElementById("modalImage");

    if (modalImage) {
        modalImage.src = src;
    }

}


// ================= FORM VALIDATION =================

(() => {

    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {

                event.preventDefault()
                event.stopPropagation()

            }

            form.classList.add('was-validated')

        }, false)

    })

})();


// ================= NAVBAR SHADOW ON SCROLL =================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".fixed-header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    }
    else {

        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

    }

});


// ================= CONTACT FORM + WHATSAPP =================

const contactForm = document.querySelector("#contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const successMsg = document.getElementById("successMsg");

        if (successMsg) {
            successMsg.classList.remove("d-none");
        }

        // form reset
        this.reset();

        // WhatsApp Number
        const whatsappNumber = "918005747124";

        // message
        const whatsappMessage =
            `New Jewellery Inquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

        const url =
            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

        // open whatsapp
        setTimeout(function () {

            window.open(url, "_blank");

        }, 1500);

    });

}

// footer 

function openInsta() {

    window.open("https://www.instagram.com/nilesh_prajapat001/", "_blank");

}