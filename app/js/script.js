document.onclick = function (event) {
    //	console.log(event);
    console.log(event.target.classList);

    if (event.target.classList == "menu-btn-black") {
        event.target.classList.add("active", "btn-color");
    } else if (event.target.classList == "menu-btn-active") {
        event.target.classList.add("active", "btn-color");
    }
};
