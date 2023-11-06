

function getStockTable() {


  

    fetch('https://tradestie.com/api/v1/apps/reddit')
    .then(resp => resp.json())
    .then(data => {
      
      for (let i = 0; i < 5; i++) { 

        var ticker = data[i].ticker
        var no_of_comments = data[i].no_of_comments
        var sentiment = data[i].sentiment

        document.getElementById(`ticker${i}`).innerHTML = `<a href="https://finance.yahoo.com/quote/${ticker}?p=${ticker}&.tsrc=fin-srch">${ticker}</a>`
        document.getElementById(`commentcount${i}`).innerHTML = no_of_comments

        

        var sentimentImage = document.createElement("img");
        var imageDisplayElement = document.getElementById(`sentiment${i}`);

        if(sentiment == "Bullish"){

        sentimentImage.src = "https://investorplace.com/wp-content/uploads/2022/12/bull-stock-boom.png"
        sentimentImage.style.height = "200px"
        sentimentImage.style.width = "200px"
        imageDisplayElement.appendChild(sentimentImage)

        } else if(sentiment == "Bearish"){
          sentimentImage.src = "https://investmentu.com/wp-content/uploads/2022/03/bearish-stocks.jpg"
          sentimentImage.style.height = "200px"
          sentimentImage.style.width = "200px"
          imageDisplayElement.appendChild(sentimentImage)
        }
    
       
      
        
      }
    
       
      
      
    })
    .catch(err => {
      alert("Something bad happened");
    });
  }
  
  window.onload = getStockTable;

