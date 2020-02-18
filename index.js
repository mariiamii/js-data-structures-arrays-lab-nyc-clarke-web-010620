let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

describe('destructivelyAppendDriver(name)', function () {
      it('appends a driver to the end of the drivers array', function () {
        destructivelyAppendDriver('Ralph');

        expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });