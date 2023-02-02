let inputParagraph = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program$
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$ 
column$are$separated$by$at$least$one$space.$ `;

// Output

// Given |a         |text     |file  |of    |many    |lines,    |where   |fields|within |a |line|
// are   |delineated|by       |a     |single|'dollar'|character,|write   |a     |program|
// that  |aligns    |each     |column|of    |fields  |by        |ensuring|that  |words  |in|each|
// column|are       |separated|by    |at    |least   |one       |space.  |

let inputLines = inputParagraph.split("\n");


let row1 = inputLines[0].split("$");
let row2 = inputLines[1].split("$");
let row3 = inputLines[2].split("$");
let row4 = inputLines[3].split("$");


let rowLengths = [
  row1.length,
  row2.length,
  row3.length,
  row4.length,
];

let maxRowLength = 0;
for (let itrator = 0; itrator < 4; itrator++) {
  maxRowLength = Math.max(maxRowLength, rowLengths[itrator]);
}

let row1Index = 0,
  row2Index = 0,
  row3Index = 0,
  row4Index = 0;
//loop the longest array
let alignedLine1 = "",
  alignedLine2 = "",
  alignedLine3 = "",
  alignedLine4 = "";
for (let eleIndex = 0; eleIndex < maxRowLength; eleIndex++) {
  let maxColLength = 0;
  maxColLength = row1.includes(row1[eleIndex])? Math.max(maxColLength, row1[eleIndex].length) : maxColLength;

  maxColLength = row2.includes(row2[eleIndex]) ? Math.max(maxColLength, row2[eleIndex].length) : maxColLength;

  maxColLength = row3.includes(row3[eleIndex])? Math.max(maxColLength, row3[eleIndex].length): maxColLength;

  maxColLength = row4.includes(row4[eleIndex])? Math.max(maxColLength, row4[eleIndex].length) : maxColLength;

  if (row1Index < row1.length -1) {
    alignedLine1 += row1[eleIndex].padEnd(maxColLength, " ") + "|";
    row1Index = row1Index + 1;
  }
  if (row2Index < row2.length - 1) {
    alignedLine2 += row2[eleIndex].padEnd(maxColLength, " ") + "|";
    row2Index = row2Index + 1;
  }
  if (row3Index < row3.length - 1) {
    alignedLine3 += row3[eleIndex].padEnd(maxColLength, " ") + "|";
    row3Index = row3Index + 1;
  }
  if (row4Index < row4.length - 1) {
    alignedLine4 += row4[eleIndex].padEnd(maxColLength, " ") + "|";
    row4Index = row4Index + 1;
  }
  //
}
let alignedRows = `${alignedLine1}\n${alignedLine2}\n${alignedLine3}\n${alignedLine4}`;
console.log(alignedRows);
