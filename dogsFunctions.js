function getDogInformation() {

  
      fetch("https://dog.ceo/api/breeds/image/random/10")
        .then(resp => resp.json())
        .then(data => {
          
          for (let i = 0; i < data.message.length; i++) { 
            
            let dogImage= data.message[i]
            var dogImageElement = document.createElement("img");
            dogImageElement.src = dogImage
            dogImageElement.style.height = "612px"
            dogImageElement.style.width = "700px"
            var divElementForImage = document.getElementById("myslider");
            divElementForImage.appendChild(dogImageElement);

          }

          simpleslider.getSlider();

        })
        .catch(err => {
          alert("Something bad happened")
        });
    

    fetch("https://dogapi.dog/api/v2/breeds")
      .then(resp => resp.json())
      .then(data => {
        
        for (let i = 0; i < data.data.length; i++) { 
          
          let dogBreedName = data.data[i].attributes.name;
          let dogBreedDescription = data.data[i].attributes.description;
          let dogBreedMinLife = data.data[i].attributes.life.min;
          let dogBreedMaxLife = data.data[i].attributes.life.max;

          var dogButton = document.createElement('button');
          dogButton.id = dogBreedName.toLowerCase();
          dogButton.textContent = dogBreedName;
          dogButton.className = "button-74"
          var divElement = document.getElementById("dogButtons");
         

          dogButton.addEventListener("click", function(){ 

            var nameElement = document.getElementById("dogName")
            nameElement.innerHTML = "Name: " + dogBreedName

            var descriptionElement = document.getElementById("dogDescription")
            descriptionElement.innerHTML = "Description: " + dogBreedDescription

            var minLifeElement = document.getElementById("dogMinLife")
            minLifeElement.innerHTML = "Min Life: " + dogBreedMinLife;

            var maxLifeElement = document.getElementById("dogMaxLife")
            maxLifeElement.innerHTML = "Max Life: " + dogBreedMaxLife

            var contentBox = document.getElementById("contentBox")
            contentBox.style.backgroundColor = "coral"
            contentBox.style.border = "5px solid black"

           });

           divElement.appendChild(dogButton);
    
        }
       
      })
      .catch(err => {
        alert("Something bad happened")
      });
  }
  
window.onload = getDogInformation();




