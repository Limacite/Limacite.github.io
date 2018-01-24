function CLC(Chosen){
	//ChangeLineColor
	var link = document.getElementById(Chosen);
	var res = document.getElementsByClassName("Tab");
	for(var i=0;i<res.length;i++){
		res[i].style.backgroundColor = "black";
	}
	link.style.backgroundColor = "gray";
}