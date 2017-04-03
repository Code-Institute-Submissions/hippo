describe("Quiz", function() {

quiz = new Quiz();

    // Test for Question 1
    describe('Check answer is 19', function() {
        it('Should return 1 so answer is correct', function() {
            quiz.question1(19);
            expect(quiz.correct1).toBe(1);
        });
 
        it("Should return 0 when answer is wrong", function() {
            quiz.question1(30);
            expect(quiz.correct1).toBe(0);
        });
        
        // Should never happen as answer is multiple choice
        it("Should alert when undefined", function() {
            spyOn(window, "alert");
            quiz.question1();
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });

    // Test for Question 2
    describe('Check answer is donna', function() {
        it('Should return 1 so answer is correct', function() {
            quiz.question2("donna");
            expect(quiz.correct2).toBe(1);
        });
 
        it("Should return 1 when answer is correct and randomly capitalized", function() {
            quiz.question2("DoNNa tHe HiPPo");
            expect(quiz.correct2).toBe(1);
        });
        
        it("Should return 0 when answer is wrong", function() {
            quiz.question2("Malcolm");
            expect(quiz.correct2).toBe(0);
        });

        it("Should alert when not string", function() {
            spyOn(window, "alert");
            quiz.question2(99);
            expect(window.alert).toHaveBeenCalledWith("Argument must be a string");
        });
    });

    // Test for Question 3
    describe('Check answer is water', function() {
        it('Should return 1 so answer is correct', function() {
            quiz.question3("water");
            expect(quiz.correct3).toBe(1);
        });
 
        it("Should return 0 when answer is anything but water", function() {
            quiz.question3("land");
            expect(quiz.correct3).toBe(0);
        });
        
        it("Should alert when not string", function() {
            spyOn(window, "alert");
            quiz.question3(6);
            expect(window.alert).toHaveBeenCalledWith("Argument must be a string");
        });
    });

    // Test for Question 4
    describe('Check answer is pygmy', function() {
        it('Should return 1 so answer is correct', function() {
            quiz.question4("pygmy");
            expect(quiz.correct4).toBe(1);
        });
 
        it("Should return 1 when answer is correct and should not be case sensitive", function() {
            quiz.question4("PYgMy");
            expect(quiz.correct4).toBe(1);
        });
        
        it("Should return 0 when answer is wrong", function() {
            quiz.question4("smelly");
            expect(quiz.correct4).toBe(0);
        });

        it("Should alert when not string", function() {
            spyOn(window, "alert");
            quiz.question4(32);
            expect(window.alert).toHaveBeenCalledWith("Argument must be a string");
        });
    });

    // Test for Question 5
    describe('Check answer is water', function() {
        it('Should return 1 so answer is correct', function() {
            quiz.question5("london");
            expect(quiz.correct5).toBe(1);
        });
 
        it("Should return 0 when answer is anything but london", function() {
            quiz.question5("toledo");
            expect(quiz.correct5).toBe(0);
        });
        
        // Should never happen due to being multiple choice
        it("Should alert when not string", function() {
            spyOn(window, "alert");
            quiz.question5(87);
            expect(window.alert).toHaveBeenCalledWith("Argument must be a string");
        });
    });

    // Test for Results
    describe('Check score for total correct answers', function() {
        it('Should return 5 for all correct answers', function() {
            quiz.getScore(1,1,1,1,1);
            expect(quiz.score).toBe(5);
        });
        it('Should return 3 for 3 correct answers', function() {
            quiz.getScore(1,0,1,1,0);
            expect(quiz.score).toBe(3);
        });
        it('Should return 0 for no correct answers', function() {
            quiz.getScore(0,0,0,0,0);
            expect(quiz.score).toBe(0);
        });
    });
});