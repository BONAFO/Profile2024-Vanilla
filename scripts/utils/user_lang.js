const getUserLang = () => {

    let lang = sessionStorage.getItem("lang");
    if (!lang) {
        sessionStorage.setItem("lang", navigator.language.split("-")[0])
        return navigator.language.split("-")[0]
    } else {
        return lang
    }
    // sessionStorage.setItem("lang", navigator.language.split("-")[0])
    // return navigator.language.split("-")[0]
}