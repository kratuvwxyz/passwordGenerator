const
	range = document.getElementById('range'),
	rangeV = document.getElementById('rangeV'),
	setValue = ()=>{
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
// numbers
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// lowercase
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'
];
// uppercase
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X',
    'Y', 'Z'
];
// symbols
let symbols = ['@', '#', '$', '%', '@', '#', '$', '%'];
// password you need to get
let password = [];
let passwords = [];
let pass = [];

// document get ready function key turn on
$(document).ready(function () {
    // reset function
    function clean() {
        aaa = "";
        bbb = "";
        ccc = "";
        ddd = "";
        pass = [];
        password = [];
        passwords = [];
    }

    $(document).on('click', '#generate', function () {
        clean();
        let aaa = $('#gridCheck1:checked').val();
        let bbb = $('#gridCheck2:checked').val();
        let ccc = $('#gridCheck3:checked').val();
        let ddd = $('#gridCheck4:checked').val();
        let eee = $('#range').val();
        console.log(eee);
        // if none of the checkboxed clicked
        if (aaa !== "on" && bbb !== "on" && ccc !== "on" && ddd !== "on") {
            pass = numbers;
        }
        // if only numbers clicked
        if (aaa === "on") {
            pass = pass.concat(numbers);
        }
        // if only lowercase clicked
        if (bbb === "on") {
            pass = pass.concat(lowerCase);
        }
        // if only uppercase clicked
        if (ccc === "on") {
            pass = pass.concat(upperCase);
        }
        // if only symbols clicked
        if (ddd === "on") {
            pass = pass.concat(symbols);
        }
        // get all passwords
        passwords = pass;
        console.log(passwords);
        // for loop to generate random number "eee" times
        for (let i = 0; i < eee; i++) {
            let a = Math.floor(Math.random() * passwords.length);
            let b = passwords[a];
            // passwords.splice(a, 1)[0];
            password.push(b);
        }
        password = password.join("");
        console.log(password);

        $("#myPassword").text(password);

    });

});