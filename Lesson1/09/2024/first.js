// 1. Luua array numbritega ja leida spetsiifilise numbri index

// 2. Funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function addNumbersFn(num1, num2) {
    return num1 + num2;
}

// 3. Ümber kirjutada arrow funktsiooniks
const addNumbersArrowFn = (num1,num2) => {
    return num1 + num2
};

console.log(addNumbersArrowFn(1, 2));

// 4. Ümber kirjutada shorthand arrow funktsiooniks

const addNumbersArrowFnShort = (num1, num2) => num1 + num2;

console.log(addNumbersArrowFnShort(1, 2));

// 5. Luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:

function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    };
}
console.log(addNumbersNested(3)(4));

// 6. Ülesanne: Looge samast funktsioonist arrowfunktsioon
const adddNumbersNestedArrow = (num1) => (num2) => num1 
 num2;

// 7. AF printida "Hello (nimi)" ja kasutada string literals