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
					$('#hippomodal').modal('show');   
				});		
		});
	})
	.controller('QuizController', function($scope) {

	})
	.controller('LinksController', function($scope) {

	});