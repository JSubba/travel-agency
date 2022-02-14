const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const destinationDOM = document.getElementById("destinations");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// data fetch
fetch("destinations.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let destinationResorts = data.destinations;

    displayDestinations = "";
    destinationResorts = destinationResorts.map((item) => {
      const { name, description, image } = item;

      displayDestinations += `
                <div class="card">
                  <a href="#"
                    ><img
                      src="${image}"
                      class="card-img-top"
                      alt="destination-image"
                  /></a>
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <hr />
                    <p class="card-text text-start">
                    ${description}
                    </p>
                  </div>
                </div>
        `;

      destinationDOM.innerHTML = displayDestinations;
    });
  });
