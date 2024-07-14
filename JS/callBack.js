function callBack(){
    console.log("Всередині колбека через 5с");
}
console.log("В коды перед timeout");
setTimeout(callBack, 5000)
console.log("В коді після Timeout");

function onGetPositionSuccess(position){
    console.log("Це виклик onGetPositionSuccess");
    console.log(position);
}
function onGetPositionError(position){
    console.log("Це виклик onGetPositionError");
    console.log(console.error);
}

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess,onGetPositionError)