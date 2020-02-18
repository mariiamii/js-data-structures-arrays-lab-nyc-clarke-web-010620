function drivers(){
  
}

describe('index.js', function () {
  describe('drivers', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Milo', 'Otis', 'Garfield');
    });
