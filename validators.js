
function showAlert() {
    alert ("This works")
}

function showAnotherAlert() {
    alert ("This also works")
}

// EVERY VALIDATOR NEEDS TO RETURN TRUE OR FALSE
function startsWithNine(str) {
    return str.charAt(0) === '9';
}

const form = document.querySelector("#badlands-form");

function sendData() {
    // Associate the FormData object with the form element
    const formData = new FormData(form);

    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

    //validate them

    if (formData.has("phone")) {
        const phoneVal = formData.get("phone")
        console.log(phoneVal)
        if (startsWithNine(phoneVal)) {
            console.log("Valid Phone")
        } else {
            console.log("Not Valid Phone")
        }
    }


}

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
