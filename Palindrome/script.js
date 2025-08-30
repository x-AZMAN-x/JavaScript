document.getElementById("check").addEventListener("click", () => {
    const input = document.getElementById("input").value.trim();
    const result = document.getElementById("result");
    if (input){
        const norm = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        const rev = norm.split("").reverse().join("");
        if (norm === rev){
            result.textContent = `"${input}" Is A Palindrome.`
            result.style.color = "green";
        }
        else{
            result.textContent = `"${input}" Is Not A Palindrome.`
            result.style.color = "red";
        }
    }
    else{
        result.textContent = `"Please Enter Some Text.`
        result.style.color = "yellow";
    }
})