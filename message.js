//COMMONJS
// const message = {
//     name: 'Diego Robles',
//     role: 'student',
// }

// module.exports = message

class Message {
    constructor(name, role) {
        this.name = name
        this.role = role
    }
    sayHello() {
        console.log(`Hellow World. My name is ${this.name} and I am the ${this.role}!`)
    }
}

// export default Message      //ES6 MODULE LOADING
export {Message}               //ES6 MODULE LOADING 
//module.exports = Message //COMMONJS