function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Plases fill out your name!");
      return false;
    }
else  {
    alert("Thank you! Your information shall be safley store into our data.")
    return false;
}
}