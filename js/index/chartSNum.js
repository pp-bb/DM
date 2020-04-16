var ctx = document.getElementById("chart-SNum").getContext("2d");
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['已住数量', '剩余可容纳量'],
        datasets: [{
            backgroundColor: ['rgb(0,191,255)', 'rgb(0,255,96)'],
            data: ['543', '354'],
        }]
    },


    // Configuration options go here
    options: {

        title: {
            display: true,
            text: '辖区人数情况',
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