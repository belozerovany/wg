$(document).ready(function(){
  $('.full_slide').slick({
  	autoplay:true,
	autoplaySpeed:2000,
  });
  $('.main_slide').slick({
  		autoplay:true,
	    autoplaySpeed:3000,
	    dots:true,
  });

	$('#myForm').validate({
	  	rules: {
	  		email: {
	  			required:true,
	  			email:true
	  		},
	  		name: {
	  			required:true,
	  			minlength:3
	  		}
	  	},
	  	messages:{
	  		email: {
	  			required:'Поле email обязательное для заполнения',
	  			email:'Пожалуйста введите корректный email'
	  		},
	  		name: {
	  			required:'Имя обязательное для заполнения',
	  			minlength:'Длина имени должно быть не менее 3-х символов'
	  		}
	  	}
	});
	$('.form_photo__form').validate({
	  	rules: {
	  		code: {
	  			required:true,
	  			minlength:3
	  		}	
	  	},
	  	messages:{
	  		code: {
	  			required:' Поле обязательное для заполнения',
	  			minlength:'Код  содержит не менее 3-х символов'
	  		}
	  	}
	});
});	 