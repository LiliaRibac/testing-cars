var expect = chai.expect;

describe("Driving a Car", function () {

    let sandbox; //added
    let car;
   

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


    //turnLeft
    describe("turnLeft", function () {

        describe("calling turnLeft while facing north", function () {
            it("should move car from north to west", function () {
                //SETUP

                car.className = "car north";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car west"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnLeft(car);

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.className).to.equal("car west");


            });
        });

        describe("calling turnLeft while facing east", function () {
            it("should move car from east to north", function () {
                //SETUP

                car.className = "car east";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car north"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnLeft(car);

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.className).to.equal("car north");


            });
        });

        describe("calling turnLeft while facing south", function () {
            it("should move car from south to east", function () {
                //SETUP

                car.className = "car south";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car east"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnLeft(car);

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.className).to.equal("car east");


            });
        });

        describe("calling turnLeft while facing west", function () {
            it("should move car from west to south", function () {
                //SETUP

                car.className = "car west";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car south"
                };

                car.classList.toggle = function () {

                }
                //ACT
                turnLeft(car);

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.className).to.equal("car south");


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

    //reverse

    describe("reverse", function () {
        describe("calling direction reverse", function () {
            describe("reverse north", function () {

                it("car should reverse north", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "NORTH", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("10px");
                })
            })
            describe("reverse south", function () {
                it("car should reverse south", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "SOUTH", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("-10px");
                })
            })
            describe("reverse east", function () {
                it("car should reverse east", function () {
                    //SETUP
                    car.style.top = "0px";
                    car.style.left = "0px";

                    //ACT      
                    moveIt(car, "EAST", "REVERSE");

                    //ASSERT
                    expect(car.style.top).to.equal("0px");
                })
            })
            describe("reverse west", function () {
                it("car should reverse west", function () {
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
    })

    // turnIt
    describe('turnIt to the right', function () {
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

    describe('turnIt to the left', function () {
        describe('calling turnIt left while facing north', function () {
            it('should turn car from north to west', function () {

                //SETUP
                car.className = "car north";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car west"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "NORTH", "LEFT");

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.className).to.equal("car west");

            });
        });

    })

    describe('turnIt to the right', function () {
        describe('calling turnIt right while facing south', function () {
            it('should turn car from south to west', function () {

                //SETUP
                car.className = "car south";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car west"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "SOUTH", "RIGHT");

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.className).to.equal("car west");

            });
        });

    })

    describe('turnIt to the left', function () {
        describe('calling turnIt left while facing south', function () {
            it('should turn car from south to east', function () {

                //SETUP
                car.className = "car south";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car east"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "SOUTH", "LEFT");

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.className).to.equal("car east");

            });
        });

    })

    describe('turnIt to the right', function () {
        describe('calling turnIt right while facing east', function () {
            it('should turn car from east to south', function () {

                //SETUP
                car.className = "car east";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car south"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "EAST", "RIGHT");

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.className).to.equal("car south");

            });
        });

    })

    describe('turnIt to the left', function () {
        describe('calling turnIt left while facing east', function () {
            it('should turn car from east to north', function () {

                //SETUP
                car.className = "car east";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car north"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "EAST", "LEFT");

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.className).to.equal("car north");

            });
        });

    })

    describe('turnIt to the right', function () {
        describe('calling turnIt right while facing west', function () {
            it('should turn car from west to north', function () {

                //SETUP
                car.className = "car west";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car north"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "WEST", "RIGHT");

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.className).to.equal("car north");

            });
        });

    })

    describe('turnIt to the left', function () {
        describe('calling turnIt left while facing west', function () {
            it('should turn car from west to south', function () {

                //SETUP
                car.className = "car west";
                car.classList = [];
                car.classList.add = function () {
                    car.className = "car south"
                };
                car.classList.toggle = function () {}
                //ACT      
                turnIt(car, "WEST", "LEFT");

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.className).to.equal("car south");

            });
        });

    })

    describe('getDirection', function () {
        describe('calling getDirection  while facing north', function () {
            it('car should return to north', function () {

                //SETUP                
                car.className = "car north"

                //ACT      
                getDirection(car);

                //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.className).to.equal("car north");

            });
        });

    })

    describe('getDirection', function () {
        describe('calling getDirection  while facing south', function () {
            it('car should return to south', function () {

                //SETUP                
                car.className = "car south"

                //ACT      
                getDirection(car);

                //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.className).to.equal("car south");

            });
        });

    })

    describe('getDirection', function () {
        describe('calling getDirection  while facing east', function () {
            it('car should return to east', function () {

                //SETUP                
                car.className = "car east"

                //ACT      
                getDirection(car);

                //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.className).to.equal("car east");

            });
        });

    })

    describe('getDirection', function () {
        describe('calling getDirection  while facing west', function () {
            it('car should return to west', function () {

                //SETUP                
                car.className = "car west"

                //ACT      
                getDirection(car);

                //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.className).to.equal("car west");

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