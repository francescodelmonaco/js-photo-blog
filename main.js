// add polaroid from API call
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function addPolaroid() {
    fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
        .then(response => response.json())

        .then(data => {
            data.forEach(element => {
                const { title, date, url } = element
                container.innerHTML += `
                    <div class="polaroid">
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
            })
        })

        .catch(error => {
            console.error(error);
        });
};

addPolaroid();