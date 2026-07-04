// =========================================
// SMART TOGA
// app.js
// =========================================

// =========================
// SEARCH TANAMAN
// =========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const nama = card.querySelector("h3").textContent.toLowerCase();

            if (nama.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute("href"));

        if (tujuan) {

            tujuan.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================
// NAVBAR SHADOW
// =========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("nav-scroll");

    } else {

        navbar.classList.remove("nav-scroll");

    }

});

// =========================
// ANIMASI CARD
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    observer.observe(card);

});

// =========================
// BACK TO TOP BUTTON
// =========================

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "backToTop";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnTop.style.display = "flex";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// LOADING ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================
// CARD HOVER EFFECT
// =========================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =========================
// HERO BUTTON
// =========================

const heroButton = document.querySelector(".btn");

if (heroButton) {

    heroButton.addEventListener("click", () => {

        console.log("Masuk ke daftar tanaman");

    });

}

// =========================
// TAHUN FOOTER OTOMATIS
// =========================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    const tahun = new Date().getFullYear();

    footer.innerHTML = `© ${tahun} Smart TOGA - Program Kerja KKN`;

}

// =========================
// PREVIEW GAMBAR
// (dipakai jika nanti ada galeri)
// =========================

const images = document.querySelectorAll(".preview-image");

images.forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});

// =========================
// KONSOLE
// =========================

console.log("Smart TOGA Berhasil Dimuat");