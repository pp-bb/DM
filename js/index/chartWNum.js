//获取天数数组
var newdate = new Date();//当前日期
var month = newdate.getMonth() + 1;//当前月份
var day = newdate.getDate();//当前号数
var DAYS = (function () {
    var arr = [];
    for (var i = day; i > 0; i--) {
        arr.push(month + '-' + (i < 10 ? '0' + i : i + ''));
    }
    return arr.reverse();
})();

//随机违纪数
var waterNum = (function () {
    var arr = [];
    for (var i = 0; i < day; i++) {
        var r = Math.ceil(Math.random() * 100);
        arr.push(r + '');
    }
    return arr.reverse();
})();


var ctx = document.getElementById("chart-WNum").getContext("2d");

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: DAYS,
        datasets: [{
            label: "本月用水量",
            backgroundColor: 'rgb(0,191,255)',
            borderColor: 'rgba(0,169,255,0.68)',
            data: waterNum,
        }]
    },


    // Configuration options go here
    options: {
        title: {
            display: true,
            text: '本月用水量',
            fontColor: "rgba(255,255,255,0.68)",
        },
        legend: {
            display: false
        },
        label: {
            font: {
                color: "rgba(255,255,255,0.73)"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});