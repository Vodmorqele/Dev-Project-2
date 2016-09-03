/**

* Purpose: PHP Solution

* Last updated: 03/09/2016
*/




var time = 60;
var minus = 1
var done = 0;
var apply = 0;
var loadfinish = 55;
var x = event.keyCode;




	
}



function ageauto() {
	var year = document.getElementById("Date").value.substr(6,4);
	var yearcurrent = 2016;
	var Age = yearcurrent - year;
	document.getElementById("Age").value = Age;
	if (document.getElementById("Date").value != "") 
	{
		document.getElementById("dob_error").innerHTML="";
	}
}
//VIC = 3 OR 8, NSW = 1 OR 2 ,QLD = 4 OR 9 ,NT = 0 ,WA = 6 ,SA=5 ,TAS=7 ,ACT= 0
function autostate() {
	var pcode = document.getElementById("PostCode").value.substr(0,1);
	
	if (document.getElementById("PostCode").value != "")
	{
		document.getElementById("pcode_error").innerHTML="";
	}
	if (pcode == 3 || pcode == 8)
	{
		document.getElementById("State").value = "VIC";
	}
	else if (pcode == 1 || pcode == 2)
	{
		document.getElementById("State").value = "NSW";
	}
	else if (pcode == 4 || pcode == 9)
	{
		document.getElementById("State").value = "QLD";
	}
	else if (pcode == 0)
	{
		document.getElementById("State").value = "NT";
	}
	else if (pcode == 6)
	{
		document.getElementById("State").value = "WA";
	}
	else if (pcode == 5)
	{
		document.getElementById("State").value = "TAS";
	}
	else if (pcode == 1)
	{
		document.getElementById("State").value = "ACT";
	}
}
function fcheck () {
	if (document.getElementById("FirstName").value != "") 
	{
		document.getElementById("fname_error").innerHTML="";
	}
}
function lcheck () {
	if (document.getElementById("LastName").value != "") 
	{
		document.getElementById("lname_error").innerHTML="";
	}
}
function echeck () {
	if (document.getElementById("EmailAddress").value != "") 
	{
		document.getElementById("email_error").innerHTML="";
	}
}
function validation () {
	var year = document.getElementById("Date").value.substr(6,4);
	var yearcurrent = 2016;
	var Age = yearcurrent - year;
	var Otherchecked = document.getElementById("Otherskills").checked;
	var OtherTB = document.getElementById("OtherSkillsTB").value;
	if (document.getElementById("Date").value == "")
	{
		document.getElementById("dob_error").innerHTML="You need to input a date of birth!";
		return false;
	}
	else if (OtherTB == "" && Otherchecked == true)
	{
		alert('Please list your other skills as you have checked the other skils checkbox');
		return false;
	}
	else if (document.getElementById("FirstName").value == "")
	{
		document.getElementById("fname_error").innerHTML="You need to input a first name!";
		return false;
	}
	else if (document.getElementById("LastName").value == "")
	{
		document.getElementById("lname_error").innerHTML="You need to input a last name!";
		return false;
	}
	else if (Age <= 14 || Age >= 81  )
	{
		alert('You are not between 15 and 80');
		return false;
	}
	else if (document.getElementById("PostCode").value == "")
	{
		document.getElementById("pcode_error").innerHTML="You need to input a post code!";
		return false;
	}
	else if (document.getElementById("EmailAddress").value == "")
	{
		document.getElementById("email_error").innerHTML="You need to input a email address!";
		return false;
	}
	else
	{
		return true;
	}
}


