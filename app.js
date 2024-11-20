let body = "";

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      body += `
        <div id="h5" class="col">
          <div class="card shadow-sm" data-aos="fade-up" data-aos-duration="1500">
            <img src="${element.flags.svg}" alt="Flag of ${
        element.name.common
      }" class="card-img-top" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${element.name.common}</h5>
              <p class="card-text">
                <strong>Capital:</strong> ${
                  element.capital ? element.capital[0] : "N/A"
                }<br>
                <strong>Region:</strong> ${element.region}<br>
                <strong>Population:</strong> ${element.population.toLocaleString()}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-sm btn-primary">View on Google Map</button>
            
              </div>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("row").innerHTML = body;
  });

function display() {
  let name = document.getElementById("input").value.trim();

  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res) => {
      if (!res.ok) {
        Swal.fire({
          title: "Country Not Found ! ",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
            data.forEach((element) => {
              body += `
        <div id="h5" class="col">
          <div class="card shadow-sm" data-aos="fade-up" data-aos-duration="1500">
            <img src="${element.flags.svg}" alt="Flag of ${
                element.name.common
              }" class="card-img-top" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${element.name.common}</h5>
              <p class="card-text">
                <strong>Capital:</strong> ${
                  element.capital ? element.capital[0] : "N/A"
                }<br>
                <strong>Region:</strong> ${element.region}<br>
                <strong>Population:</strong> ${element.population.toLocaleString()}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-sm btn-primary">View on Google Map</button>
            
              </div>
            </div>
          </div>
        </div>
      `;
            });

            document.getElementById("row").innerHTML = body;
          });
      }
      return res.json();
    })
    .then((data) => {
      let body = "";
      data.forEach((element) => {
        body += `
        <div id="h5" class="col">
          <div class="card shadow-sm" data-aos="fade-up" data-aos-duration="1500">
            <img src="${element.flags.svg}" alt="Flag of ${
          element.name.common
        }" 
              class="card-img-top" style="height: 150px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${element.name.common}</h5>
              <p class="card-text">
                <strong>Capital:</strong> ${
                  element.capital ? element.capital[0] : "N/A"
                }<br>
                <strong>Region:</strong> ${element.region}<br>
                <strong>Population:</strong> ${element.population.toLocaleString()}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <a href="https://www.google.com/maps?q=${element.name.common}" 
                  target="_blank" class="btn btn-sm btn-primary">
                  View on Google Map
                </a>
              </div>
            </div>
          </div>
         </div>
      `;
      });

      document.getElementById("row").innerHTML = body;
    });
}
