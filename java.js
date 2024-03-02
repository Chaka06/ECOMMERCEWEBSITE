const header = document.querySelector("header")

window.addEventListener ("croll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navmenu.classList.toggle('open')
}


    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.querySelector("#search-input");
        const products = document.querySelectorAll(".row");

        searchInput.addEventListener("keyup", function (event) {
            const searchText = event.target.value.toLowerCase();

            products.forEach(function (product) {
                const title = product.querySelector("h4").textContent.toLowerCase();
                const price = product.querySelector("p").textContent.toLowerCase();
                const shouldShow = title.includes(searchText) || price.includes(searchText);
                
                if (shouldShow) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

