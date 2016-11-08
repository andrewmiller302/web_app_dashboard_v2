var weeklyTrafficCtx = document.getElementById("weeklyTraffic");
var hourlyTrafficCtx = document.getElementById("hourlyTraffic");
var dailyTrafficCtx = document.getElementById("dailyTraffic");
var monthlyTrafficCtx = document.getElementById("monthlyTraffic");
var dailyBarCtx = document.getElementById("dailyBar");
var mobileDoughnutCtx = document.getElementById("mobile");


/**********************************
 Traffic Line Chart 
**********************************/

var trafficLineChart = new Chart(weeklyTrafficCtx,{
  type:'line',
  data:{
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "23-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            label: "TRAFFIC",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(54,54,120,.3)",
            borderColor: "rgba(54,54,120,.6)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(54,54,120,.9)",
            pointBackgroundColor: "white",
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "rgba(54,54,120,1)",
            pointHoverBorderColor: "rgba(54,54,120,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 9,
            pointHitRadius: 10,
            data: [600, 1100, 700, 1000, 1200, 900, 1100, 1800, 1400, 1000, 1970],
            spanGaps: false,
        } ]
   
  },
  
   options: {
    scales:{
      yAxes:[{
        ticks:{
          max:2000,
          min:400
        }
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend:{
      display: false
    }
   
    
    
  }
  
});


/**********************************
 Daily Traffic Bar Chart 
**********************************/

var dailyBar = new Chart(dailyBarCtx , {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [70, 102, 189, 125, 225, 200, 105],
            backgroundColor: [
                '#363678',
                '#363678',
                '#363678',
                '#363678',
                '#363678',
                '#363678',
                '#363678'
              
            ],
            
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title:{
        display: true,
        text: 'DAILY TRAFFIC',
        position: 'top',
        fontSize: 16
      },
      legend:{
        display: false
      },
        scales: {
          xAxes: [{
            barPercentage: 0.5
          }],      
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
          }
    }
                         
    });

/**********************************
 Mobile Doughnut Chart 
**********************************/


/*Mobile Data for Dougnut Chart*/
var mobileData ={
  labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
  datasets:[
    {
      data:[50, 90, 500],
      backgroundColor:[
        "#6d8cbf",
        "#8bc491",
        "#363678"
      ]
    }
  ]
  
};



/*Mobile Chart*/

var mobileDoughnutChart = new Chart(mobileDoughnutCtx, {
    type: 'doughnut',
    data: mobileData,
    options: {
      title:{
        display: true,
        text: 'MOBILE USERS',
        position: 'top',
        fontSize: 16
      },
    responsive: true,
    maintainAspectRatio: false,
    legend:{
      position: 'right'
    }
  }
  

});


      


