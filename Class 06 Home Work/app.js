/**
 * 01. Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table Total Admnission fees
 */

/*
const studentList=[
    ['Sayyid Saadi', 10, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Minhaj', 1, 12, 'five', 'male', 'Sylhet', 1200],
    ['Afsana', 9, 15, 'five', 'female', 'Sylhet', 1200],
    ['Hamid', 8, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Akkas', 6, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Asfaq', 7, 13, 'four', 'male', 'Sylhet', 1000],
    ['Masuma', 4, 17, 'five', 'female', 'Sylhet', 1200],
    ['Adiba', 5, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Robiul', 3, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Fatema', 2, 15, 'four', 'female', 'Hobiganj', 1000],
    ['Ab Rahman', 11, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Shibbir', 13, 12, 'five', 'male', 'Sylhet', 1200],
    ['Mahmuda', 12, 15, 'five', 'female', 'Sylhet', 1200],
    ['Monsur', 15, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Moksud', 14, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Raju', 17, 13, 'four', 'male', 'Sylhet', 1000],
    ['Nodi', 16, 17, 'five', 'female', 'Sylhet', 1200],
    ['Fariya', 18, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Mohaimin', 19, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Nadiya', 20, 15, 'four', 'female', 'Hobiganj', 1000],
    ['Forid', 21, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Ali Hossen', 22, 12, 'five', 'male', 'Sylhet', 1200],
    ['Hafsa', 23, 15, 'five', 'female', 'Sylhet', 1200],
    ['Shahinur', 24, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Shahab', 25, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Sakib', 26, 13, 'four', 'male', 'Sylhet', 1000],
    ['Mim', 27, 17, 'five', 'female', 'Sylhet', 1200],
    ['Farzana', 28, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Yasin', 29, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Jesmin', 30, 15, 'four', 'female', 'Hobiganj', 1000],
]

let totalAmount=0;
studentList.sort().map((item, index)=>{
    console.log(`

    Name : ${item[0]} 
    Roll : ${item[1]}
    Student Age: ${item[2]} Years Old
    Gender : ${item[4]}
    Admission Fee : ${item[6]}
    address: ${item[5]}
    
    `)
    totalAmount += item[6]
})

console.log(`
-----------------------------------
Total Admnission fees = ${totalAmount} Taka
`);

*/


/**
 *  02. Find All Female Students
 */

/*
 const studentList=[
    ['Sayyid Saadi', 10, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Minhaj', 1, 12, 'five', 'male', 'Sylhet', 1200],
    ['Afsana', 9, 15, 'five', 'female', 'Sylhet', 1200],
    ['Hamid', 8, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Akkas', 6, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Asfaq', 7, 13, 'four', 'male', 'Sylhet', 1000],
    ['Masuma', 4, 17, 'five', 'female', 'Sylhet', 1200],
    ['Adiba', 5, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Robiul', 3, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Fatema', 2, 15, 'four', 'female', 'Hobiganj', 1000],
    ['Ab Rahman', 11, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Shibbir', 13, 12, 'five', 'male', 'Sylhet', 1200],
    ['Mahmuda', 12, 15, 'five', 'female', 'Sylhet', 1200],
    ['Monsur', 15, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Moksud', 14, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Raju', 17, 13, 'four', 'male', 'Sylhet', 1000],
    ['Nodi', 16, 17, 'five', 'female', 'Sylhet', 1200],
    ['Fariya', 18, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Mohaimin', 19, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Nadiya', 20, 15, 'four', 'female', 'Hobiganj', 1000],
    ['Forid', 21, 18, 'four', 'male', 'Sunamganj', 1000],
    ['Ali Hossen', 22, 12, 'five', 'male', 'Sylhet', 1200],
    ['Hafsa', 23, 15, 'five', 'female', 'Sylhet', 1200],
    ['Shahinur', 24, 17, 'four', 'male', 'Sunamganj', 1000],
    ['Shahab', 25, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Sakib', 26, 13, 'four', 'male', 'Sylhet', 1000],
    ['Mim', 27, 17, 'five', 'female', 'Sylhet', 1200],
    ['Farzana', 28, 15, 'four', 'female', 'Sunamganj', 1000],
    ['Yasin', 29, 18, 'five', 'male', 'Sunamganj', 1200],
    ['Jesmin', 30, 15, 'four', 'female', 'Hobiganj', 1000],
]

studentList.sort().forEach((item, i)=>{
    if(item[4] == 'female'){
        console.log(`
        Name : ${item[0]} 
        Roll : ${item[1]}
        Student Age: ${item[2]} Years Old
        Gender : ${item[4]}
        Admission Fee : ${item[6]}
        address: ${item[5]}
        `);
    }
})

/**
 * 03. Find class wise student result
 */

/*
 const studentList=[
    ['Sayyid Saadi', 10, 18, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Minhaj', 1, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Afsana', 9, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Hamid', 8, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Akkas', 6, 18, 'five', 5.00, 'A+', 'male', 'Sunamganj', 1200],
    ['Asfaq', 7, 13, 'four', 3.50, 'A-', 'male', 'Sylhet', 1000],
    ['Masuma', 4, 17, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Adiba', 5, 15, 'four', 0.00, 'F', 'female', 'Sunamganj', 1000],
    ['Robiul', 3, 18, 'five', 3.50, 'A-', 'male', 'Sunamganj', 1200],
    ['Fatema', 2, 15, 'four', 4.00, 'A', 'female', 'Hobiganj', 1000],
    ['Ab Rahman', 11, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Shibbir', 13, 12, 'five', 0.00, 'F', 'male', 'Sylhet', 1200],
    ['Mahmuda', 12, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Monsur', 15, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Moksud', 14, 18, 'five', 2.00, 'C', 'male', 'Sunamganj', 1200],
    ['Raju', 17, 13, 'four', 0.00, 'F', 'male', 'Sylhet', 1000],
    ['Nodi', 16, 17, 'five', 4.00, 'A', 'female', 'Sylhet', 1200],
    ['Fariya', 18, 15, 'four', 2.60, 'C', 'female', 'Sunamganj', 1000],
    ['Mohaimin', 19, 18, 'five', 4.00, 'A', 'male', 'Sunamganj', 1200],
    ['Nadiya', 20, 15, 'four', 3.00, 'B', 'female', 'Hobiganj', 1000],
    ['Forid', 21, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Ali Hossen', 22, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Hafsa', 23, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Shahinur', 24, 17, 'four', 1.50, 'D', 'male', 'Sunamganj', 1000],
    ['Shahab', 25, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Sakib', 26, 13, 'four', 2.00, 'C', 'male', 'Sylhet', 1000],
    ['Mim', 27, 17, 'five', 0.00, 'F', 'female', 'Sylhet', 1200],
    ['Farzana', 28, 15, 'four', 1.40, 'D', 'female', 'Sunamganj', 1000],
    ['Yasin', 29, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Jesmin', 30, 15, 'four', 0.00, 'F', 'female', 'Hobiganj', 1000],
]

studentList.map((item, index)=>{
    if(item[3]=='four'){
        console.log(`
       === Result Status Of ${item[0]} ===

        Name : ${item[0]} 
        Roll : ${item[1]}
        Class: ${item[3]}
        Gender : ${item[6]}
        Letter grade : ${item[5]}
        Grade point: ${item[4]}

        
        `);
    }
})
*/


/**
 * 04. Location wise student result
 */

/*
 const studentList=[
    ['Sayyid Saadi', 10, 18, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Minhaj', 1, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Afsana', 9, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Hamid', 8, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Akkas', 6, 18, 'five', 5.00, 'A+', 'male', 'Sunamganj', 1200],
    ['Asfaq', 7, 13, 'four', 3.50, 'A-', 'male', 'Sylhet', 1000],
    ['Masuma', 4, 17, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Adiba', 5, 15, 'four', 0.00, 'F', 'female', 'Sunamganj', 1000],
    ['Robiul', 3, 18, 'five', 3.50, 'A-', 'male', 'Sunamganj', 1200],
    ['Fatema', 2, 15, 'four', 4.00, 'A', 'female', 'Hobiganj', 1000],
    ['Ab Rahman', 11, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Shibbir', 13, 12, 'five', 0.00, 'F', 'male', 'Sylhet', 1200],
    ['Mahmuda', 12, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Monsur', 15, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Moksud', 14, 18, 'five', 2.00, 'C', 'male', 'Sunamganj', 1200],
    ['Raju', 17, 13, 'four', 0.00, 'F', 'male', 'Sylhet', 1000],
    ['Nodi', 16, 17, 'five', 4.00, 'A', 'female', 'Sylhet', 1200],
    ['Fariya', 18, 15, 'four', 2.60, 'C', 'female', 'Sunamganj', 1000],
    ['Mohaimin', 19, 18, 'five', 4.00, 'A', 'male', 'Sunamganj', 1200],
    ['Nadiya', 20, 15, 'four', 3.00, 'B', 'female', 'Hobiganj', 1000],
    ['Forid', 21, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Ali Hossen', 22, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Hafsa', 23, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Shahinur', 24, 17, 'four', 1.50, 'D', 'male', 'Sunamganj', 1000],
    ['Shahab', 25, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Sakib', 26, 13, 'four', 2.00, 'C', 'male', 'Sylhet', 1000],
    ['Mim', 27, 17, 'five', 0.00, 'F', 'female', 'Sylhet', 1200],
    ['Farzana', 28, 15, 'four', 1.40, 'D', 'female', 'Sunamganj', 1000],
    ['Yasin', 29, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Jesmin', 30, 15, 'four', 0.00, 'F', 'female', 'Hobiganj', 1000],
]

studentList.map((item, index)=>{
    if(item[7]=='Sunamganj'){
        console.log(`
       === Result Status Of ${item[0]} ===

        Name : ${item[0]} 
        Roll : ${item[1]}
        Class: ${item[3]}
        Gender : ${item[6]}
        Letter grade : ${item[5]}
        Grade point: ${item[4]}
        Location : ${item[7]}

        
        `);
    }
})

*/

/**
 * 05. find student between 10 - 25 age
 */

/*
const studentList=[
    ['Sayyid Saadi', 10, 18, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Minhaj', 1, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Afsana', 9, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Hamid', 8, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Akkas', 6, 18, 'five', 5.00, 'A+', 'male', 'Sunamganj', 1200],
    ['Asfaq', 7, 13, 'four', 3.50, 'A-', 'male', 'Sylhet', 1000],
    ['Masuma', 4, 17, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Adiba', 5, 15, 'four', 0.00, 'F', 'female', 'Sunamganj', 1000],
    ['Robiul', 3, 18, 'five', 3.50, 'A-', 'male', 'Sunamganj', 1200],
    ['Fatema', 2, 15, 'four', 4.00, 'A', 'female', 'Hobiganj', 1000],
    ['Ab Rahman', 11, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Shibbir', 13, 12, 'five', 0.00, 'F', 'male', 'Sylhet', 1200],
    ['Mahmuda', 12, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Monsur', 15, 17, 'four', 4.00, 'A', 'male', 'Sunamganj', 1000],
    ['Moksud', 14, 18, 'five', 2.00, 'C', 'male', 'Sunamganj', 1200],
    ['Raju', 17, 13, 'four', 0.00, 'F', 'male', 'Sylhet', 1000],
    ['Nodi', 16, 17, 'five', 4.00, 'A', 'female', 'Sylhet', 1200],
    ['Fariya', 18, 15, 'four', 2.60, 'C', 'female', 'Sunamganj', 1000],
    ['Mohaimin', 19, 18, 'five', 4.00, 'A', 'male', 'Sunamganj', 1200],
    ['Nadiya', 20, 9, 'four', 3.00, 'B', 'female', 'Hobiganj', 1000],
    ['Forid', 21, 18, 'four', 5.00, 'A+', 'male', 'Sunamganj', 1000],
    ['Ali Hossen', 22, 12, 'five', 3.50, 'A-', 'male', 'Sylhet', 1200],
    ['Hafsa', 23, 15, 'five', 2.00, 'C', 'female', 'Sylhet', 1200],
    ['Shahinur', 24, 17, 'four', 1.50, 'D', 'male', 'Sunamganj', 1000],
    ['Shahab', 25, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Sakib', 26, 13, 'four', 2.00, 'C', 'male', 'Sylhet', 1000],
    ['Mim', 27, 9, 'five', 0.00, 'F', 'female', 'Sylhet', 1200],
    ['Farzana', 28, 15, 'four', 1.40, 'D', 'female', 'Sunamganj', 1000],
    ['Yasin', 29, 18, 'five', 0.00, 'F', 'male', 'Sunamganj', 1200],
    ['Jesmin', 30, 15, 'four', 0.00, 'F', 'female', 'Hobiganj', 1000],
]

studentList.map((item, index)=>{
    if(item[2] >10 || item <25){
        console.log(`
       === Result Status Of ${item[0]} ===

        Name : ${item[0]} 
        Roll : ${item[1]}
        Class: ${item[3]}
        Age: ${item[2]}
        Gender : ${item[6]}
        Letter grade : ${item[5]}
        Grade point: ${item[4]}
        Location : ${item[7]}

        
        `);
    }
})

*/

