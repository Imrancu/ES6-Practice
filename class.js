class Student {
    constructor(sId, sName) {
        this.id = sId
        this.name = sName
        this.university = 'University of Chittagong'
    }
}
const student1 = new Student(1, 'Saymon')
const student2 = new Student(2, 'Nayma')
console.log(student1, student2);