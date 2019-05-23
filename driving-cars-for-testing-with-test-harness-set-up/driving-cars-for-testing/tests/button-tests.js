var expect = chai.expect;

describe("Car Controls", function () {

    let sandbox; //added
    let carsSelectElement;


    beforeEach(function () {
        // create a sandbox
        sandbox = sinon.sandbox.create();

        // stub some console methods
        //sandbox.stub(window.console, "log");
        //sandbox.stub(window.console, "error");

        carsSelectElement = document.createElement('select')
        //mocing complex objects such as DOM
        //https://codeutopia.net/blog/2016/05/23/sinon-js-quick-tip-how-to-stubmock-complex-objects-such-as-dom-objects/

        //mocking document load
        //https://stackoverflow.com/questions/43083419/karma-mocha-how-to-test-method-that-listens-to-domcontentloaded-event/43474345
    });

    afterEach(function () {
        // restore the environment as it was before
        sandbox.restore();
    });

    //cars
    describe("Create", function () {
        it("should add a new car option to the cars select element", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            //ASSERT
            expect(carsSelectElement.childElementCount).to.equal(1);
        })
    })
    // turn-right
    describe("Selected Car turn-right", function () {
        it("Should return the selected car", function () {
            //ACT
            newCarAndUpdateUi(carsSelectElement)

            let selectedCar = getSelectedCar(carsSelectElement)
            turnRight(selectedCar)

            //ASSERT
            expect(selectedCar.className.includes('south')).to.equal(true);
            // test the return car
        })
       
    })
    //  // turn-right
    //  describe("Selected Car turn-right", function () {
    //     it("Should return the selected car", function () {
    //         //ACT
    //         newCarAndUpdateUi(carsSelectElement)

    //         let selectedCar = getSelectedCar(carsSelectElement)
    //         turnRight(selectedCar)

    //         //ASSERT
    //         expect(selectedCar.className.includes('south')).to.equal(true);
    //         // test the return car
    //     })
       
    // })
});