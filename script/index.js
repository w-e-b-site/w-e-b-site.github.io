(function () {
    fetch("/json/list.json")
        .then((response) => response.json())
        .then((json) => {
            // data = json.items;
            let data = JSON.parse(JSON.stringify(json.lists));
            alert(JSON.stringify(data));
        });
})();
