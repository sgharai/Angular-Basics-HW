function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, certsAndDegrees) {
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
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.nameAndPhone = function () {
        return this.fullName() + ": " + this.phoneNumber;
    };
    Person.prototype.getLocation = function () {
        return this.state + " " + this.zipCode;
    };
    Person.prototype.getWeeklyWages = function (hours) {
        if (hours) {
            return hours * this.hourlyWage;
        }
        else {
            return this.hourlyWage * 40;
        }
    };
    Person.prototype.addCerts = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) { return _this.certsAndDegrees.push(arg); });
    };
    return Person;
}());
var sofia = new Person("Sofia", "Gharaibeh", 22, 555, "CT", 465, "software developer", 55, []);
var uhtred = new Person("Uhtred", "Ragnarsson", 29, 333, "Denmark", 808, "Viking", 10, []);
var saul = new Person("Saul", "Goodman", 48, 666, "NM", 774, "lawyer", 150, []);
sofia.addCerts("B.A. in History", "CELTA");
uhtred.addCerts("Certified Badass");
saul.addCerts("M.A.", "J.D.");
var people = [sofia, uhtred, saul];
people.forEach(function (person) {
    //List of people
    var namePhoneDiv = document.createElement("div");
    namePhoneDiv.innerHTML = person.nameAndPhone();
    var locationDiv = document.createElement("div");
    locationDiv.innerHTML = person.getLocation();
    document.getElementById("locations").appendChild(namePhoneDiv);
    document.getElementById("locations").appendChild(locationDiv);
    //Weekly Wages
    var personWageDiv = document.createElement("div");
    personWageDiv.innerHTML = person.fullName() + ": " + person.getWeeklyWages();
    document.getElementById("wages").appendChild(personWageDiv);
});
people.forEach(function (person) {
    console.log(person);
});
function createNewPerson(options) {
    var person = { firstName: "John", lastName: "Darnielle", occupation: "singer" };
    if (options.occupation) {
        person.occupation = options.occupation;
    }
    if (options.firstName) {
        person.firstName = options.firstName;
    }
    if (options.lastName) {
        person.lastName = options.lastName;
    }
    return person;
}
var gintoki = createNewPerson({ firstName: "Gintoki", lastName: "Sakata", occupation: "unemployed/former samurai" });
var miike = createNewPerson({ firstName: "Miike", lastName: "Snow" });
console.log(gintoki);
console.log(miike);
