// async/await
async function getData(city) {
  try {
    const foobar = await fetch(`http://api.weatherapi.com/v1/current.json?key=29a43923498e423e92d183223230102&q=${city}`)
    const data = await foobar.json();

    console.log(data);
    console.log(data.current.temp_c);

    const content = document.querySelector("#weather-info");
    content.innerHTML = `
    
      <p>${data.location.name}, ${data.location.country}</p>
      <p>${data.current.temp_c} °C</p>
      <p><img src="${data.current.condition.icon}" alt="${data.current.condition.text}" /> ${data.current.condition.text}</p>
    
    `;
  } catch (error) {
    console.warn(`Nope: ${error}`);
  }
}
getData("Toronto");