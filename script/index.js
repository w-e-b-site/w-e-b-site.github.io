const listEl = document.querySelector(".list");
// btnEl.addEventListener("click", () => {
//     // trailerContainerEl.classList.remove("active");
// });

// (function () { })();
window.onload = function () {
    fetch("/json/list.json")
        .then((response) => response.json())
        .then((json) => {
            // data = json.items;
            let data = JSON.parse(JSON.stringify(json.lists));
            listEl.textContent = JSON.stringify(data);
            // listEl.innerHTML = "<div>";
        });
};
