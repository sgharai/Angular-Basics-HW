function sayHello(person : string) : string {
    return "Hello, " + person;
}

var user = "Super Student";

document.getElementById("para").innerHTML= sayHello(user);

class Person {
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    certsAndDegrees: String[];

    constructor(firstName: string,
        lastName: string,
        age: number,
        phoneNumber: number,
        state: string,
        zipCode: number,
        occupation: string, 
        hourlyWage: number,
        certsAndDegrees: String[]){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.phoneNumber = phoneNumber;
            this.state = state;
            this.zipCode = zipCode;
            this.occupation = occupation;
            this.hourlyWage = hourlyWage;
            this.certsAndDegrees = certsAndDegrees;
    }

    fullName() {
        return this.firstName + " " + this.lastName;  
    }

    nameAndPhone(){
        return this.fullName() + ": " + this.phoneNumber;
    }

    getLocation() {
        return this.state + " " + this.zipCode;
    }

    getWeeklyWages(hours?: number) {
        if(hours) {
            return hours * this.hourlyWage;
        } else {
            return this.hourlyWage * 40;
        }
    }

    addCerts(...args: String[]) {
        args.forEach(arg => this.certsAndDegrees.push(arg))
    }



}

const sofia = new Person("Sofia", "Gharaibeh", 22, 555, "CT", 465, "software developer",55, []);
const uhtred = new Person("Uhtred", "Ragnarsson", 29, 333, "Denmark", 808, "Viking", 10, []);
const saul = new Person("Saul", "Goodman", 48, 666, "NM", 774, "lawyer", 150, []);

sofia.addCerts("B.A. in History", "CELTA");
uhtred.addCerts("Certified Badass");
saul.addCerts("M.A.", "J.D.");

const people: Person[] = [sofia, uhtred, saul];

people.forEach(function (person) {
    //List of people
    let namePhoneDiv = document.createElement("div");
    namePhoneDiv.innerHTML = person.nameAndPhone();
    let locationDiv = document.createElement("div");
    locationDiv.innerHTML = person.getLocation(); 
    document.getElementById("locations").appendChild(namePhoneDiv);
    document.getElementById("locations").appendChild(locationDiv);

    //Weekly Wages
    let personWageDiv = document.createElement("div");
    personWageDiv.innerHTML = person.fullName() + ": " + person.getWeeklyWages();
    document.getElementById("wages").appendChild(personWageDiv);

})

people.forEach(person=> {
    console.log(person);
})

interface PersonOptions{
    firstName: string;
    lastName: string;
    age?: number;
    phoneNumber?: number;
    state?: string;
    zipCode?: number;
    occupation?: string;
    hourlyWage?: number;
    certsAndDegrees?: String[];

}

function createNewPerson(options : PersonOptions) : { firstName : string, lastName : string} {
    let person = {firstName : "John", lastName : "Darnielle", occupation: "singer"};
    if (options.occupation) {
        person.occupation = options.occupation;
    } 
    if (options.firstName) {
        person.firstName = options.firstName;
    }
    if(options.lastName) {
        person.lastName = options.lastName;
    }
    return person;
}

let gintoki = createNewPerson({firstName: "Gintoki", lastName: "Sakata", occupation: "unemployed/former samurai"})
let miike = createNewPerson({firstName: "Miike", lastName: "Snow"});

console.log(gintoki);
console.log(miike);