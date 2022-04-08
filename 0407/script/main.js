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


$(document).ready(function(){
	//$("#container").addClass("start");
	$("nav li").click(function(){
		//$("#container").css("max-width", "100%")
		//var id=$(this).attr("data-rol");    
		$("nav li").removeClass("on");    
		$(this).addClass("on");    
		//$(".content").removeClass("prev this next");     
		//클릭 시 가지고 있던 클래스를 모두 지운다    
		//$("#" + id).addClass("this").prevAll().addClass("prev");    
		//클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다    
		//$("#" + id).nextAll().addClass("next");    
		//클릭한 메뉴와 매칭 되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다     
	});
	//로고 클릭 시
	$(".logo").click(function(){
		$("nav li").removeClass("on");
		//$(".content").removeClass("prev this next");
		//$("#container").css("max-width", "1200px");
	});
});


