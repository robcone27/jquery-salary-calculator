let addEmployeeList = [];

let totalMonthly = 0;

$(readyNow);
// click functions 
function readyNow() {
    $(`#enterField`).on(`click`, addInfo);
    $(`#targeted`).on(`click`, `.deleteEmployee`, deleteEmployee);
}

// adds employee information 
function addInfo() {

    let addEmployeeInfo = {
        firstName: $(`#firstName`).val(),
        lastName: $(`#lastName`).val(),
        idNumber: $(`#idNumber`).val(),
        jobTitle: $(`#jobTitle`).val(),
        annualSalary: $(`#annualSalary`).val()
    };

    addEmployeeList.push(addEmployeeInfo);

    addEmployeeInfo = {
        firstName: $(`#firstName`).val(``),
        lastName: $(`#lastName`).val(``),
        idNumber: $(`#idNumber`).val(``),
        jobTitle: $(`#jobTitle`).val(``),
        annualSalary: $(`#annualSalary`).val(``)
    };

    renderInfo();
    monthlyTotal();
}

//pushes employee information to the DOM
function renderInfo() {
    $(`#targeted`).empty();

    for (let addEmployeeInfo of addEmployeeList) {

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

// calculates employees monthly income
function monthlyTotal() {
    let totalSalary = 0;
    for (let i = 0; i < addEmployeeList.length; i++) {
        let employeeSalary = Number(addEmployeeList[i].annualSalary);
        totalSalary += employeeSalary
    }
    totalMonthly = totalSalary / 12;

    if (totalMonthly > 20000) {
        $(`#totalMonthly`).addClass(`red`)
    }

    $(`#totalMonthly`).text(formatCurrency(totalMonthly));
};

// deletes employee information 
function deleteEmployee() {
    console.log('deleted')
    $(this).parent().parent().remove();
    $(this).closest('tr').remove();
};

// styles currency 
function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(number);
}