const form = document.getElementById('reg-form');
const table = document.getElementById('reg-table');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const dob = new Date(this.dob.value);
	const today = new Date();
	const age = today.getFullYear() - dob.getFullYear();

	if (age < 18 || age > 55) {
		alert('You must be between 18 and 55 years old to register.');
		return;
	}

	const row = table.insertRow();
	row.insertCell().textContent = this.name.value;
	row.insertCell().textContent = this.email.value;
	row.insertCell().textContent = this.password.value;
	row.insertCell().textContent = this.dob.value;
	row.insertCell().textContent = this.terms.checked ? 'Yes' : 'No';
	this.reset();
	const data = {
		name: this.name.value,
		email: this.email.value,
		password: this.password.value,
		dob: this.dob.value,
		terms: this.terms.checked,
	};
	localStorage.setItem('registrationData', JSON.stringify(data));
});

window.addEventListener('load', function() {
	const data = JSON.parse(localStorage.getItem('registrationData'));
	if (data) {
		document.getElementById('name').value = data.name;
		document.getElementById('email').value = data.email;
		document.getElementById('password').value = data.password;
		document.getElementById('dob').value = data.dob;
		document.getElementById('terms').checked = data.terms;
	}
	 displayTable();
});
window.onload = (event) => {
    displayTable();
};

