newQuote();
function newQuote() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            let myObj = JSON.parse(this.responseText);
            let randomNum = Math.floor(Math.random() * (myObj.length - 1));
            let quote = myObj[randomNum]["quoteText"];
            let author = myObj[randomNum]["quoteAuthor"];
            quote = document.getElementById("quoteText").innerHTML = "\"" + quote + "\"";
            author = document.getElementById("quoteAuthor").innerHTML = "- " + author;
            let a =document.getElementById("twit");
            a.href = "http://twitter.com/share?text=" + quote + " " + author;
            a = document.getElementById("facebook");
            a.href = "#";
            a = document.getElementById("linkedin");
            a.href = "#";

        }
    };
    xmlhttp.open("GET", "quotes.json", true);
    xmlhttp.send();

}

