// HANDLE THE LOAD EVENT OF THE WINDOW
//I used defer in the HTML.

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let fWidth = 800;
let fHeight = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(fWidth, fHeight);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - fWidth) / 2), ((window.screen.height - fHeight) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => document.getElementById(id);

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
let cancel = $('cancel');
cancel.addEventListener('click', e => window.close());

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
let empForm = $('empForm');
empForm.addEventListener('submit', e => {
    e.preventDefault();
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    let id = $('id');
    let name = $('name');
    let ext = $('extension');
    let email = $('email');
    let dept = $('department');
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    let logindetails = window.opener.document.getElementbyId('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    logindetails.innerText = `ID: ${id.value}<br>Name: ${name.value}<br>Extension: ${ext.value}<br>Email: ${email.value}<br>Department: ${dept.value}`;
// CLOSE THE POPUP
    window.close();
});

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
