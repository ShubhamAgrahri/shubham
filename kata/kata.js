// Given a text file of many lines, where fields within a line are delineated by a single 'dollar' character,
// write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space.

// For Example:


// Input

// Given$a$text$file$of$many$lines,$where$fields$within$a$line$
// are$delineated$by$a$single$'dollar'$character,$write$a$program$
// that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
// column$are$separated$by$at$least$one$space.$


// Output

// Given |a         |text     |file  |of    |many    |lines,    |where   |fields|within |a |line|
// are   |delineated|by       |a     |single|'dollar'|character,|write   |a     |program|
// that  |aligns    |each     |column|of    |fields  |by        |ensuring|that  |words  |in|each|
// column|are       |separated|by    |at    |least   |one       |space.  |


// Notes:
// - The example input text lines may, or may not, have trailing dollar characters.
// - Lines may, or may not, contain the same number of fields.
// - All columns should share the same alignment.
// - Consecutive space characters produced adjacent to the end of lines are insignificant for the purposes of the task.
// - Assume output text will be viewed in a mono-spaced font on a plain text editor or basic terminal.
// - The minimum space between columns should be computed from the text and not hard-coded.

// function alignDollarColumns()

let inputString1 = "Given$a$text$file$of$many$lines,$where$fields$within$a$line$";
let inputString2 = "are$delineated$by$a$single$'dollar'$character,$write$a$program$";
let inputString3 = "that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$";
let inputString4 = "column$are$separated$by$at$least$one$space.$";

let arrayofString1 = inputString1.split('$');
let arrayofString2 = inputString2.split('$');
let arrayofString3 = inputString3.split('$');
let arrayofString4 = inputString4.split('$');
console.log(arrayofString1)

let maxLen