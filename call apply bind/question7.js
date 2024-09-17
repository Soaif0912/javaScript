
// partial application for login function

function checkPassword(ok, fail, password){
    password === "pass" ? ok() : fail();
}

const user ={
    name: "soaif",

    login(status){
        console.log(this.name, status? "login successful" : "login faild");
    }
}

checkPassword(user.login.bind(user, true), user.login.bind(user, false), "pass");

