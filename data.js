window.addEventListener("DOMContentLoaded", event => {
    const addButton = document.getElementById('add');
    const shoppinglist = document.getElementById("shopping-list");
    addButton.addEventListener("click", event => {
        const name = document.getElementById("name");
        const type = document.getElementById("type");
        const newItem = document.createElement("li");
        newItem.setAttribute("data-type", type.value);
        newItem.innerText = name.value;
        shoppinglist.appendChild(newItem);
        event.preventDefault();
    });
});
