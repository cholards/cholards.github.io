// Import all requred files and libraries
import { defaultScriptures } from "./defaultScriptures.js";
import "./setting.js";
import { setup } from "./setting.js";

// Grab all items needed to on the index page
const button = document.querySelector("button");
const cover = document.getElementById("cover")

// Set all parameters by grabbing values setting file.
cover.style.setProperty("background-color", setup.bgcolor)
cover.style.setProperty("top", setup.top)







button.addEventListener("click", (event) => {

    //check for the number of items in the scriputre database
    const randoNum = Math.floor(Math.random() * setup.source.length);

    let randyMe = defaultScriptures[randoNum];
    let bibBook = randyMe[0];
    let bookChapt = randyMe[1];
    let chaptVrs = randyMe[2];
    let scripture = randyMe[3];

    document.getElementById("display").innerHTML = `<span id="bibBook"> ${bibBook} </span>  <span id="bookChapt"> ${bookChapt}: ${bookChapt} </span>  <br>${randyMe}`;
});