Quiz = function() {
};
 
// Check answer 1 is correct
Quiz.prototype.question1 = function(answer) {
    if (typeof(answer) !== "number") {
    // Answer is multiple choice so this should never be seen
    alert("Argument must be a number");
    }
    else if (answer === 19) {
        this.correct1 = 1;
    } else {
        this.correct1 = 0;
    }
};

// Check answer 2 is correct
Quiz.prototype.question2 = function(answer) {
    if (typeof(answer) !== "string") {
        alert("Argument must be a string");
    } else {
        answer = answer.toLowerCase();
        if (answer === "donna" || answer === "donna the hippo") {
            this.correct2 = 1;
        } else {
            this.correct2 = 0;
        }
    }
};

// Check answer 3 is correct
Quiz.prototype.question3 = function(answer) {
    if (typeof(answer) !== "string") {
        alert("Argument must be a string");
    } else if (answer === "water") {
        this.correct3 = 1;
    } else {
        this.correct3 = 0;
    }
};

// Check answer 4 is correct
Quiz.prototype.question4 = function(answer) {
    if (typeof(answer) !== "string") {
        alert("Argument must be a string");
    } else {
        answer = answer.toLowerCase();
        if (answer === "pygmy") {
            this.correct4 = 1;
        } else {
            this.correct4 = 0;
        }
    }
};

// Check answer 5 is correct
Quiz.prototype.question5 = function(answer) {
    if (typeof(answer) !== "string") {
        alert("Argument must be a string");
    } else if (answer === "london") {
        this.correct5 = 1;
    } else {
        this.correct5 = 0;
    }
};

// Scoring quiz
Quiz.prototype.getScore = function(q1,q2,q3,q4,q5) {
    this.score = (q1+q2+q3+q4+q5);
};