var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://931rjjj1f8.execute-api.ap-south-1.amazonaws.com/getCount?id=count", true);
xhttp.send();