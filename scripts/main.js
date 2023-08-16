/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

// get input element
const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button')
const flexContainer = document.querySelector('.flex-container');
const flexItemImage = document.querySelector('.flex-item.image');
const flexItemDescription = document.querySelector('.flex-item.description');
const planetImage = document.querySelector('.planet-image');

const description = document.createElement('p');
const weight = document.createElement('p');
weight.classList.add('planet-weight');

let result;

function handleButton() {
  const inputValue = parseFloat(input.value);
  const selectedOption = select.value;
  const selectedPlanet = select.value.toUpperCase();

  flexContainer.style.opacity = '0';

  setTimeout(() => {
    flexItemDescription.hidden = false;
    flexContainer.style.opacity = '100';
    // if input has no value
    if (input.value === '') {
      flexContainer.innerHTML = '';

      // create text
      const text = document.createElement('p');
      text.classList.add('warning-text');
      text.textContent = 'Mass is required';
      flexContainer.appendChild(text);
    }

    // if inputValue is present and no option is selected
    if (!isNaN(inputValue) && selectedOption === 'none') {
      flexContainer.innerHTML = '';

      // create text
      const text = document.createElement('p');
      text.classList.add('warning-text');
      text.textContent = 'You did not choose a planet yet';
      flexContainer.appendChild(text);
    }

    //
    if (!isNaN(inputValue) && selectedOption) {
      switch (selectedOption) {
        case 'mercury':
          result = (inputValue * 3.7).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/mercury.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append planetImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription)
          break;
        case 'venus':
          result = (inputValue * 8.87).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/venus.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append venusImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'earth':
          result = (inputValue * 9.8).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/earth.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append planetImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'mars':
          result = (inputValue * 3.71).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/mars.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append planetImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'moon':
          result = (inputValue * 1.62).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/moon.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append moonImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'jupiter':
          result = (inputValue * 24.79).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/jupiter.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append jupiterImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'saturn':
          result = (inputValue * 10.44).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/saturn.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append saturnImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'uranus':
          result = (inputValue * 8.87).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/uranus.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append uranusImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription)
          break;
        case 'neptune':
          result = (inputValue * 11.15).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // const neptuneImage = document.createElement('img');
          planetImage.src = './images/neptune.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append planetImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
        case 'pluto':
          result = (inputValue * 0.62).toFixed(2);
          flexContainer.innerHTML = '';
          flexItemImage.style.width = '';

          // planet source
          planetImage.src = './images/pluto.png';

          // description innerHTML
          description.innerHTML = `The weight of the object on 
                <span style="font-weight: bold; text-transform: capitalize;">${selectedPlanet}</span>`;

          // weight innerHTML
          weight.innerHTML = `<span style="font-weight: bold;">${result} N</span>`;

          // append planetImage to flexItemImage && description and weight to flexItemDescription
          flexItemImage.appendChild(planetImage);
          flexItemDescription.appendChild(description);
          flexItemDescription.appendChild(weight);
          flexContainer.appendChild(flexItemImage);
          flexContainer.appendChild(flexItemDescription);
          break;
      }
    }
  }, 500);
}

// add event listener
button.addEventListener('click', handleButton)
