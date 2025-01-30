// add polaroid from API call
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

function addPolaroid() {
    fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
        .then(response => response.json())

        .then(data => {
            data.forEach(element => {
                const { id, title, date, url } = element
                container.innerHTML += `
                    <div class="polaroid" polaroidID="${id}" polaroidTitle="${title}">
                        <figure>
                            <img class="pin" src="./img/pin.svg" alt="pin">
                            <img class="photo" width="100%" src="${url}" alt="${title}">
                        </figure>
                
                        <div class="polaroid_info">
                            <span class="date"><strong>${date}</strong></span>
                            <span class="info"><strong>${title}</strong></span>
                        </div>
                    </div>
                `
            });

            let polaroidArray = document.querySelectorAll(".polaroid")

            polaroidArray.forEach(element => {
                element.addEventListener("click", function () {
                    const id = this.getAttribute("polaroidID");
                    console.log(id);

                    const title = this.getAttribute("polaroidTitle");
                    console.log(title);

                    overlay.classList.remove("d-none");
                    overlay.innerHTML = `
                    <button class="back">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                
                    <figure>
                        <img class="zoom" src="https://marcolanci.it/boolean/assets/pictures/${id}.png" alt="${title}">
                    </figure>
                    `;

                    const btnBack = overlay.querySelector(".back");
                    btnBack.addEventListener("click", function () {
                        overlay.classList.add("d-none");
                    })
                })
            });
        })

        .catch(error => {
            console.error(error);
        });
};

addPolaroid();