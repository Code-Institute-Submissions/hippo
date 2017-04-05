angular.module('RouteControllers', [])
	.controller('HomeController', function($scope) {

	})
	.controller('InfoController', function($scope) {

	})
	.controller('MediaController', function($scope) {
		// Script for enlarging pictures when they are clicked on
		$(function() {
				$('.thumbnail').on('click', function() {
					$('.hippopreview').attr('src', $(this).find('img').attr('src'));
					document.getElementById("modalCaption").innerHTML = $(this).find('figcaption').text();
					$('#hippomodal').modal('show');   
				});		
		});
	})
	.controller('QuizController', function($scope) {
		score = -1;
		$scope.submitQuiz = function() {

			// Test Question 1 Answer
			$scope.user.answer1 = parseFloat($scope.user.answer1);
			if (typeof($scope.user.answer1) !== "number") {
    			alert("Argument must be a number");
    		}
    		else if ($scope.user.answer1 === 19) {
        		var q1 = 1;
				document.getElementById("o1").style.display = "inline-block";
    		} else {
        		var q1 = 0;
				document.getElementById("x1").style.display = "inline-block";
    		}

    		// Test Question 2 Answer
			if (typeof($scope.user.answer2) !== "string") {
        		alert("Argument must be a string");
    		} else {
        		$scope.user.answer2 = $scope.user.answer2.toLowerCase();
        		if ($scope.user.answer2 === "donna" || $scope.user.answer2 === "donna the hippo") {
            	var q2 = 1;
				document.getElementById("o2").style.display = "inline-block";
        		} else {
            	var q2 = 0;
				document.getElementById("x2").style.display = "inline-block";
            	}
        	}

        	// Test Question 3 Answer
    		if (typeof($scope.user.answer3) !== "string") {
		    	alert("Argument must be a string");
			} else if ($scope.user.answer3 === "water") {
			    var q3 = 1;
				document.getElementById("o3").style.display = "inline-block";
			} else {
			    var q3 = 0;
				document.getElementById("x3").style.display = "inline-block";
			}

			// Test Question 4 Answer
			if (typeof($scope.user.answer4) !== "string") {
			    alert("Argument must be a string");
			} else {
			    $scope.user.answer4 = $scope.user.answer4.toLowerCase();
			    if ($scope.user.answer4 === "pygmy") {
			        var q4 = 1;
				document.getElementById("o4").style.display = "inline-block";
			    } else {
			        var q4 = 0;
				document.getElementById("x4").style.display = "inline-block";
			    }
			}

			// Test Question 5 Answer
			if (typeof($scope.user.answer5) !== "string") {
			    alert("Argument must be a string");
			} else if ($scope.user.answer5 === "london") {
			    var q5 = 1;
				document.getElementById("o5").style.display = "inline-block";
			} else {
			    var q5 = 0;
				document.getElementById("x5").style.display = "inline-block";
			}

			/*   Used for testing outputs
			console.log(q1);
			console.log(q2);
			console.log(q3);
			console.log(q4);
			console.log(q5);
			console.log(score); */

			// Add up score
			score = (q1 + q2 + q3 + q4 + q5);

			// Change modal depending on how well user did
			if (score == 5) {
				document.getElementById("score").style.color = "green";
				$("#quizModalImage").attr('src','images/hippohappy.jpg');
				document.getElementById("quizModalFooter").innerHTML = "Well done! You aced the quiz!";
				document.getElementById("modalScore").innerHTML = "Score = " + score + "/5";
			} else if (score == 4 || score == 3) {
				document.getElementById("score").style.color = "red";
				$("#quizModalImage").attr('src','images/hippo7.jpg');
				document.getElementById("quizModalFooter").innerHTML = "Nice! You got most questions correct.";
				document.getElementById("modalScore").innerHTML = "Score = " + score + "/5";
			} else {
				document.getElementById("score").style.color = "red";
				$("#quizModalImage").attr('src','images/hippoangry.jpg');
				document.getElementById("quizModalFooter").innerHTML = "Hard luck! Why not give it another go?";
				document.getElementById("modalScore").innerHTML = "Score = " + score + "/5";
			}

			// Add score to main page
			document.getElementById("score").innerHTML = score + "/5";

    		// Hide submit button, show reset button
    		document.getElementById("submitButton").style.display = "none";
    		document.getElementById("resetButton").style.display = "block";

    		// Show modal with score and picture
			$('#quizModal').modal('show');

		}

		// Reset form
		$scope.reset = function() {

			// Reset score
			score = -1;
			document.getElementById("score").innerHTML = "";

			// Re-hide all the glyphicons
			for (i=1; i<=5; i++) {
        		document.getElementById("o"+i).style.display = "none";
    		}
    		for (i=1; i<=5; i++) {
        		document.getElementById("x"+i).style.display = "none";
    		}

    		// Clean form
    		var defaultForm = {
				answer1: "",
				answer2: "",
				answer3: "",
				answer4: "",
				answer5: ""
			}
    		$scope.quizForm.$setPristine();
            $scope.user = angular.copy(defaultForm);

    		// Hide reset button, reshow submit button
    		document.getElementById("submitButton").style.display = "block";
    		document.getElementById("resetButton").style.display = "none";

		}

	})
	.controller('LinksController', function($scope) {

	});