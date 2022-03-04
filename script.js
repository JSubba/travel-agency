// destination data
const destinationDOM = document.getElementById("destinations");
const videoDOM = document.getElementById("videos");

fetch("destinations.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let destinationResorts = data.destinations;

    displayDestinations = "";
    destinationResorts = destinationResorts.map((item) => {
      const { name, description, image, video } = item;

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

// video play
let video = document.querySelectorAll("video");

video.forEach((play) =>
  play.addEventListener("click", () => {
    play.classList.toggle("active");

    if (play.paused) {
      play.play();
    } else {
      play.pause();
      play.currentTime = 0;
    }
  })
);
