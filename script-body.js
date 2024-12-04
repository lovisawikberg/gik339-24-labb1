/* skapar variabler och hämtar upp HTMLElement-objekt*/
const checkbox = document.getElementById("divStyle");
const textfields = document.getElementsByClassName("textfield");
const button = document.querySelector("#button");
const div = document.querySelector(".dynamicDiv");
const colorInput = document.getElementById("color");

/* Funktion som hanterar event */
function handleEvent (e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(`Fältet har namnet ${name}, och värdet: ${value}`);

    if (name === "content") {
        div.innerHTML = value;  
    }
}

/* Eventlyssnare för checkbox */
checkbox.addEventListener("change" , () => {
    const color = colorInput.value;
    div.style.backgroundColor = colorInput.value;
    console.log(`Checkbox klickad, färg satt till: ${color}`);
});


/* Eventlyssnare för textfields*/
for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener("blur" , handleEvent);
}


/* Eventlyssnare för knappen, med preventDefault */
button.addEventListener("click", (e) => {
    e.preventDefault();
    div.remove();
    console.log("Knappen klickad, div tas bort");

});


