$(document).ready(function() {
			$('.normal-btn').on('click', function(e) {
				e.preventDefault();
				$('.normal-btn').removeClass('active');
				$(this).addClass('active');
			});
		});