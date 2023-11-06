

function lookUpStock(stock){
    document.getElementById("stockName").value = stock;
    document.getElementById("selector").value = 30;
    let lookUpButton = document.getElementById("submitButton");
    lookUpButton.click()
}

function loadDogBreed(dog){
    lDog = dog.toLowerCase()
    let myButton = document.getElementById(lDog);
    myButton.click()
}


function helloFunction(){
    alert('Hello World');
};

function changeBColor(color){
  document.getElementById("mainBody").style.backgroundColor = color;
}

function navigateToPage(page){
    if(page == "home" || page == "home page"){
        window.location.assign("A2_Home.html");
    }
    else if(page == "stocks" || page == "stocks page"){
        window.location.assign("A2_Stocks.html");
    }
    else if(page == "dogs" || page == "dogs page"){
        window.location.assign("A2_Dogs.html");
    }
}

function listenerOn(){
    if(annyang){
        const commands = {
            'Change the color to *color':changeBColor,
            'Navigate to *page':navigateToPage,
            'Hello':helloFunction,
            'Load Dog Breed *dog':loadDogBreed,
            'Lookup *stock':lookUpStock,
        }

    annyang.addCommands(commands);
    annyang.start();
    annyang.addCallback('resultNoMatch', function(){
        alert("Commands did not match, try again!");
    })

    };
};

function listenerOff(){
    if(annyang){
        annyang.abort();
    };
};

document.getElementById("listeningOn").onclick = listenerOn;
document.getElementById("listeningOff").onclick = listenerOff;