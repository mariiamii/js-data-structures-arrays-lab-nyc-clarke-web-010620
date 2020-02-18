let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  return [...name, drivers];
}

function prependDriver(name){
  
}

function removeLastDriver(){
  
}

function removeFirstDriver(){
  
}

    describe('prependDriver(name)', function () {
      it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(prependDriver("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastDriver()', function () {
      it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeLastDriver()).to.have.ordered.members(["Milo", "Otis"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstDriver()', function () {
      it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', function () {
        expect(removeFirstDriver()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
 
