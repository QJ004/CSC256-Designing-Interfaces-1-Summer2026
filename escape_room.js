// we use the document object model to change the text content of the paragraph with the id of pDoor
// textContent is the best way to change text on the page from a performance perspective; if you need to add HTML to your text, you can use innerHTML instead of textContent
document.getElementById("pDoor").textContent = "The door is locked. You need to find the key to escape.";

// add the text content for the bed and room paragraphs
document.getElementById("pBed").textContent = "The bed is unmade. There is a note under the pillow.";

document.getElementById("pRoom").textContent = "The room is dimly lit. You can see a window and a door.";