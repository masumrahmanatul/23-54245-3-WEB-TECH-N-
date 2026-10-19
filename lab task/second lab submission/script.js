function showMembershipInfo(name, age, email, phone, membership) {
	if(membership == "Basic") {
		membership = 500;
	}
	else if(membership == "Silver") {
		membership = 1000;
	}
	else {
		membership = 1500;
	}
	
	document.getElementById("output").innerHTML = 
	"<h2>Membership Information</h2>"+
	"Name: "+ name + "<br>" +
	"Age: "+ age + "<br>" +
	"Email: "+ email + "<br>" +
	"Phone: "+ phone + "<br>" +
	"Category: "+ (age >= 13 ? "Regular" : "Junior")+ "<br><br>"+
	"Applicable fee: "+ membership + "<br>";
}



document.addEventListener("submit", function (event) {
	event.preventDefault();
	let name = document.getElementById("name").value;
	let age = document.getElementById("age").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let membership = document.querySelector('input[name=membership]:checked').value;
	
	showMembershipInfo(name, age, email, phone, membership);
});