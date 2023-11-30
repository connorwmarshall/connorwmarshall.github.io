// PROBLEM 1 



const employeeDetails = {
    "employees": [
        {
            "name":"Sam",
            "department":"Tech",
            "designation":"Manager",
            "salary":40000,
            "raiseEligable":"true",
        },
        {
            "name":"Mary",
            "department":"Finance",
            "designation":"Trainee",
            "salary":18500,
            "raiseEligable":"true",
        },
        {
            "name":"Bill",
            "department":"HR",
            "designation":"Executive",
            "salary":21200,
            "raiseEligable":"false",
        },
    ]
}

console.log("PROBLEM 1");
console.log(employeeDetails);

// PROBLEM 2



const companyDetails = {
        "companyName":"Tech Stars",
        "website":"www.techstars.site",
        "employees": employeeDetails,
    }

console.log("PROBLEM 2");
console.log(companyDetails)

//PROBLEM 3 



employeeDetails.employees.push(
    {
    "name":"Anna",
    "department":"Tech",
    "designation":"Executive",
    "salary":25600,
    "raiseEligable":"false",
    }
)

console.log("PROBLEM 3");
console.log(employeeDetails);

// PROBLEM 4



var totalSalary = 0;

for (i=0; i < employeeDetails.employees.length; i++) {
    totalSalary += employeeDetails.employees[i].salary;
}

console.log("PROBLEM 4");
console.log(totalSalary);

//PROBLEM 5

console.log("PROBLEM 5");

let temp =0;
for (let i=0; i < companyDetails.employees.employees.length; i++) {
    if(companyDetails.employees.employees[i].raiseEligable === "true"){
        temp = companyDetails.employees.employees[i].salary * 0.1;
        companyDetails.employees.employees[i].salary += temp;
        companyDetails.employees.employees[i].raiseEligable = "false";
    }
}
console.log(companyDetails.employees);