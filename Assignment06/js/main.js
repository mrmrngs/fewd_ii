// HANDLE THE LOAD EVENT OF THE WINDOW
//Defer tag in HTML.

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
const $ = (id) => document.getElementById(id);
let btnAddEmployee = $('btnAddEmployee');
btnAddEmployee.addEventListener('click', e => {
    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('add-employee.html', 'Add-Employee', 'width=800,height=700');
});