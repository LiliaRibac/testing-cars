var expect = chai.expect;

describe("Car Controls", function () {

    let sandbox; //added
    let carsSelectElement;


    beforeEach(function () {
        // create a sandbox
        sandbox = sinon.sandbox.create();
        carsSelectElement = document.createElement('select')

    });

    afterEach(function () {
        sandbox.restore();
    });

    //cars
    describe("Create button that will have the function of creating a new car", function () {
        it("add a new car by pressing the button", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            //ASSERT
            expect(carsSelectElement.childElementCount).to.equal(1);
        })
    })
    // turn-right
    describe("Create button that will have the function of turn-right a car", function () {
        it("turn-right a car by pressing the button", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            turnRight(selectedCar)

            console.log(turnRight)
            //ASSERT
            expect(selectedCar.className.includes('south')).to.equal(true);
            // test the return car
        })

    })
     // turn-left
     describe("Create button that will have the function of turn-left a car", function () {
        it("turn-left a car by pressing on button", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            turnLeft(selectedCar)
           // console.log(selectedCar)

            //ASSERT
            expect(selectedCar.className.includes('north')).to.equal(true);
            // test the return car
        })

    })

    // forward
    describe("Create button that will have the function moving a car forward ", function () {
        it("move a car forward by pressing on button", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            forward(selectedCar)
            console.log(selectedCar)

            //ASSERT
            expect(selectedCar.className.includes('east')).to.equal(true);
            // test the return car
        })

    })

     // reverse
     describe("Create button that will have the function to reverse a car ", function () {
        it("reverse a car by presing on button ", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            reverse(selectedCar)
            console.log(selectedCar)

            //ASSERT
            expect(selectedCar.className.includes('west')).to.equal(false);
            // test the return car
        })

    })
});