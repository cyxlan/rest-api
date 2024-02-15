const datePicker = document.querySelector("#date-picker");
const imgContainer = document.querySelector("#img-container");
let apiUrl;

// get today's date as YYYY-MM-DD, accounting for UTC offset
let today = new Date();
const offset = today.getTimezoneOffset();
today = new Date(today.getTime() - (offset*60*1000));
today = today.toISOString().substring(0,10);
let date = today;
// prevent picking future dates
datePicker.setAttribute("max", today);

async function getData(date) {
  try {
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=5XYp2eBUxpJyA0uaDnNiXIB2JKmBcTIz63xt2j6B&date=${date}`
    // get data from API call
    const response = await fetch(apiUrl)
    const data = await response.json();
    console.log(data);

    // set up HTML for image or video
    let tag;
    if (data.media_type === "image") {
      tag = `<img src="${data.url}" alt="${data.title}" />`;
    } else if (data.media_type === "video") {
      tag = `<iframe src="${data.url}"></iframe>`
    }
    // add content to page
    imgContainer.innerHTML = `
      ${tag}
      <p class="caption">${data.explanation}</p>
    `;

  } catch (error) {
    console.warn(error);
  }
}
getData(date);

// on date being picked, update date & get new content
datePicker.addEventListener('change', () => {
  date = datePicker.value;
  getData(date);
})