console.log('js')

$(readyNow);

function readyNow(){
   $(`#enterField`).on(`click`, addInfo) 
}
function addInfo(){
    console.log('it works!')


const employeeInfo = {
    firstName: $(`#firstName`).val(),
    lastName: $(`#lastName`).val(),
    idNumber: $(`#idNumber`).val(),
    jobTitle: $(`#jobTitle`).val(),
    annualSalary: $(`#annualSalary`).val(),
}
console.log(employeeInfo)

}
// employee first name, last name, ID number, job title, annual salary_.