const codingQuestionData = [
  {
    category: "simple sum",
    question: "Create a sum function named sumOf()",
    inputs: [{ input: [2, 4] }, { input: [50, 550] }, { input: [40, -28] }],
    answer: ["6", "600", "12"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function sumOf(a, b) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(sumOf(2, 4)); // expected output = 6\n" +
      "console.log(sumOf(50, 550)); // expected output = 600\n" +
      "console.log(sumOf(40, -28)) // expected output = 12;",
    codePython:
      "def sumOf(a, b):\n" +
      "    # Write your code here\n" +
      "     \n" +
      "\n" +
      "\n" +
      "print(sumOf(2, 4)) # expected output = 6\n" +
      "print(sumOf(50, 550)) # expected output = 600\n" +
      "print(sumOf(40, -28)) # expected output = 12",
  },

  {
    category: "array",
    question: "Create a function named 'findMax' that finds the maximum number in an array",
    inputs: [
      { input: [2, 4, 5, 1, 3] },
      { input: [50, 550, 45, 60] },
      { input: [-40, -28, -100, -1500] },
    ],
    answer: ["5", "550", "-28"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function findMax(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(findMax([2, 4, 5, 1, 3])); // expected output = 5\n" +
      "console.log(findMax([50, 550, 45, 60])); // expected output = 550\n" +
      "console.log(findMax([-40, -28, -100, -1500])) // expected output = -28;",
    codePython:
      "def findMax(arr):\n" +
      "    # Write your code here\n" +
      "     \n" +
      "\n" +
      "\n" +
      "print(findMax([2, 4, 5, 1, 3])) # expected output = 5\n" +
      "print(findMax([50, 550, 45, 60])) # expected output = 550\n" +
      "print(findMax([-40, -28, -100, -1500])) # expected output = -28",
  },
  {
    category: "string",
    question: "Create a function named 'reverseStr' that reverses a given string",
    inputs: [{ input: ["abcd"] }, { input: ["javascript"] }, { input: ["openai"] }],
    answer: ["dcba", "tpircsavaj", "ianepo"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function reverseStr(str) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      'console.log(reverseStr("abcd")); // expected output = "dcba"\n' +
      'console.log(reverseStr("javascript")); // expected output = "tpircsavaj"\n' +
      'console.log(reverseStr("openai")); // expected output = "ianepo";',
    codePython:
      "def reverseStr(str):\n" +
      "    # Write your code here\n" +
      "     \n" +
      "\n" +
      "\n" +
      'print(reverseStr("abcd")) # expected output = "dcba"\n' +
      'print(reverseStr("javascript")) # expected output = "tpircsavaj"\n' +
      'print(reverseStr("openai")) # expected output = "ianepo"',
  },
  {
    category: "object",
    question:
      "Create a function named 'getValue' that takes an object and a key as arguments, and returns the value of the key from the object",
    inputs: [
      { input: [{ a: 1, b: 2 }, "a"] },
      { input: [{ language: "JavaScript", library: "React" }, "library"] },
      { input: [{ company: "OpenAI", project: "GPT-4" }, "project"] },
    ],
    answer: ["1", "React", "GPT-4"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function getValue(obj, key) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      'console.log(getValue({ a: 1, b: 2 }, "a")); // expected output = 1\n' +
      'console.log(getValue({ language: "JavaScript", library: "React" }, "library")); // expected output = "React"\n' +
      'console.log(getValue({ company: "OpenAI", project: "GPT-4" }, "project")); // expected output = "GPT-4";',
    codePython:
      "def getValue(obj, key):\n" +
      "    # Write your code here\n" +
      "     \n" +
      "\n" +
      "\n" +
      'print(getValue({ "a": 1, "b": 2 }, "a")) # expected output = 1\n' +
      'print(getValue({ "language": "JavaScript", "library": "React" }, "library")) # expected output = "React"\n' +
      'print(getValue({ "company": "OpenAI", "project": "GPT-4" }, "project")) # expected output = "GPT-4"',
  },
  {
    category: "array",
    question:
      "Create a function named 'flattenArray' that takes a nested array and returns a flattened array",
    inputs: [{ input: [[1, [2, [3, [4]], 5]]] }, { input: [[["a"], "b", ["c", "d"]]] }],
    answer: ["1,2,3,4,5", "a,b,c,d"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function flattenArray(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "\n" +
      "console.log(flattenArray([1, [2, [3, [4]], 5]])); // expected output = 1,2,3,4,5\n" +
      'console.log(flattenArray([["a"], "b", ["c", "d"]])); // expected output = "a,b,c,d";',
    codePython:
      "def flattenArray(arr):\n" +
      "    # Write your code here\n" +
      "     \n" +
      "\n" +
      "print(flattenArray([1, [2, [3, [4]], 5]])) # expected output = 1,2,3,4,5\n" +
      'print(flattenArray([["a"], "b", ["c", "d"]])) # expected output = "a,b,c,d"',
  },
  {
    category: "hash map",
    question:
      "Create a function named 'countChars' that counts the occurrence of each character in a string using a hash map",
    inputs: [{ input: ["abcd"] }, { input: ["javascript"] }, { input: ["openai"] }],
    answer: [
      '{"a":1,"b":1,"c":1,"d":1}',
      '{"j":1,"a":2,"v":1,"s":2,"c":1,"r":1,"i":1,"p":1,"t":1}',
      '{"o":1,"p":1,"e":1,"n":1,"a":1,"i":1}',
    ],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function countChars(str) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      'console.log(countChars("abcd")); // {"a":1,"b":1,"c":1,"d":1}\n' +
      'console.log(countChars("javascript")); //{"j":1,"a":2,"v":1,"s":2,"c":1,"r":1,"i":1,"p":1,"t":1}\n' +
      'console.log(countChars("openai")); //{"o":1,"p":1,"e":1,"n":1,"a":1,"i":1}',
    codePython:
      "def countChars(str):\n" +
      "    # Write your code here\n" +
      "\n" +
      'print(countChars("abcd")) #{"a":1,"b":1,"c":1,"d":1}\n' +
      'print(countChars("javascript")) #{"j":1,"a":2,"v":1,"s":2,"c":1,"r":1,"i":1,"p":1,"t":1}\n' +
      'print(countChars("openai")) #{"o":1,"p":1,"e":1,"n":1,"a":1,"i":1}',
  },
  {
    category: "hash map",
    question:
      "Create a function named 'findDuplicates' that finds the duplicate numbers in an array using a hash map",
    inputs: [{ input: [[1, 2, 3, 2, 1]] }, { input: [[5, 5, 5, 5]] }, { input: [[7, 8, 9, 7]] }],
    answer: ["[1, 2]", "[5]", "[7]"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function findDuplicates(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "console.log(findDuplicates([1, 2, 3, 2, 1])) //[1, 2];\n" +
      "console.log(findDuplicates([5, 5, 5, 5])) //[5];\n" +
      "console.log(findDuplicates([7, 8, 9, 7])) //[7];",
    codePython:
      "def findDuplicates(arr):\n" +
      "    # Write your code here\n" +
      "\n" +
      "print(findDuplicates([1, 2, 3, 2, 1])) #[1, 2]\n" +
      "print(findDuplicates([5, 5, 5, 5])) #[5]\n" +
      "print(findDuplicates([7, 8, 9, 7])) #[7]",
  },
  {
    category: "set",
    question:
      "Create a function named 'uniqueValues' that finds unique values in an array using a set",
    inputs: [{ input: [[1, 2, 2, 3, 3, 3]] }, { input: [[5, 5, 5, 5]] }, { input: [[7, 8, 9, 7]] }],
    answer: ["[1, 2, 3]", "[5]", "[7, 8, 9]"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function uniqueValues(arr) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "console.log(uniqueValues([1, 2, 2, 3, 3, 3])) //[1, 2, 3];\n" +
      "console.log(uniqueValues([5, 5, 5, 5])) //[5];\n" +
      "console.log(uniqueValues([7, 8, 9, 7])) //[7];",
    codePython:
      "def uniqueValues(arr):\n" +
      "    # Write your code here\n" +
      "\n" +
      "print(uniqueValues([1, 2, 2, 3, 3, 3])) #[1, 2, 3]\n" +
      "print(uniqueValues([5, 5, 5, 5])) #[5]\n" +
      "print(uniqueValues([7, 8, 9, 7])) #[7]",
  },
  {
    category: "hash map",
    question:
      "Create a function named 'wordCount' that counts the occurrence of each word in a sentence using a hash map, regardless of capitalization.",
    inputs: [{ input: ["Hello World! Hello Everyone!"] }, { input: ["Hash maps are useful!"] }],
    answer: ['{"Hello":2,"World!":1,"Everyone!":1}', '{"Hash":1,"maps":1,"are":1,"useful!":1}'],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function wordCount(str) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      'console.log(JSON.stringify(wordCount("Hello World! Hello Everyone!"))) //{"Hello":2,"World!":1,"Everyone!":1};\n' +
      'console.log(wordCount("Hello World! Hello Everyone!")) //{"Hello":2,"World!":1,"Everyone!":1};\n' +
      'console.log(wordCount("Hash maps are useful!")) //{"Hash":1,"maps":1,"are":1,"useful!":1}; \n' +
      'console.log(wordCount("The Capitals won the Stanley Cup in the year 2018!")) //{"the":3,"capitals":1,"won":1,"stanley":1 ,"cup":1, ,"in":1 ,"year":1,"2018":1};',

    codePython:
      "def wordCount(str):\n" +
      "    # Write your code here\n" +
      "\n" +
      'print(wordCount("Hello World! Hello Everyone!")) #{"Hello":2,"World!":1,"Everyone!":1}\n' +
      'print(wordCount("Hash maps are useful!")) #{"Hash":1,"maps":1,"are":1,"useful!":1}\n' +
      'print(wordCount("The Capitals won the Stanley Cup in the year 2018!")) //{"the":3,"capitals":1,"won":1,"stanley":1 ,"cup":1, ,"in":1 ,"year":1,"2018":1};',
  },
  {
    category: "set",
    question:
      "Create a function named 'setIntersection' that finds the intersection of two arrays using a set",
    inputs: [
      {
        input: [
          [1, 2, 3],
          [2, 3, 4],
        ],
      },
      {
        input: [
          [5, 6, 7],
          [7, 8, 9],
        ],
      },
      {
        input: [
          [10, 11, 12],
          [12, 13, 14],
        ],
      },
    ],
    answer: ["[2, 3]", "[7]", "[12]"],
    timesCorrect: 0,
    timesIncorrect: 0,
    code:
      "function setIntersection(arr1, arr2) {\n" +
      "  // Write your code here\n" +
      "}\n" +
      "\n" +
      "console.log(setIntersection([1, 2, 3], [2, 3, 4])) //[2, 3];\n" +
      "console.log(setIntersection([5, 6, 7], [7, 8, 9])) //[7];\n" +
      "console.log(setIntersection([10, 11, 12], [12, 13, 14])) //[12];",
    codePython:
      "def setIntersection(arr1, arr2):\n" +
      "    # Write your code here\n" +
      "\n" +
      "print(setIntersection([1, 2, 3], [2, 3, 4])) #[2, 3]\n" +
      "print(setIntersection([5, 6, 7], [7, 8, 9])) #[7];\n" +
      "print(setIntersection([10, 11, 12], [12, 13, 14])) #[12];",
  },
];
module.exports = codingQuestionData;
