var request = new XMLHttpRequest();
request.open("GET" ,

, true);

request.onload = function(result) {
    console.log(result);

    document.write(result);
};

request.send();