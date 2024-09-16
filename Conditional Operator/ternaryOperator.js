
function permission(age){
    let message = age >= 18 ? "we can drive" : "You can't drive";
    console.log(message);
}

permission(18);
permission(10);
permission(50);