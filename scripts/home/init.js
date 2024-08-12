reloadComponentsDM()

document.title = pageContent["h-title"];
document.getElementById("banner-left").textContent = pageContent["banner-left"];
document.getElementById("banner-right").textContent = pageContent["banner-right"];

const elements = document.querySelectorAll(`[data-name]`);

for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute("data-name").includes("nav-")) {
        elements[i].textContent = pageContent[elements[i].getAttribute("data-name").replace("nav-", "")];
    }

}





console.log(pageContent);