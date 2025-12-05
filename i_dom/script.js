// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement innerHTML Code here
pagetitle.innerHTML = "<pre>Document Object Model: DOM<pre>";


// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement innerText Code here
// pagetitle.innerText = "Document Object Model: DOM";
pagetitle.innerText = "document object model: dom".toUpperCase();


// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "2rem";
pagetitle.style.color = "#f00";


// 4. getElementById
// refer to the example above (line 4)

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement getElementsByTagName Code here
const spans = document.getElementsByTagName("span");

// create a Span Array
const spanInputs = [
    "Properties of the DOM",
    "Methods of the DOM"
]

// Using getElementsByTagName method, search for elements that match a tag's index

// Implement Code here
for (let index = 0; index < spans.length; index++) {
    spans[index].style.display = "block";
    spans[index].style.fontWeight = "bolder";
    spans[index].innerText = spanInputs[index];
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement createElement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended Paragraph.";
document.body.append(paragraph);

// 7. querySelector
// Selecting the first instance of <h2> tag and adding an innerText
// I can use querySelector with . -  to recognise a class
// I can use querySelector with # -  to recognise a id
// I can use querySelector with specific input[type = "type_name"] -  to recognise the input(s)

// Implement querySelector Code here
// document.querySelector only targets the FIRST instance of the selected
const header2 = document.querySelector("h2");
header2.innerText = "Heading 2 - tag selector.";
const header3 = document.querySelector(".heading3");
header3.innerText = "Heading 3 - class selector.";
const header4 = document.querySelector("#heading4");
header4.innerText = "Heading 4 - id selector.";

const inputTxt = document.querySelector('input[type="text"]');
inputTxt.value = "Input selector engaged";

// Using querySelectorAll method, search for elements that match a tag's class

// Implement querySelectorAll Code here
const updateListItems = document.querySelectorAll(".menuItem");

// updateListItems[0].innerText = "Menu Item 1";
// updateListItems[1].innerText = "Menu Item 2";
// updateListItems[2].innerText = "Menu Item 3";

// Create a Horizontal Menu
// Each menu item to be a LINK with specific styles
const ulMenuBar = document.querySelector("ul");
ulMenuBar.classList.add("d-flex", "py-4");
ulMenuBar.setAttribute("name", "menuBar");

const menuTitles = ["Welcome", "About", "Product", "Contact"];

// Create forEach LOOP for menuTitles
menuTitles.forEach((title, index) => {

    // Create a list of items to append (as a child) to the unordered list
    const listItems = document.createElement("li");
    listItems.setAttribute("name", `nav-menu-item`);
    listItems.setAttribute("key", `nav-menu-item-${index + 1}`);
    listItems.classList.add("mx-auto", "list-unstyled");
    ulMenuBar.appendChild(listItems);

    // Create an anchor (hyper link) into each item in the list
    const anchor = document.createElement("a");
    anchor.textContent = title;
    anchor.setAttribute("src", "#");
    anchor.setAttribute("name", `navlink`);
    anchor.classList.add("btn", "btn-success");
    listItems.appendChild(anchor);

});

const navbarElement = document.getElementsByName("menuBar");
navbarElement[0].classList.add("bg-dark");

const navMenuElements = document.getElementsByName("nav-menu-item");
for (let index = 0; index < navMenuElements.length; index++) {
    const element = navMenuElements[index];
    element.classList.add("border", "rounded", "border-2");
}

// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement element.append() Code here
const headerTwoGreeting = document.createElement("h2");
headerTwoGreeting.innerText = "Welcome to the world of Js.";

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here
// appendChild returns the object that is appended
const amendTitle = document.body.appendChild(headerTwoGreeting);
console.log("amendTitle: ", amendTitle);

amendTitle.innerText = "Welcome to the world of Js and CSS.";


// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
