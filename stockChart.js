
var myChart;

function epochToDate(epochTime){
    var date = new Date(epochTime)
    return date.toISOString().slice(0,10)
  }

  function getLineChart(arrayOfDates, arrayOfPrices){

   var labelsOfDates = arrayOfDates
   var dataOfPrices = arrayOfPrices

  const ctx = document.getElementById('myChart');
  ctx.style.backgroundColor = "white";

  if(myChart){
    myChart.destroy()
  }

  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labelsOfDates,
      datasets: [{
        label: '($) Stock Price',
        data: dataOfPrices,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}



function getStock() {


    var getTicker = document.getElementById("stockName").value.toUpperCase()
    var daysOption = document.getElementById("selector").value

    
    let optionDate = new Date();
    optionDate.setDate(optionDate.getDate() - Number(daysOption));
    let optionDateISOS = optionDate.toISOString().slice(0,10)
  

    let currentDate = new Date();
    let currentDateISOS = currentDate.toISOString().slice(0,10)


    

    fetch(`https://api.polygon.io/v2/aggs/ticker/${getTicker}/range/1/day/${optionDateISOS}/${currentDateISOS}?apiKey=81PfJRsqzGGyxKbbevqiK75axVXf7SBS`)
    .then(resp => resp.json())
    .then(data => {


      var arrayOfDates = [];
      var arrayOfPrices = [];

      
      for (let i = 0; i < data.results.length; i++) { 

        var convertedDate = epochToDate(data.results[i].t)
        arrayOfDates.push(convertedDate)
        arrayOfPrices.push(data.results[i].c)
  
      }
    

      var convertedDate = epochToDate(data.results[0].t)
      getLineChart(arrayOfDates, arrayOfPrices)

      

    
      
    })
  
  }
  

  function callAPI(){
    getStock()
    return false;
  }





