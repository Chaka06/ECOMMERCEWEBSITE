const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("#search-input");
    const rows = document.querySelectorAll(".row");

    searchInput.addEventListener("keyup", function(event) {
        const searchText = event.target.value.trim().toLowerCase();

        rows.forEach(function(row) {
            const title = row.querySelector("h4").innerText.toLowerCase();
            const price = row.querySelector("p").innerText.toLowerCase();
            const titleMatch = new RegExp(searchText, 'i').test(title);
            const priceMatch = new RegExp(searchText, 'i').test(price);

            row.style.display = titleMatch || priceMatch ? "block" : "none";
        });
    });
});
