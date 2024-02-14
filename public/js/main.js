const datePicker = document.querySelector("#date-picker");
const imgContainer = document.querySelector("#img-container");
let apiUrl = "https://api.nasa.gov/planetary/apod?api_key=5XYp2eBUxpJyA0uaDnNiXIB2JKmBcTIz63xt2j6B";

async function getData(date) {
  try {
    // if date entered, update url
    if (date) {
      apiUrl = `https://api.nasa.gov/planetary/apod?api_key=5XYp2eBUxpJyA0uaDnNiXIB2JKmBcTIz63xt2j6B&date=${date}`
    }
    // get data from API call
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data);

    // add content to page
    imgContainer.innerHTML = `
      <img src="${data.url}" alt="${data.title}" />
      <p class="caption">${data.explanation}</p>
    `;

  } catch (error) {
    console.warn(error);
  }
}
getData();

datePicker.addEventListener('change', () => {
  date = datePicker.value;
  getData(date);
})