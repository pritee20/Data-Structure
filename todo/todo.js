// Create a "close" button and append it to each list item
function createClose(){

	var getNodeList = document.getElementsByTagName('li');
	var i;
	for(i=0;i<getNodeList.length; i++){
		var createSpan =  document.createElement('span');
		var txt =  document.createTextNode("\u00D7");
		createSpan.className = "close";
		createSpan.appendChild(txt);
		getNodeList[i].appendChild(createSpan);
	}

	// Click on a close button to hide the current list item
	var close = document.getElementsByClassName('close');
	for(var i= 0; i < close.length;i++){
		close[i].onclick =  function (){
			var div = this.parentNode;
			div.style.display = "none";
		}
	}
}


// Add a "checked" symbol when clicking on a list item
//ev.target.tagname give me LI so i have to compare with LI not 'li'
var list =  document.querySelector('ul');
list.addEventListener('click', function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.classList.toggle('checked');
	}
}, false);


// Create a new list item when clicking on the "Add" button

function newElement(){
	var li = document.createElement('li');
	var inputVal = document.getElementById('myInput').value;
	var liTxt = document.createTextNode(inputVal);
	li.appendChild(liTxt);
	if(inputVal === ""){
		alert("Type something to add in list!");
	} else{
		document.getElementById('myUL').appendChild(li);
	}
	document.getElementById('myInput').value = "";
	createClose();

}