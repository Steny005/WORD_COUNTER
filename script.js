const textarea = document.getElementById('input');
const counter = document.getElementById('count');
const charcounter = document.getElementById('charactercount');

function countword(input){
    const inputword=textarea.value.trim();

    charcounter.textContent = inputword.length;

    if (inputword ===''){
        counter.textContent = '0';
        return
}

const word= inputword.split(/\s+/);
counter.textContent= word.length;
}

