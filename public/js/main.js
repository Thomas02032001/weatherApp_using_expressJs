const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const dataHide = document.querySelector('.middle_layer');
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if (cityVal === '') {
        city_name.innerText = 'Plz Write the name before search';
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=63839740796cd80b5fe0a45d51109f02`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            let temp_in_deg = Math.floor(arrData[0].main.temp - 273);
            temp_real_val.innerText = temp_in_deg;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Plz enter the city name properly';
            dataHide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo);
