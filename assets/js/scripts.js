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
	});
})(jQuery);