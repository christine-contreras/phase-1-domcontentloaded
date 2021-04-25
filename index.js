// Code your solution in index.js. First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated.

window.addEventListener("DOMContentLoaded", (event) => {

    //Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
    const div = document.getElementById('text');
    div.innerHTML = "This is really cool!";
})