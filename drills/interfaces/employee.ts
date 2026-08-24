// Person
// ├── name: string
// └── age: number
interface Person {
  name: string;
  age: number;
}

// Employee extends Person
// ├── employeeId: string
// └── department: string

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const employeeInstance: Employee = {
  name: "jhon",
  age: 18,
  employeeId: "emp_0001",
  department: "JhonDoe club",
};

console.log(employeeInstance);

// ### test ###
// E:\cmder\flowChart (main -> origin)
// λ npx tsx drills\interfaces\employee.ts
// {
//   name: 'jhon',
//   age: 18,
//   employeeId: 'emp_0001',
//   department: 'JhonDoe club'
// }

// E:\cmder\flowChart (main -> origin)
