// GUARDAR MODO EN MEMORIA
if (!sessionStorage.getItem("dm")) {
    sessionStorage.setItem("dm", "off");
}

// DETERMINAMOS SI ESTA ENCENDIDO O APAGADO [... , MODO ACTUAL]
// Razon: Aprovechar el 0 en el arr para apagar el button, ya que es booleano
let off_on = [
    sessionStorage.getItem("dm") == "off" ? "on" : "off",
    sessionStorage.getItem("dm"),
];


const toggleDarkMode = (change) => {
    off_on = [change, change == "off" ? "on" : "off"];
    off_on.map(
        (ac, i) => {
            document.getElementById(`dm-${ac}`).style.opacity = i;
            document.getElementById(`dm-${ac}`).style.zIndex = i;

        }

    );

    sessionStorage.setItem("dm", off_on[1]);
    document.body.style.background = off_on[1] == "off" ? "white" : "black";
    reloadComponentsDM()
};


const reloadComponentsDM = () => {
    const elements = document.querySelectorAll("[data-mode]");

    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        const mode = sessionStorage.getItem("dm");

        // e.className
        const classes = e.className.split(" ");

        if (mode == "off" || mode == null) {

            classes.map((cl, i) => {


                    if (cl.includes("dm-")) {
                        classes[i] = cl.replace("dm-", "wm-")
                    }

                    if (cl.includes("nom-")) {
                        classes[i] = cl.replace("nom-", "wm-")
                    }
                })
                // classes.map((cl, i) => (cl.includes("dm-")) ? (classes[i] = cl.replace("dm-", "wm-")) : (""))
        } else {


            classes.map((cl, i) => {
                if (cl.includes("wm-") || cl.includes("nom-")) {

                    if (cl.includes("wm-")) {
                        classes[i] = cl.replace("wm-", "dm-")
                    }

                    if (cl.includes("nom-")) {
                        classes[i] = cl.replace("nom-", "dm-")
                    }

                    // classes[i] = cl.replace("wm-", "dm-")
                    // classes[i] = cl.replace("wm-", "dm-")
                }
            })

            // classes.map((cl, i) => (cl.includes("wm-")) ? (classes[i] = cl.replace("wm-", "dm-")) : (""))



        }

        e.className = "";
        classes.map(cl => e.className += cl + " ")
    }
}


try {
    off_on.map((dm, i) => {
        document.getElementById(`dm-${dm}`).style.opacity = i;
        document.getElementById(`dm-${dm}`).style.zIndex = i;
        document.getElementById(`dm-${dm}`).onclick = () => {
            toggleDarkMode(dm);
        };
        // document.getElementById(`dm-${dm}`).ontouchend = () => {
        //     toggleDarkMode(dm);
        // };
        document.body.style.background = off_on[1] == "off" ? "white" : "black";
    });


} catch (error) {}