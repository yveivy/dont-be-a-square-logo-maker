class Shape { 
    constructor() {
        this.color ="";
    }
    setHue(hue) {
        this.color = hue;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="145,10 285,180 10,180" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="25" width="200" height="200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

module.exports = { Square, Triangle, Circle};