window.onload = function() {
    //write your code here
    console.log("Hello Rigo from the console!");
  
    const form = document.getElementById("badlands-form");
    const dangerAlert = document.getElementById("danger-alert");

    form.addEventListener("submit", function(event) {
      event.stopPropagation();
      event.preventDefault();
      if (validateForm()) {
        alert("form submitted sucessfully!");
        form.reset();
        dangerAlert.style.display = "none"; //HIDE DANGER ALERT
      } else { 
        dangerAlert.style.display = "block"; //SHOW DANGER ALERT
        }

    });
  
    function validateForm() {
      const name = document.getElementById("full-name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email-address").value;
      const campers = document.getElementById("campers").value;
      const space = document.getElementById("space").value;
      const leader = document.getElementById("leader").value;
      const arrivalDonation = document.getElementById("arrivalDonation");
      const selectedOption = arrivalDonation.options[arrivalDonation.selectedIndex].value
      const early = document.getElementById("early").value;
      const whyTextArea = document.getElementById("why");
      const why = whyTextArea.value;
      const formFields = ["full-name","phone","email-address","campers","space","leader","arrivalDonation","early","why"];
      const isAllFieldsFilled = formFields.every(fieldId => {
        const fieldValue = document.getElementById(fieldId).value.trim();
        return fieldValue !== "";

      });

      
  
      if (name.trim() === "") {
        alert("Please enter your name");
        return false;
      }
  
      if (phone.trim() === "") {
        alert("Please enter your phone number");
        return false;
      } else if (!isValidEmail(email)) {
        alert("please enter a valid email address.");
        return false;
      }
  
      if (campers.trim() === "") {
        alert("please enter in 'Names of campers in your Dwelling'");
        return false;
      }
      if (space.trim() === "") {
        alert("please enter in 'Your Space Requirement'");
        return false;
      }
      if (leader.trim() === "") {
        alert("please enter if 'Would you like to sign up as a leader'");
        return false;
      }
      if (selectedOption === "" || selectedOption === "Pick a Option" ) {
        alert("please select a donation option'");
        return false;
      }
      if (early.trim() === "") {
        alert("please let us know if you will be arriving early or not'");
        return false;
      }
      if (why.trim() === "") {
        alert("Please enter why you want to go.");
        return false;
      }
      
      const wordCount = why.split(/\s+/).filter(function (word) {
          return word.length > 0;
      }).length;
      
      if (wordCount < 10) {
          alert("Please enter more than 10 words in the 'Why do you want to go?' field.");
          return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  };


// function showAlert() {
//     alert ("This works")
// }

// function showAnotherAlert() {
//     alert ("This also works")
// }

// // EVERY VALIDATOR NEEDS TO RETURN TRUE OR FALSE
// function startsWithNine(str) {
//     return str.charAt(0) === '9';
// }

// const form = document.querySelector("#badlands-form");

// function sendData() {
//     // Associate the FormData object with the form element
//     const formData = new FormData(form);

//     for (const pair of formData.entries()) {
//         console.log(`${pair[0]}, ${pair[1]}`);
//       }

//     //validate them

//     if (formData.has("phone")) {
//         const phoneVal = formData.get("phone")
//         console.log(phoneVal)
//         if (startsWithNine(phoneVal)) {
//             console.log("Valid Phone")
//         } else {
//             console.log("Not Valid Phone")
//         }
//     }


// }

// async function asyncSendData() {

//   // Associate the FormData object with the form element
//   const formData = new FormData(form);
//   console.log(formData)

//   try {
//     const response = await fetch("https://example.org/post", {
//       method: "POST",
//       // Set the FormData instance as the request body
//       body: formData,
//     });
//     console.log(await response.json());
//   } catch (e) {
//     console.error(e);
//   }
// }

// document.getElementByID("submitBtn").onclick(thunderEffect());

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
