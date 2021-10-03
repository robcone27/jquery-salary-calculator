console.log('js')
let addEmployeeList = [];
$(readyNow);

function readyNow() {
    $(`#enterField`).on(`click`, addInfo);
    $(`#targeted`).on(`click`, `.deleteEmployee`, deleteEmployee);
}
function addInfo() {
    console.log('it works!');


    const addEmployeeInfo = {
        firstName: $(`#firstName`).val(),
        lastName: $(`#lastName`).val(),
        idNumber: $(`#idNumber`).val(),
        jobTitle: $(`#jobTitle`).val(),
        annualSalary: $(`#annualSalary`).val(),
    }
    console.log(addEmployeeInfo);

    addEmployeeList.push(addEmployeeInfo);

    renderInfo();
    // $(`#targeted`).append(row)
}

function renderInfo() {
    $(`#targeted`).empty();

    for (let addEmployeeInfo of addEmployeeList) {
        console.log(addEmployeeInfo.firstName1)
        const row = $(`
     <tr>
  <td>${addEmployeeInfo.firstName}</td>
  <td>${addEmployeeInfo.lastName}</td>
  <td>${addEmployeeInfo.idNumber}</td>
  <td>${addEmployeeInfo.jobTitle}</td>
  <td>${addEmployeeInfo.annualSalary}</td>
  <td><button class="deleteEmployee">Delete</button></td>
</tr>
`);

        $(`#targeted`).append(row);
    }
};


function monthlyTotal() {
    let totalSalary = 0;
    for (let i = 0; i < addEmployeeList.length; i++) {
        let employeeSalary = Number(addEmployeeList[i].annualSalary);
        totalSalary += totalMonthly
    }
    totalSalary += employeeSalary / 12;

    $(`#totalMonthly`).append(totalSalary);

};

function deleteEmployee() {
    console.log('deleted')
    $(this).parent().parent().remove();
    $(this).closest('tr').remove();
};