// ============================================
// SMART TOGA
// Fitur Pencarian Tanaman
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // Ambil input pencarian
    const searchInput = document.getElementById("searchInput");

    // Ambil semua card tanaman
    const cards = document.querySelectorAll(".card");

    // Jika input tidak ada, hentikan
    if (!searchInput) return;

    // Event ketika user mengetik
    searchInput.addEventListener("keyup", function () {

        // Ambil kata kunci
        const keyword = searchInput.value.toLowerCase().trim();

        cards.forEach(function(card){

            // Nama tanaman
            const nama = card.querySelector("h3").textContent.toLowerCase();

            // Deskripsi tanaman
            const deskripsi = card.querySelector("p").textContent.toLowerCase();

            // Jika sesuai pencarian
            if(
                nama.includes(keyword) ||
                deskripsi.includes(keyword)
            ){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

});