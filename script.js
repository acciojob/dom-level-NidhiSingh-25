//your JS code here. If required.
let element=ducument.getElementById("Level");
let n=0;
while(element)
	{
		n++;
		element=element.parentElement;
	}

console.log("The level of the element is: " n);