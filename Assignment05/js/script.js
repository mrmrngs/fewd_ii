const $ = (id) => document.getElementById(id);

window.addEventListener('load', _e => {
    console.log('Page loaded!')
    let form = $('empForm');
    form.addEventListener('submit', e => {
        let id = $('id')
        let name = $('name')
        let ext = $('ext')
        let email = $('email')
        let dept = $('department')
        e.preventDefault();
        console.log(`ID: ${id.value} \nName: ${name.value} \nExtension: ${ext.value} \nEmail: ${email.value} \nDepartment: ${dept.value}`)
    })
})