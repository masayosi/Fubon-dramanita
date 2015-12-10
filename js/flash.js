function cut() {
    var str = window.location.href.toString();
    var num = str.indexOf('znum=') + 5;
    var va = str.substr(num, str.length);
    alert(va);
}

function callMap(num) {
    alert(num);
    location.href = "wf_donation_city.html?znum=" + num;
}
