function calculateAge() {
    // Get the input value from the date input
    var dobInput = document.getElementById("dob").value;

    // Create a Date object from the input value
    var dob = new Date(dobInput);

    // Get the current date
    var currentDate = new Date();

    // Calculate the age
    var age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your age is: " + age + " years";
}
