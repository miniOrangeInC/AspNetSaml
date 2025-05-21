function setupPhoneValidation() {
    const phoneInputField = document.querySelector("#phnNumber");
    const errorElement = document.querySelector("#phnError");

    if (!phoneInputField || !errorElement) return;
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            fetch('https://ipapi.co/country/')
                .then(res => res.text())
                .then(callback)
                .catch(() => callback("us"));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.1/js/utils.js",
        preferredCountries: ["us", "gb", "in"],
        separateDialCode: true,
    });

    phoneInputField.addEventListener("input", () => {
        if (iti.isValidNumber()) {
            errorElement.style.display = "none";
            phoneInputField.style.borderColor = "green";
        } else {
            errorElement.style.display = "block";
            errorElement.textContent = "Invalid phone number format";
            phoneInputField.style.borderColor = "red";
        }
    });
}
document.addEventListener("DOMContentLoaded", setupPhoneValidation);