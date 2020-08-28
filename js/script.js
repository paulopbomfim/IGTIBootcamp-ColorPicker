window.addEventListener('load', () => {
    input()
});

var slider1 = document.querySelector('#slider1');
var slider2 = document.querySelector('#slider2');
var slider3 = document.querySelector('#slider3');

function input(){
    function updateValues(){
        document.querySelector('#text1').value = slider1.value
        document.querySelector('#text2').value = slider2.value
        document.querySelector('#text3').value = slider3.value
        
        var text1 = document.querySelector('#text1').value;
        var text2 = document.querySelector('#text2').value;
        var text3 = document.querySelector('#text3').value;
        
        var colorBox = document.querySelector('#colorBox');
        colorBox.style.backgroundColor = `rgb(${text1},${text2},${text3})`;
    }

    slider1.addEventListener('input', updateValues);
    slider2.addEventListener('input', updateValues);
    slider3.addEventListener('input', updateValues);
    updateValues();
}
