var expect = chai.expect;

describe("Driving a Car", function () {

    let sandbox; //added
    let car;
    // const MOVE_VALUE = 10;

    beforeEach(function () {
        // create a sandbox
        sandbox = sinon.sandbox.create();

        // stub some console methods
        //sandbox.stub(window.console, "log");
        //sandbox.stub(window.console, "error");

        car = {};
        car.style = {};
        car.style.top = "";
        car.style.left = "";
        car.className = "";

        //mocing complex objects such as DOM
        //https://codeutopia.net/blog/2016/05/23/sinon-js-quick-tip-how-to-stubmock-complex-objects-such-as-dom-objects/

        //mocking document load
        //https://stackoverflow.com/questions/43083419/karma-mocha-how-to-test-method-that-listens-to-domcontentloaded-event/43474345
    });

    afterEach(function () {
        // restore the environment as it was before
        sandbox.restore();
    });

    //FORWARD
    describe("Forward", function () {

        describe("calling forward while facing north", function () {
            it("should move car from bottom to top", function () {

                //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car north";

                //ACT
                forward(car);

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.style.top).to.equal('-10px');
                expect(car.style.left).to.equal('0px');



            });
        });

        describe("calling forward while facing east", function () {
            it("should move car from right to left", function () {

                //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

                //ACT
                forward(car);

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('10px');
            });
        });


        describe("calling forward while facing south", function () {
            it("should move car from top to bottom", function () {
                //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car south";

                //ACT
                forward(car);

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.style.top).to.equal('10px');
                expect(car.style.left).to.equal('0px');


            });
        });

        describe("calling forward while facing west", function () {
            it("should move car from left to right", function () {

                //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car west";

                //ACT
                forward(car);

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('-10px');


            });
        });

    });

    //turnRight
    describe("turnRight", function () {

        describe("calling turnRight while facing north", function () {
            it("should move car from north to east", function () {
                //SETUP

                car.className = "car north";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car east"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnRight(car);

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.className).to.equal("car east");


            });
        });

        describe("calling turnRight while facing east", function () {
            it("should move car from east to south", function () {
                //SETUP

                car.className = "car east";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car south"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnRight(car);

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.className).to.equal("car south");


            });
        });



        describe("calling turnRight while facing south", function () {
            it("should move car from south to west", function () {
                //SETUP

                car.className = "car south";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car west"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnRight(car);

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.className).to.equal("car west");


            });
        });

        describe("calling turnRight while facing west", function () {
            it("should move car from north to south", function () {
                //SETUP

                car.className = "car west";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car north"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnRight(car);

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.className).to.equal("car north");


            });
        });


    });

    // addCar
    describe("addCar", function () {
        describe("calling addCar ", function () {
            it("should  be able to addCar", function () {
                //ASSERT
                expect(addCar()).to.match(/c[0-9]/);
            });
        });
    });

    //randomCarArtId
    describe("randomCarArtId", function () {
        describe("calling randomCar ", function () {
            it("should be able to add randomCar", function () {
                //ASSERT
                expect(randomCarArtId()).to.match(/car[0-9]/);
            })
        })

    })

    //moveIt()
    describe("moveIt", function () {
        describe("calling direction moveIt", function () {
            describe("moving north", function () {
                it("should move the forward", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "NORTH", "FORWARD");

                    //ASSERT
                    expect(car.style.top).to.equal("-10px");
                })
                it("should move the reverse", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "NORTH", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("10px");
                })
            })
            describe("moving south", function () {
                it("should move the forward", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "SOUTH", "FORWARD");

                    //ASSERT
                    expect(car.style.top).to.equal("10px");
                })
                it("should move the reverse", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "SOUTH", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("-10px");
                })
            })

            describe("moving east", function () {
                it("should move the forward", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "EAST", "FORWARD");

                    //ASSERT
                    expect(car.style.top).to.equal("0px");
                })
                it("should move the reverse", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "EAST", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("0px");
                })
            })


            describe("moving west", function () {
                it("should move the forward", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "WEST", "FORWARD");

                    //ASSERT
                    expect(car.style.top).to.equal("0px");
                })
                it("should move the reverse", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "WEST", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("0px");
                })
            })
        })
    });

    describe('TurnIt to right', function () {
        describe('calling turnIt right while facing north', function () {
            it('should turn car from north to east', function () {

                //SETUP
                car.className = "car north";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car east"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "NORTH", "RIGHT");

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.className).to.equal("car east");

            });
        });

    })


    /// EXAMPLE SYNTAX BELOW

    //   describe("#greets", function() {
    //     it("should throw if no target is passed in", function() {
    //       expect(function() {
    //         (new Cow()).greets();
    //       }).to.throw(Error);
    //     });

    //     it("should greet passed target", function() {
    //       var greetings = (new Cow("Kate")).greets("Baby");
    //       expect(greetings).to.equal("Kate greets Baby");
    //     });
    //   });

    //   describe("#consoleGreets", function() {
    //     it("should throw if no target is passed in", function() {
    //         (new Cow()).consoleGreets();

    //         sinon.assert.notCalled(console.log);
    //         sinon.assert.calledOnce(console.error);
    //         sinon.assert.calledWithExactly(console.error, "missing target");
    //     });

    //     it("should greet passed target", function() {
    //       var greetings = (new Cow("Kate")).consoleGreets("Baby");

    //       sinon.assert.notCalled(console.error);
    //       sinon.assert.calledOnce(console.log);
    //       sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
    //     });
    //   });

    //   describe("#lateGreets", function() {
    //     it("should pass an error if no target is passed", function(done) {
    //       (new Cow()).lateGreets(null, function(err, greetings) {
    //         expect(err).to.be.an.instanceof(Error);
    //         done();
    //       });
    //     });

    //     it("should greet passed target after one second", function(done) {
    //       (new Cow("Kate")).lateGreets("Baby", function(err, greetings) {
    //         expect(greetings).to.equal("Kate greets Baby");
    //         done();
    //       });
    //     });
    //   });
});