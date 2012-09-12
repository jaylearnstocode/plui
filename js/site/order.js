//Show form section step by step
$(function(){
	
	$(".order-form > section").live("click", function(){
		var $this = $(this);		
		var $next = $this.next("section");
		if ($next && $next.hasClass("none")) {
			$next.fadeIn(400, function(){$(this).removeClass("none")});
		}
	});
	
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
	
});


//Fix side bar when scoll
$(function(){
	//Fix side bar when scoll
	$('.order > .bd > .side').scrollToFixed();
});

//Show user profile when hover
$(function(){
	$(".user.with-profile").popover({
		delay: {show: 0, hide: 1000},
		trigger: 'hover',
		title: function(){
			$me = $(this);
			var name = $me.data("name");
			return name;
		},
		content: function(){
			$me = $(this);
			var email = $me.data("email"),
			picture = $me.data("picture"),
			phone = $me.data("phone");
			var content = '<img width="36" height="36" src="' + picture + '" class="pull-left spaced" />' + ' <span>Phone: '+phone+'</span> <br />' + ' <span>Email: '+email+'</span>' ;
			return content;
		},
		customClass: "large user-profile"
	});
})

//Add ship to
$(function(){
	var shipToForm = $(".order-form-ship");
	$(".shipto-add").bind("click", function(){
		$(".order-form-ship").first().before(shipToForm.clone().hide(0).fadeIn(300));
	});
})

//Save
$(".order-form > .order-form-section > .save").live("click", function(){
	var $me = $(this),
		$section = $me.parent();
	$section.addClass("readonly");
	$section.find("input, textarea").attr("disabled", "disabled");
});

$(".order-form > .order-form-section > .edit").live("click", function(){
	var $me = $(this),
		$section = $me.parent();
	$section.removeClass("readonly");
	$section.find("input, textarea").removeAttr("disabled");
});


    //Save
    $(".order-form-section").live("click", function(){
        //Save first
        var $all = $(".order-form-section");
        $all.addClass("readonly");
        $all.find("input, textarea").attr("disabled", "disabled");
        
        //Edit this
        var $me = $(this);
        
        $me.removeClass("readonly");
        $me.find("input, textarea").removeAttr("disabled");
    });
    
// $(".order-form > .order-form-section input:disabled").bind("click", function(){
	// alert(0);
	// var $me = $(this),
		// $section = $me.parents(".order-form-section")[0];
	// $section.removeClass("readonly");
	// $section.find("input, textarea").removeAttr("disabled");
// });