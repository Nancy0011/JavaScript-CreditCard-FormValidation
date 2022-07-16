function validateForm()
{
var firstname=document.getElementById("firstname");
var lastname=document.getElementById("lastname");
var postcode=document.getElementById("postcode");
var email=document.getElementById("email");
var creditcard=document.getElementById("creditcard");
var cardnumber=document.getElementById("cardnumber");
var ccv=document.getElementById("ccv");
var exYear=document.getElementById("exYear");
var exMonth=document.getElementById("exMonth").value;


var firstnameError = document.getElementById("firstnameError");
var lastnameError = document.getElementById("lastnameError");
var postcodeError=document.getElementById("postcodeError");
var emailError=document.getElementById("emailError");
var cardnumberError=document.getElementById("cardnumberError");
var ccvError=document.getElementById("ccvError");


var date = new Date();
var month = date.getMonth()+1;
var year = date.getFullYear();


//example that will not clear the text field entries when incorrect
	if (firstname.value=="")
	{
		/* alert("Please enter your first name"); */
		firstnameError.style.color="red"
		firstnameError.innerHTML = "First Name required,Please enter your first name";
		firstname.focus();
		return false;
	}
		firstnameError.innerHTML = ""; //clear innerHTML error
	
	if (lastname.value==""){
		/* alert("Please enter your last name"); */
		lastnameError.style.color="red"
		lastnameError.innerHTML = "Last Name required,Please enter your first name";
		lastname.focus();
		return false;
	}
		lastnameError.innerHTML = ""; //clear innerHTML error
	if (postcode.value.length!=4  || isNaN(postcode.value)){
		/* alert("Please enter 4 numbers for your postcode"); */
		postcodeError.style.color="red"
		postcodeError.innerHTML = "Please enter 4 numbers for your postcode";
		postcode.focus();
		return false;
	}
		postcodeError.innerHTML = ""; //clear innerHTML error
	if (email.value.length<8 || email.value.indexOf("@",".")== -1) {
		/* alert("Please enter your email min 8 characters and include @ and . symbol"); */
		emailError.style.color="red"
		emailError.innerHTML = "Please enter your email min 8 characters";
		email.focus();
		return false;
	}
		emailError.innerHTML = ""; //clear innerHTML error
	if (creditcard.value == 0 ){
		alert("Please select a card type");
		creditcard.style.color="red";
		return false;
	}	
		creditcard.style.color="black";
		
	
	if (cardnumber.value.length!=16  || isNaN(cardnumber.value)){
		/* alert("Please enter 16 numbers for your creditcard number"); */
		cardnumberError.style.color="red"
		cardnumberError.innerHTML = "Please enter 16 numbers for your creditcard number";
		cardnumber.focus();
		return false;
	}
		cardnumberError.innerHTML = ""; //clear innerHTML error
	if (ccv.value.length!=3  || isNaN(postcode.value)){
		/* alert("Please enter 3 numbers for your ccv"); */
		ccvError.style.color="red"
		ccvError.innerHTML = "Please enter 3 numbers for your ccv";
		ccv.focus();
		return false;
	}
		ccvError.innerHTML = ""; //clear innerHTML error
		

	
		if (exMonth.selectedIndex === 0){
            alert("Please select the month");
            return false;
        }
        if (exYear.selectedIndex === 0){
            alert("Please select the year");
            return false;
        }
        if (year> exYear || (year === exYear && month >= exMonth)){
            alert("The expiry date is before today's date. Please select a valid expiry date");
            return false;
        }
			
	alert("Thank you for your submission");
	return true;

}




/* function is called if input is not valid change the background of text field on focus with lightyellow	 */
function changeBgd(textField)
{
	textField.style.background="lightyellow";
}
/* function is called while input is validate reset the background of text field on focus with lightgrey	 */
function resetBgd(textField)
{
	textField.style.background="lightgrey";
}
function changeBgd(inputField)
{
	inputField.style.background="lightBlue";
}
function resetBgd(inputField)
{
	inputField.style.background="white";
}

function otherWebsites() {
var choice=0;
choice = parseInt(prompt("Which website do you want?\n 1: google\n 2: tafesa\n 3: learn\n 4: satac","1"));
//switch 
switch (choice) {
case 1:
window.open('http://google.com','_blank','height=800,width=800,top=300,left=300');
break;
case 2:
window.open('http://tafesa.edu.au','_blank','height=800,width=800,top=300,left=300');
break;
case 3:
window.open('http://learn.tafesa.edu.au','lank','height=800,width=800,top=300,left=300');
  
break;
case 4:
window.open('http://satac.edu.au','_blank','height=800,width=800,top=300,left=300');
alert=("Please enter 1 & 4,Thanks!")
break;

default:
alert=("Please enter 1 & 4,Thanks!");
break;
}
// end switch
return true;
}


function help() {
	
  var myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write("How to fill out the form correctly.</p> ");
  myWindow.document.write("<p>Required fields cannot be left blank</p> ");
  myWindow.document.write("<p>The email address must be a minimum of 5 characters and contain an '@' and a '.' (dot)</p> ");
  myWindow.document.write("<p>The postcode must contain four numbers</p>");
  myWindow.document.write("<p>The credit card month and year must be valid</p>");
  myWindow.document.write("<p>The CCV must be entered and must be a number</p>");

}
