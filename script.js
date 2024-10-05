const textInput = document.getElementById("text-input");
const resultOutput = document.getElementById("result");
const form = document.getElementById("palindrome-form");
const test = document.getElementById("test");

function cleanInput(str) {
    const regex = /[\p{P}_\s]/ug;
    return str.replace(regex, '');
};

function invalidInput() {
alert("Please input a value");
};

function isPalindrome(word) {
    const cleanWord = cleanInput(word);
    const lower = cleanWord.toLowerCase();
    const arr = lower.split("");
    const revArr = arr.toReversed();
    const revWord = revArr.join("");
    if (lower === revWord) {
        resultOutput.innerText = `${word} is a palindrome`;
    } else {
        resultOutput.innerText = `${word} is not a palindrome`;
    }

};

function check(e) {
    e.preventDefault();
    !textInput.value ? invalidInput() : isPalindrome(textInput.value);
    form.reset();
}

form.addEventListener("submit", check);

  