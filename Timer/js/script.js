// Timer
var timer = document.querySelector(".timer");

var data = {
    hour: Number(timer.children[0].innerText),
    minute: Number(timer.children[2].innerText),
    second: Number(timer.children[4].innerText)
};

var interval = setInterval(function () {
    data.second--;
    if (data.second == "0") {
        data.second = "59";
        data.minute--;
    }
    if (data.minute == "-1") {
        data.minute = "59";
        data.hour--;
    }
    if (data.hour == "-1") {
        clearInterval(interval);
        data.hour = "0";
        data.minute = "0";
        data.second = "0";
    }
    timer.children[0].innerText = formatNumber(data.hour);
    timer.children[2].innerText = formatNumber(data.minute);
    timer.children[4].innerText = formatNumber(data.second);
}, 1000);



function formatNumber(nmb) {
    if (nmb < 10) {
        return "0" + nmb;
    }

    return nmb;
}


    // Timer








