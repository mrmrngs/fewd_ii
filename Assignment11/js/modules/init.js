async function getEmp() {
    try {
        const response = await fetch('../../data/employees.json');
        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error(error);
    }
}

export {getEmp};