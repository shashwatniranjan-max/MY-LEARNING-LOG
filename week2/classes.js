class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color= color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    paint() {
        console.log(`paint with color ${this.color}`);
    }
}
const rect = new Rectangle(2, 4, "red");// instance of the rectangle class or object of rectangle class
const area = rect.area();
console.log(area);
rect.paint(); 



const now = new Date();
console.log(now.getFullYear());



const map = new Map();
map.set("name", "shashwat");
map.set("age", 18);
console.log(map.get("name"));

const firstname = map.get("name");
const age = map.get("age");