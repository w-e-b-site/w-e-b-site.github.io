let readBookListTemp;
const booklist = "/text/booklist.json";
const bookListEl = document.querySelector(".bookList");
const descriptEl = document.querySelector(".descript");

// https://w-e-b-site.github.com/
// XN--WR3B.XN--MK1BU44C

function liOver(item) {
    descriptEl.classList.add("showme1");
    descriptEl.classList.remove("showme2");
    descriptEl.innerHTML = readBookListTemp[item - 1].desc;
}

function liOut(item) {
    descriptEl.classList.add("showme2");
    descriptEl.classList.remove("showme1");
}

function liClick(item) {
    location.href = `book.html?${readBookListTemp[item - 1].book}`;
}

// (function () { })();
window.onload = function () {
    let result = "";
    fetch(booklist)
        .then((response) => response.json())
        .then((json) => {
            const readBookList = json.booklist;
            readBookListTemp = readBookList;
            readBookList.forEach((item, i) => {
                result +=
                    "<li onclick=liClick(" +
                    item.id +
                    ") onmouseover=liOver(" +
                    item.id +
                    ") onmouseout=liOut(" +
                    item.id +
                    ")><span>" +
                    item.id +
                    "</span>" +
                    item.book +
                    "(" +
                    item.hanja +
                    ")";
                ("</li>");
            });
            bookListEl.innerHTML = result;
        });
};
