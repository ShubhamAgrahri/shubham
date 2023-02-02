// Armstrong kata


function armstrongRange(start, end) {
    let armstrongNumberList = [];
    if (typeof start === 'number' && typeof end === 'number') {
        if (start <= end) {
            for (let iterator = start; iterator <= end; iterator++) {
                if (isArmstrong(iterator)) {
                    armstrongNumberList.push(iterator)
                }
            }
        } else {
            return "validation failed";
        }
    } else {
        return "validation failed";
    }
    return armstrongNumberList;
}



function isArmstrong(number) {
    let sumOfDigits = 0;
    let copyOfNumber = number;

    while (number > 0) {
        let lastDigit = number % 10;
        sumOfDigits += lastDigit ** 3;
        number = parseInt(number / 10);
    }
    return sumOfDigits === copyOfNumber;
}


function TestNumberforValidArmstrong(inputNumber) {
    if (isArmstrong(inputNumber) === true)
        console.error(" for given armstrong number returning true : Test case Passed" );
    else {
        console.error( "for given ${inputNumber} returning false : Test case failed");
    }
}


function TestNumberforInvalidArmstrong(inputNumber) {
    if (isArmstrong(inputNumber) === false)
        console.log(" for given armstrong number returning false : Test case Passed");
    else {
        console.log( "for given armstrong number returning True : Test case failed");
    }
}
// console.log(testCasesforIsArmstrongFalse(45));



function testValidArmstrongRange(startNumber, endNumber, output) {
    if (JSON.stringify(armstrongRange(startNumber, endNumber)) === JSON.stringify(output)) {
        console.log("This is a valid input Range: Test case passed");
    }
    else {
        console.log("This is  not a valid input Range: Test case failed");
    }
}


function testInvalidArmstrongRange(startNumber, endNumber, output) {

    if (JSON.stringify(armstrongRange(startNumber, endNumber)) !== JSON.stringify(output)) {
        console.log("validation failed : Test case passed");
    }
    else {
        console.log("validation passed: Test case failed")
    }
}


// console.log("****this is for is armstrong function.****");
// testCasesforIsArmstrong(371,true)
// testCasesforIsArmstrong(33,false)
// testCasesforIsArmstrong(407,false)
// testCasesforIsArmstrong(33,true)

// console.log("****this is for input validation function.****");
// let output = [ 0, 1, 153, 370, 371, 407 ];
// testCases(0,999,output);
// testCases(25,1,"validation failed");
// testCases("hello","3","validation failed");
// testCases(undefined,undefined,"validation failed");
// testCases(undefined,999,"validation failed");
// testCases(0,undefined,"validation failed");
// testCases("hello",3,"validation failed");
// testCases(3,"hi","validation failed");
// testCases(NaN,NaN,"validation failed");
// testCases(NaN,5,"validation failed");
// testCases(NaN,undefined,"validation failed");
// testCases(undefined,NaN,"validation failed");
// testCases(5,NaN,"validation failed");    



//TestNumberforValidArmstrong
console.log( "***********  TestNumberforValidArmstrong *********** ")
TestNumberforValidArmstrong(407)

console.log('\n')


// TestNumberforInvalidArmstrong
console.log( " ***********  TestNumberforInvalidArmstrong *********** ")
TestNumberforInvalidArmstrong(23);

console.log('\n')

//testValidArmstrongRange
console.log( " ***********  testValidArmstrongRange *********** ")
testValidArmstrongRange(0,999,[0,1,153,370,371,407])

console.log('\n')

// testInvalidArmstrongRange
console.log( " ***********  testInvalidArmstrongRange *********** ")
testInvalidArmstrongRange(999,0,[0,1,153,370,407]);

console.log('\n')