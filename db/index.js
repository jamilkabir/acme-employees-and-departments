const Sequelize = require('sequelize')
// const { emit } = require('nodemon') -> didn't add this
const conn = new Sequelize("postgres://localhost:5432/acme-employees-and-departments")
const faker = require('faker')


const Employee = conn.define('employee',{
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

// const Department = conn.define('department',{
//     name : {
//         type : Sequelize.STRING,
//         allowNull : false
//     }
// })

// Department.hasMany(Employee)


const syncAndSeed = async() => {
    await conn.sync({force:true})
    const emp = [];
    while(emp.length<50){
        emp.push( Employee.create({name:faker.name.firstName()}));
       
    }
}



module.exports = {
    models : {
        Employee,
        // Department
    },

    syncAndSeed
}