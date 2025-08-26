const screen=document.getElementById("screen");
const operators=["+","-","*","/"];
window.addEventListener('keydown',function(event){
    const key=event.key;
    if (key >= '0' && key <= '9' || operators.includes(key) || key === '.') {
        addToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        equals();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearScreen();
    }
});
function addToDisplay(n){
    if (operators.includes(n) && operators.includes(screen.value.slice(-1))){
        screen.value=screen.value.slice(0,-1)+n;
    }
    else if (screen.value==="Error"){
        screen.value=n;
    }
    else{
    screen.value += n;
    }
}
function equals(){
    try{
    const calculate= new Function('return '+screen.value);
    screen.value=calculate()
    }
    catch(error){
        screen.value="Error";
    }
}
function clearScreen(){
    screen.value='';
}