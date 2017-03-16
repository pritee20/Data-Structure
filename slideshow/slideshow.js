//automatic slideshow
/*var slideIndex = 0;
showSlides();
function showSlides(){
	var slide =  document.getElementsByClassName('mySlides');
	var i;
	for(i = 0; i < slide.length; i++){
		slide[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slide.length){
		slideIndex = 1;
	}
	slide[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 3000);
}*/

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
	showSlides(slideIndex += n);
}
function currentSlides(n){
	showSlides(slideIndex = n);

}
function showSlides(n){
	var slide =  document.getElementsByClassName('mySlides');
	var i;
	var dots = document.getElementsByClassName('dot');
	if(n > slide.length){
		slideIndex = 1;
	} 
	if (n <1){
		slideIndex = slide.length;
	}
	for(i = 0; i<slide.length;i++){
		slide[i].style.display = "none";
	}
	for(i = 0; i< dots.length;i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slide[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";


}
autoSlides();
function autoSlides(){
	var slide =  document.getElementsByClassName('mySlides');
	var i;
	for(i = 0; i < slide.length; i++){
		slide[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slide.length){
		slideIndex = 1;
	}
	slide[slideIndex-1].style.display = "block";
	setTimeout(autoSlides, 2000);
}




