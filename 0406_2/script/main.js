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
	//롤링배너 왼쪽
	$(".prev").click(function(){
		$(".slider div").eq(0).insertAfter(".slider div:last-child");
	});
	//롤링배너 오른쪽
	$(".next").click(function(){
		$(".slider div").eq(-1).insertBefore(".slider div:first-child");
	});

});//대문


