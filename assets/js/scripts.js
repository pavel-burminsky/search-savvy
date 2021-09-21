(function($){
	$(document).ready(function(){
		// filter dropdowns
		$('.filter-dropdown-inner').click(function(){
			if($(this).closest('.filter-dropdown').find('.dropdown-body').is(':visible')){
				$('.dropdown-body').hide();
				return;
			}
			$('.dropdown-body').hide();
			$(this).closest('.filter-dropdown').find('.dropdown-body').show();
		});
		// detailed score dashboard
		$('.score-bar > span').each(function(){
			var w = $(this).data('w');
			$(this).css('width', w + '%');
		});
		// checkboxes click
		$('.checkboxes li').click(function(){
			$(this).toggleClass('selected');
		});
		// single checkbox
		$('.inner-checkbox').click(function(){
			$(this).toggleClass('checked');
		});
		// close elements if clicked outside
		$('body').click(function(e){
			if(!$(e.target).closest('.filter-dropdown').length){
				$('.dropdown-body').hide();
			}
		});
		// btn toggle
		$('.btn-toggle').click(function(){
			$(this).toggleClass('on');
		});
		// process rating
		function process_rating(){
			$('.rating').each(function(){
				var rating = $(this).data('rating'),
					output = '',
					float = parseFloat(rating);
				if(rating){
					output += '<div class="rating-inner">';
					output += '<div class="rating-placeholder">';
					output += '<span></span>';
					output += '<span></span>';
					output += '<span></span>';
					output += '<span></span>';
					output += '<span></span>';
					output += '</div>';
					output += '<div class="rating-stars">';
					for(var i = 5; i > 0; i--){
						var width = 100;
						float--;
						if(float < 0){
							float = ++float * 100;
							width = Math.ceil(float);
						}
						output += '<span><span style="width: '+width+'%;"></span></span>';
						if(width < 100){
							break;
						}
					}
					output += '</div>';
					output += '</div>';
					output += rating;
					$(this).append(output);
				}
			});
		}
		process_rating();
		// add the big 5 question
		$('.questions-heading .blue-btn').click(function(){
			$(this).closest('.questions-heading').hide();
			$('.add-new-question').show();
		});
		$('.add-new-question .blue-btn, .add-new-question .cancel').click(function(){
			$('.questions-heading').show();
			$('.add-new-question').hide();
		});
		// rate field
		$('.rate-field').each(function(){
			var name = $(this).data('name'),
				count = $(this).data('type') == 'short' ? 3 : 5,
				html = '<div class="buttons">';
			for(var i = 1; i <= count; i++){
				html += '<span data-value="'+i+'" class="btn"><span></span></span>';
			}
			html += '</div>';
			$(this).append(html);
		});
		// review navigation
		$('.review-next').click(function(){
			$('.review-wrap .step').removeClass('active');
			$('.review-wrap .step[data-step="2"]').addClass('active');
		});
		$('.review-back').click(function(){
			$('.review-wrap .step').removeClass('active');
			$('.review-wrap .step[data-step="1"]').addClass('active');
		});
		// dashboard chart
		if($('.nps-chart').length){
			var ctx = document.getElementById('nps-pie');
			var myChart = new Chart(ctx, {
				type: 'pie',
				options: {
					borderWidth: 0
				},
				data: {
					datasets: [{
						label: 'My First Dataset',
						data: [20, 40, 300],
						backgroundColor: [
							'#F52B74',
							'#F8CF40',
							'#2684FE'
						],
					}]
				}
			});
		}
	});
})(jQuery);