/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  if (!Array.isArray(caze)) {
    caze = [caze];
  }
  let output = input;
  const precedence = [
    "camel",
    "pascal",
    "snake",
    "kebab",
    "title",
    "vowel",
    "consonant",
    "upper",
    "lower",
  ];
  caze.sort((a, b) => precedence.indexOf(a) - precedence.indexOf(b));
  for (const style of caze) {
    switch (style) {
      case "camel":
        output = output
          .split(" ")
          .map((word, i) =>
            i === 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join("");
        break;
      case "pascal":
        output = output
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join("");
        break;
      case "snake":
        output = output.split(" ").join("_");
        break;
      case "kebab":
        output = output.split(" ").join("-");
        break;
      case "title":
        output = output
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");
        break;
      case "vowel":
        output = output
          .split("")
          .map((char) =>
            ["a", "e", "i", "o", "u"].includes(char) ? char.toUpperCase() : char
          )
          .join("");
        break;
      case "consonant":
        output = output
          .split("")
          .map((char) =>
            !["a", "e", "i", "o", "u"].includes(char)
              ? char.toUpperCase()
              : char
          )
          .join("");
        break;
      case "upper":
        output = output.toUpperCase();
        break;
      case "lower":
        output = output.toLowerCase();
        break;
    }
  }
  return output;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
