
function checkPassword(success, faild, password){
    password === "pass" ? success() : faild();

}

const user ={
    name: "Soaif",
    loginSuccessfull(){
        console.log(this.name, "Login successful.");
    },
    loginFaild(){
        console.log(this.name, "login faild.");
    }
}

checkPassword(user.loginSuccessfull.bind(user), user.loginFaild.bind(user), "pass");
