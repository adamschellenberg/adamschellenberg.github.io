const toolsSection = document.getElementById("tools-root");
const languagesSection = document.getElementById("languages-root");
const projectsSection = document.getElementById("projects-root");

let projects = [
    "nexopedia",
    "fightingfoodons",
    "adamschellenberg"
];

toolsSection.innerHTML = "";
languagesSection.innerHTML = "";
projectsSection.innerHTML = "";


const initializeHomepage = () => {
    loadToolsSection();
    loadLanguagesSection();
    loadProjectsSection();
}

const loadToolsSection = () => {
    const source = "/pages/homepage/sections/tools/tools.html";
    const destination = "#tools-root";
    loadHomepageContent(source, destination);
}

const loadLanguagesSection = () => {
    const source = "/pages/homepage/sections/languages/languages.html";
    const destination = "#languages-root";
    loadHomepageContent(source, destination);
}

const loadProjectsSection = () => {
    const sourceBase = "/pages/homepage/sections/";
    const destination = "#projects-root";

    projects.forEach((project) => {
        let source = sourceBase +  `${project}/${project}.html`;
        loadHomepageContent(source, destination);
    }) 
}

const loadHomepageContent = (source, destination) => {
    $.ajax({
        url: source,
        dataType: "html",
        success: function (data) {
            $(destination).append(data);
        },
    });
}

initializeHomepage();