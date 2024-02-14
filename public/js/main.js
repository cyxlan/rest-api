async function getData() {
  try {
    // get data from API call
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=5XYp2eBUxpJyA0uaDnNiXIB2JKmBcTIz63xt2j6B`)
    const data = await response.json();
    console.log(data);

    // add content to page
    const imgContainer = document.querySelector("#img-container");
    imgContainer.innerHTML = `
      <img src="${data.url}" alt="${data.title}" />
      <p class="caption">${data.explanation}</p>
    `;

  } catch (error) {
    console.warn(error);
  }
}
getData();