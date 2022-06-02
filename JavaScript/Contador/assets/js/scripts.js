var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0
var btnSub = document.getElementById('subtrair');
var btnAdd = document.getElementById('adicionar')

btnSub.addEventListener('click', function(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
})
btnAdd.addEventListener('click', function(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
})
