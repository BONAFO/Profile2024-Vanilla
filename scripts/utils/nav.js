const nav_items = document.getElementsByClassName("nav-td")



for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].onmouseenter = (e) => {

        const td = e.target;
        const btn = td.children[0];
        const a = btn.children[0];
        td.className = td.className.replace("nav-td-hov-out", "nav-td-hov-in");
        btn.className = btn.className.replace("nav-btn-hov-out", "nav-btn-hov-in");
        a.className = a.className.replace("nav-a-hov-out", "nav-a-hov-in");

        // td.style["background-color"] = "rgb(var(--c-font-yel))";

        // td.style["background-color"] = "red";
        // td.style["background-color"] = "red";



    }
    nav_items[i].onmouseleave = (e) => {
        const td = e.target;
        const btn = td.children[0];
        const a = btn.children[0];

        td.className = td.className.replace("nav-td-hov-in", "nav-td-hov-out");
        btn.className = btn.className.replace("nav-btn-hov-in", "nav-btn-hov-out");
        a.className = a.className.replace("nav-a-hov-in", "nav-a-hov-out");

    }





}