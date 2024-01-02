import inquirer from "inquirer";
const user = await inquirer.prompt([{
        type: "input",
        name: "userName",
        message: " please enter your name,",
        validate: (ans) => {
            if (!ans) {
                return "Kindly enter your name";
            }
            return true;
        }
    }, {
        type: "number",
        name: "userAge",
        message: "What is your age ?",
    }, {
        type: "list",
        name: "userGender",
        message: "Are you male or female ?",
        choices: ["male", "female"]
    }, {
        type: "list",
        name: "userMaritalStatus",
        message: "Are you married or unmarried ?",
        choices: ["Married", "Unmarried"]
    }, {
        type: "checkbox",
        name: "userhobby",
        message: "What is your favourite games ?",
        choices: ["cricket", "football", "hocky", "boxing", "snooker"],
        default: "nothing"
    }, {
        type: "number",
        name: "userNumber",
        message: "Enter your mobile number ?",
        default: "nothing"
    }, {
        type: "input",
        name: "userEmail",
        message: "Kindly type your email ?",
        default: "nothing"
    }, {
        type: "list",
        name: "userLocation",
        message: "kindly select your country ?",
        choices: ["pakistan", "usa", "canada", "iran"]
    }]);
console.log(user);
