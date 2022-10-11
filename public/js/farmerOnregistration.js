// const form = document . <here we put the name of the form element> . <here we put the names of the field elements in the form>
// example --> const email = document.registration.email
const doseAntibac = document.patientAdmission.doseAntibac;
const doseAntima = document.patientAdmission.doseAntima;
const frequencyAntibac = document.patientAdmission.frequencyAntibac;
const frequencyAntima = document.patientAdmission.frequencyAntima;
const other = document.patientAdmission.other;
const ebolaExperimentalBtn = document.patientAdmission.eet;
const completedBy = document.patientAdmission.completed;
const submitBtn = document.patientAdmission.submit;
const firstName = document.patientAdmission.firstname;
const lastName = document.patientAdmission.lastname;
const telephone = document.patientAdmission.telephone;
const gender = document.patientAdmission.gender
const email = document.patientAdmission.email
const regDate = document.patientAdmission.regDate
const bleeding = document.patientAdmission.bleeding;
const indicateIfYes = document.getElementById("ifYes");

const min = 4;
const max = 27;

// check names
const checkFirstName = () => {
    let alphabet = /^[A-Za-z]+$/

    // check if empty
    if (firstName.value === "") {
        firstName.style.border = "2px solid red"
        firstName.style.background = "#f4c2c7";
        firstName.focus()
    }

    // check min-max
    if (firstName.value.length >= min && firstName.value.length <= max) {
        firstName.style.border = "2px solid green"
        firstName.style.background = "#8ef4a6";
        lastName.focus()
    } else {
        firstName.style.border = "2px solid red"
        firstName.focus()
    }

    // check if only alphabet used
    if (firstName.value.match(alphabet)) {
        firstName.style.border = "2px solid green"
        firstName.style.background = "#8ef4a6";
        lastName.focus()
    } else {
        firstName.style.border = "2px solid red"
        firstName.style.background = "#f4c2c7";
        firstName.focus()
    }
}

const checkLastName = () => {
    let alphabet = /^[A-Za-z]+$/

    // check if empty
    if (lastName.value === "") {
        lastName.style.border = "2px solid red"
        lastName.style.background = "#f4c2c7";
        lastName.focus()
    }

    // check min-max
    if (lastName.value.length >= min && lastName.value.length <= max) {
        lastName.style.border = "2px solid green"
        lastName.style.background = "#8ef4a6";
        telephone.focus()
    } else {
        lastName.style.border = "2px solid red"
        lastName.style.background = "#f4c2c7";
        lastName.focus()
    }

    // check if only alphabet used
    if (lastName.value.match(alphabet)) {
        lastName.style.border = "2px solid green"
        lastName.style.background = "#8ef4a6";
        telephone.focus()
    } else {
        lastName.style.border = "2px solid red"
        lastName.style.background = "#f4c2c7";
        lastName.focus()
    }
}

// validate phone number --> alphanumeric
const checkTelephone = () => {
    let mobileRegex = /^([\+])*([0-9])+$/
    let min = 13

    // check if empty
    if (telephone.value === "") {
        telephone.style.border = '2px solid red'
        telephone.style.background = "#f4c2c7";
        telephone.focus()
    }

    // check input length
    if (telephone.value.length != min) {
        telephone.style.border = '2px solid red'
        telephone.style.background = "#f4c2c7";
        telephone.focus()
    }

    // validate input
    if (telephone.value.match(mobileRegex)) {
        telephone.style.border = '2px solid green'
        telephone.style.background = "#8ef4a6";
        gender.focus()
    } else {
        telephone.style.border = '2px solid red'
        telephone.style.background = "#f4c2c7";
        telephone.focus()
    }
}

// validate gender
const checkGender = () => {
    let alphabet = /^[A-Za-z]+$/

    // check if empty
    if (gender.value === "") {
        gender.style.border = '2px solid red'
        gender.style.background = "#f4c2c7";
        gender.focus()
    }

    // check if alphabet and restrict to male - female - other
    if (gender.value === 'female' && gender.value.match(alphabet)) {
        gender.style.border = '2px solid green'
        gender.style.background = "#8ef4a6";
        email.focus()
    } else if (gender.value === 'male' && gender.value.match(alphabet)) {
        gender.style.border = '2px solid green'
        gender.style.background = "#8ef4a6";
        email.focus()
    } else if (gender.value === 'other' && gender.value.match(alphabet)) {
        gender.style.border = '2px solid green'
        gender.style.background = "#8ef4a6";
        email.focus()
    } else {
        gender.style.border = '2px solid red'
        gender.style.background = "#f4c2c7";
        gender.focus()
    }
}

// validate email
const checkEmail = () => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // check if empty
    if (email.value === '') {
        email.style.border = '2px solid red'
        email.style.background = "#f4c2c7";
        email.focus()
    }

    // validate email
    if (email.value.match(emailRegex)) {
        email.style.border = '2px solid green'
        email.style.background = "#8ef4a6";
        date.focus()
    } else {
        email.style.border = '2px solid red'
        email.style.background = "#f4c2c7";
        email.focus()
    }
}

// validate date
const checkDate = () => {
    let dateRegex = /^(0?[1-31])|[\/\-]|(0?[1-12])[\/\-]\d{4}$/

    // check if empty
    if (regDate.value === "") {
        regDate.style.border = '2px solid red'
        regDate.style.background = "#f4c2c7";
        regDate.focus()
    }

    // valiate registration date
    if (regDate.value.match(dateRegex)) {
        regDate.style.border = '2px solid green'
        regDate.style.background = "#8ef4a6";
        bleeding.focus()
    } else {
        regDate.style.border = '2px solid red'
        regDate.style.background = "#f4c2c7";
        regDate.focus()
    }
}

// validate dose
const checkDoseAntibac = () => {
    let alphanumeric = /^[0-9a-zA-Z_ ]+$/;

    if (doseAntibac.value === "") {
        doseAntibac.style.border = "2px solid red";
        doseAntibac.style.background = "#f4c2c7";
        doseAntibac.focus();
    }

    if (doseAntibac.value.match(alphanumeric)) {
        doseAntibac.style.border = "2px solid #28a745";
        doseAntibac.style.background = "#8ef4a6";
    } else {
        doseAntibac.style.border = "2px solid red";
        doseAntibac.style.background = "#f4c2c7";
        doseAntibac.focus();
    }
};

// validate frequency
const checkFrequencyAntibac = () => {
    let alphanumeric = /^[0-9a-zA-Z_ ]+$/;

    if (frequencyAntibac.value === "") {
        frequencyAntibac.style.border = "2px solid red";
        frequencyAntibac.style.background = "#f4c2c7";
        frequencyAntibac.focus();
    }

    if (frequencyAntibac.value.match(alphanumeric)) {
        frequencyAntibac.style.border = "2px solid #28a745";
        frequencyAntibac.style.background = "#8ef4a6";
    } else {
        frequencyAntibac.style.border = "2px solid red";
        frequencyAntibac.style.background = "#f4c2c7";
        frequencyAntibac.focus();
    }
};

// validate other
const checkOther = () => {
    let alphabet = /^[A-Za-z_ ]+$/;

    if (other.value === "") {
        other.style.border = "2px solid red";
        other.style.background = "#f4c2c7";
        other.focus();
    }

    if (other.value.match(alphabet)) {
        other.style.border = "2px solid #28a745";
        other.style.background = "#8ef4a6";
    } else {
        other.style.border = "2px solid red";
        other.style.background = "#f4c2c7";
        other.focus();
    }
};

// validate experimental treatment
const displayOptions = () => {
    indicateIfYes.classList.remove("hidden");
}
const removeDisplayOptions = () => {
    indicateIfYes.classList.add("hidden");
}

// validate form completed by
const checkCompletedBy = () => {
    let alphabet = /^[A-Za-z _ ]+$/;
    let min = 3,
        max = 25;

    if (completedBy.value === "") {
        completedBy.style.border = "2px solid red";
        completedBy.style.background = "#f4c2c7";
        completedBy.focus();
    }

    if (completedBy.value.match(alphabet)) {
        completedBy.style.border = "2px solid #28a745";
        completedBy.style.background = "#8ef4a6";
    } else {
        completedBy.style.border = "2px solid red";
        completedBy.style.background = "#f4c2c7";
        completedBy.focus();
    }

    if (completedBy.value.length >= min && completedBy.value.length <= max) {
        completedBy.style.border = "2px solid #28a745";
        completedBy.style.background = "#8ef4a6";
    } else {
        completedBy.style.border = "2px solid red";
        completedBy.style.background = "#f4c2c7";
        completedBy.focus();
    }
};

// let mobileRegex = /^([\+])*([0-9])+$/
// let numbers = /^[0-9]+$/
// let alphanumeric = /^[0-9a-zA-Z]+$/
// let alphabet = /^[A-Za-z]+$/
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
