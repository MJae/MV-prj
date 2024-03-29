/***
 * a <p> with red text that says “Hey I’m red!”
 * an <h3> with blue text that says “I’m a blue h3!”
 * a <div> with a black border and pink background
 * color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the div with
        createElement, append the <h1> and <p> to it
        before adding it to the container.
 ***/

/***
 * id: container
 * class: content
 ***/

// Find the main divs
const container = document.querySelector("#container");
const content = document.querySelector("#container > .content");


// Create the stuff
const p = document.createElement('p');
p.style.color = "red";
p.textContent = "Hello World!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!";
div.appendChild(anotherP);

// Add the stuff
content.appendChild(p);
content.appendChild(h3);
container.appendChild(div);