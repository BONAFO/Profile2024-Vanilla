const lang = getUserLang();


let pageContent = {
    ...(RTHome[lang]) ? (RTHome[lang]) : (RTHome["en"]),
    ...(RTPage[lang]) ? (RTPage[lang]) : (RTPage["en"]),
    ...(RTNav[lang]) ? (RTNav[lang]) : (RTNav["en"]),
};



// let homeTxt  =[];

// homeTxt.push(RTHome[lang])
// homeTxt.push(RTPage[lang])


// homeTxt.map(txt => {

// })

// homeTxt.push(RTHome[])