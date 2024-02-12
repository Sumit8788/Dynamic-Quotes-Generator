const url = "https://type.fit/api/quotes";
const btn = document.querySelector("#btn");
const quotes_text = document.querySelector("#quotes-text");
const quotes_author = document.querySelector("#quotes-author");
btn.addEventListener("click", getnewquotes)

let realdata = "";
function getnewquotes() {
    let num = (Math.floor(Math.random() * 16));
    quotes_text.textContent = realdata[num].text;
    quotes_author.textContent = realdata[num].author;

}

(async () => {

    let data = await fetch(url);
    realdata = await data.json();
    getnewquotes()
})();