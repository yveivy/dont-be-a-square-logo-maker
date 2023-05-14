const { Triangle, Square, Circle} = require("../lib/shapes.js")


    describe('Triangle test', () => {
      it('should render a triangle shape with a blue background', () => {
        const shape = new Triangle();
        shape.setHue("blue");
        expect(shape.render()).toEqual('<polygon points="145,10 285,180 10,180" fill="blue"/>');
      });
    });


    describe('Square test', () => {
        it('should render a square shape with a blue background', () => {
          const shape = new Square();
          shape.setHue("blue");
          expect(shape.render()).toEqual('<rect x="50" y="25" width="200" height="200" fill="blue"/>');
        });
      });


    describe('Circle test', () => {
        it('should render a circle shape with a blue background', () => {
          const shape = new Circle();
          shape.setHue("blue");
          expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
        });
      });
 

