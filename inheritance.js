class Parent {
    constructor() {
        this.fatherName = "Sonjoy Chowdury"
    }
}

class Child extends Parent {
    constructor(name) {
        super()
        this.name = name
    }
    getFullName() {
        return this.name + " " + this.fatherName
    }
}
const baby = new Child("Mina")
const baby2 = new Child("Jerry")
console.log(baby.getFullName());
console.log(baby2.getFullName());