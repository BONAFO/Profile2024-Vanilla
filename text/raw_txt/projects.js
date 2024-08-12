const future_projects = {};

const last_projects = {};



(async() => {
    const resp = await axios.get("https://github.com/BONAFO");
    console.log(resp);

})()