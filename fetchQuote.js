function getQuote() {
  fetch("https://zenquotes.io/api/random")
    .then(resp => resp.json())
    .then(data => {
      var quote = data[0].h; 
      document.getElementById("quote").innerHTML = quote;
    })
    .catch(err => {
      alert("Something bad happened")
    });
}

window.onload = getQuote;

