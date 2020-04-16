var ctx = document.getElementById("chart-DNum").getContext("2d");
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['已住数量', '剩余宿舍数量'],
        datasets: [{
            backgroundColor: ['rgb(0,191,255)', 'rgb(0,255,96)'],
            data: ['70', '10'],
        }]
    },


    // Configuration options go here
    options: {

        title: {
            display: true,
            text: '宿舍入住情况',
            fontColor: "rgba(255,255,255,0.68)",
        },
        legend: {
            display: true,
            position: 'right',
        },
        label: {
            font: {
                color: "rgba(255,255,255,0.73)"
            }
        },

    }
});