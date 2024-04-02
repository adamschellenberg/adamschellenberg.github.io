const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

header.innerHTML = "";
main.innerHTML = "";
footer.innerHTML = "";


const initialize = () => {
    loadHeader();
    loadFooter();
    loadMain();
}

const loadHeader = () => {
    const source = "/pages/header/header.html";
    const destination = "#header";
    loadContent(source, destination);
}

const loadFooter = () => {
    const source = "/pages/footer/footer.html";
    const destination = "#footer";
    loadContent(source, destination);
}

const loadMain = () => {
    const source = "/pages/homepage/homepage.html";
    const destination = "#main";
    loadContent(source, destination);
}

const loadContent = (source, destination) => {
    $.ajax({
        url: source,
        dataType: "html",
        success: function (data) {
            $(destination).html(data);
        },
    });
}

initialize();