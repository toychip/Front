class Person {
    constructor(name, age, tel) {
        this._name = name;
        this._age = age;
        this._tel = tel;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get tel() {
        return this._tel;
    }

    set tel(newTel) {
        this._tel = newTel;
    }
}

class Student extends Person {
    constructor(name, age, tel, sid) {
        super(name, age, tel);
        this._sid = sid;
    }

    get sid() {
        return this._sid;
    }

    set sid(newSid) {
        this._sid = newSid;
    }

    toString() {
        return `Name:${this.name}, Age:${this.age}, Tel:${this.tel}, SID:${this.sid}`;
    }
}

let out = "Original\n";

var e1 = new Student("Scott", "21", "0101234567", "s20212222");
out += e1.toString() + "\n";

out += "Change Name\n";
e1.name = "Bill";
out += e1.toString() + "\n";

out += "Change Sid\n";
e1.sid = "S20211234";
out += e1.toString() + "\n";

console.log(out);
