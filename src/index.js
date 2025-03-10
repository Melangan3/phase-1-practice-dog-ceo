console.log('%c HI', 'color: firebrick')

//Challenge 1
document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
      const dogImageContainer = document.getElementById('dog-image-container');
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        dogImageContainer.appendChild(img);
      });
    })
    .catch(error => console.error(error));
  });

//Chanllenge 2
document.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", event => {
    const selectedLetter = event.target.value;
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

//Challenge 3
      breedNames.forEach(breedName => {
        const li = document.createElement("li");
        li.textContent = breedName;
        ul.appendChild(li);
        li.addEventListener('click', function() {
            li.style.color = 'purple';
        });
      });
    })
    .catch(error => {
      console.error(error);
    });
});

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    const breedNames = Object.keys(data.message);
    breedNames.forEach(breedName => {
      const li = document.createElement("li");
      li.textContent = breedName;
      ul.appendChild(li);
      li.addEventListener('click', function() {
        li.style.color = 'purple';
    });
    });
  })
  .catch(error => {
    console.error(error);
  });


//Challenge 4
fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data =>{
  const breedNames = Object.keys(data.message).filter(breedName =>{
    return breedName.startsWith(selectedLetter)}
    )})
