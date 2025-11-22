const textarea = document.getElementById('input');
const counter = document.getElementById('count');
function countword(input){
    const inputword=textarea.value.trim();

    if (inputword ===''){
        counter.textContent = '0';
        return
}

const word= inputword.split(/\s+/);
counter.textContent= word.length;
}

