/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}*/

$(document).ready(function(){ 
	$(".prev").click(function(){
		$(".slider div").eq(0).insertAfter(".slider div:last-child");
	});
	$(".next").click(function(){
		$(".slider div").eq(-1).insertBefore(".slider div:first-child");
	});

});//대문


$(document).ready(function(){
	$("#nav li:not(.logo) a").click(function(){
		$("#nav li:not(.logo) a").removeClass("on");    
		$(this).addClass("on");    
	});
	//로고 클릭 시
	$(".logo").click(function(){
		$("#nav li:not(.logo) a").removeClass("on");

	});
});


