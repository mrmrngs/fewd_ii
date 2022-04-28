// CREATE AN ARRAY OF EMPLOYEES
let empArray = [[12345678, 'Arielle Ajax', 1111, 'arielle@ajax.com', 'Administrative'], [87654321, 'Bernard Busker', 2222, 'bernard@busker.com', 'Engineering'], [23456789, 'Cherry Closs', 3333, 'cherry@closs.com', 'Executive'], [34567890, 'Dave Durrick', 4444, 'dave@durrick.com', 'Marketing'], [45678901, 'Emily Edgerton', 5555, 'emily@edgerton.com', 'Sales']];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
window.addEventListener('load', (e) => {
    if (localStorage.empArray) {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    empArray = JSON.parse(localStorage.getItem('empArray'))
    }
});

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);
let form = $('addForm');
let empTable = $('employees');
let empCount = $('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.addEventListener('load', (e) => { 
    buildGrid();
});

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [id, name, extension, email, department];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray = empArray.push(newEmp);
    localStorage.saveItem('empArray', JSON.stringify(empArray));
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
});

/*You’ll need two separate functions for adding and removing employees. Remember to pass the array into these functions and then use array specific methods to add / remove employees from the array.*/
// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.className == 'delete') {
        if (confirm(`Are you sure you want to delete this employee entry?`)) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let delRowIndex = e.target.parentNode.parentNode.rowIndex;
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            empTable.deleteRow(delRowIndex);
            // REMOVE EMPLOYEE FROM ARRAY
            empArray.splice(delRowIndex, 1)
            localStorage.saveItem('empArray', JSON.stringify(empArray));
            // BUILD THE GRID
            buildGrid();
        };
    };
});
    /*Building the Grid
In assignment 7 you used the table’s DOM methods insertRow(), insertCell(), and deleteRow() to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a <tbody> tag. Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.
Considerations:
    • This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
    • Use a for / of loop here to loop through the array and build each row in code
    • Use the appendChild() method to append the constructed row to the <tbody> tag.*/
// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    let delTxt = document.createTextNode('X');
    delBtn.appendChild(delTxt);
    cellDelete.appendChild(delBtn);
    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = `${rowCount}`;
    let rowCount = empArray.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.saveItem('empArray', JSON.stringify(empArray));
};

/*Storing Data
Use web storage (localStorage) to persist the array. It should be stored when the page loads / when the grid is built, when a new employee is added, and when an employee is deleted. When the page loads, make sure to check to see if the object exists in storage before you attempt to extract the data from storage. 
Considerations
    • You’ll need to use JSON.stringify() to store the array in storage.
    • You’ll need to use JSON.parse() to retrieve the array from storage.*/