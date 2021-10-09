"use strict";
// -- location 1 start -- //
class church1 {
    constructor(hotspot, adress, zipcode, place) {
        this.hotspot = hotspot;
        this.adress = adress;
        this.zipcode = zipcode;
        this.place = place;
    }
    printData() {
        return `If you are visiting Vienna, you should start your travel spot at ${this.hotspot}, ${this.adress}, ${this.zipcode} ${this.place}.`;
    }
}
let visit1 = new church1("St. Charles Church", "Karlsplatz 1", 1010, "Vienna");
// console.log(visit1.printData())
document.getElementById("blog").innerHTML = visit1.printData();
//-- location 1 end --//
//...................................................................................//
// -- location 2 start -- //
class zoo1 extends church1 {
    constructor(hotspot, adress, zipcode, place) {
        super(hotspot, adress, zipcode, place);
    }
    printData() {
        return `If you are with your famliy and kids, this spot ${this.hotspot}, ${this.adress}, ${this.zipcode} ${this.place} is a must see.`;
    }
}
let animals = new zoo1("Zoo Vienna", "Maxingstr. 13b", 1130, "Wien");
// console.log(animals.printData())
document.getElementById("blog").innerHTML = animals.printData();
//--location 2 end --//
//...................................................................................//
//-- Restaurant 1 start --//
class lemon1 {
    constructor(name, cuisine, adress, zipcode, place, phone, web) {
        this.name = name;
        this.cuisine = cuisine;
        this.adress = adress;
        this.zipcode = zipcode;
        this.place = place;
        this.phone = phone;
        this.web = web;
    }
    printData() {
        return `Of course you'll get hungry after all the walkaround. So, if you like asian food, try ${this.name} at ${this.adress} ${this.zipcode} ${this.place}. They serve tasty ${this.cuisine}. For reservations give them a call under ${this.phone} or visit their webpage ${this.web}.`;
    }
}
let leaf = new lemon1("Lemon Leaf Thai Restaurant", "Thai Food", "Kettenbrückengasse 19", 1050, "Vienna", +435812308, "www.lemonleaf.at");
// console.log(leaf.printData())
document.getElementById("blog").innerHTML = leaf.printData();
// -- Restaurant 1 end --//
//...................................................................................//
// -- Restaurant 2 start --//
class sixta1 extends lemon1 {
    constructor(name, cuisine, adress, zipcode, place, phone, web) {
        super(name, cuisine, adress, zipcode, place, phone, web);
    }
    printData() {
        return `And if you want to try ${this.cuisine}, you can't miss this place ${this.name} at ${this.adress}, ${this.zipcode} ${this.place}. You'd better get an reservation through phone ${this.phone} to get a seat granted. Otherwise, if you're out of luck, you'll have to do "windows shopping" via ${this.web} and salviate over it.`;
    }
}
let resta = new sixta1("Restaurant SIXTA", "authentic Austria Food", "Schönbrunner Straße 21", 1050, "Wien", +4315852856, "www.sixta-restaurant.at");
// console.log(resta.printData())
document.getElementById("blog").innerHTML = resta.printData();
// -- Restaurant 2 end --//
//...................................................................................//
//-- event 1 - start --//
class eventKris {
    constructor(day, date, who, adress, zipcode, place, time, price, web) {
        this.day = day;
        this.date = date;
        this.time = time;
        this.who = who;
        this.adress = adress;
        this.zipcode = zipcode;
        this.place = place;
        this.price = price;
        this.web = web;
    }
    printData() {
        return `Save the date! On ${this.day}, ${this.date}, ${this.who} is in town! You can rock to him at ${this.adress}, ${this.zipcode} ${this.place} at ${this.time} o'clock! Entry Fee will be ${this.price} EUR. For more informations visit ${this.web}.`;
    }
}
// ---> somethings wrong -- check again!!! <---- 
let offerson = new eventKris("Friday", 1, "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer platz 1", 1150, "Wien", 2, 5, "www.kriskristofferson.com");
// console.log(offerson.printData())
document.getElementById("blog").innerHTML = offerson.printData();
// ---> somethings wrong -- check again!!! <---- 
//-- event 1 - end --//
//-- event 2 - start --//
class eventLenny extends eventKris {
    constructor(day, date, who, adress, zipcode, place, price, web) {
        super(day, date, who, adress, zipcode, place, price, web);
    }
    printData() {
        return `Did you know? At ${this.day} ${this.date}, ${this.who} is rocking the place in ${this.adress}, ${this.zipcode} ${this.place}. For ${this.price} EUR you can be in this spectacular event. Don't miss it! For more informations, see ${this.web}`;
    }
}
let kravitz = new eventLenny("Saturday", 09122019, "Lenny Kravitz", "Wiener Stadthalle - Halle D, Ronald Rainer Platz 1", 1150, "Wien", 4780, "www.lennykravitz.com");
// console.log(kravitz.printData())
document.getElementById("blog").innerHTML = kravitz.printData();
//-- event 2 - end --//
