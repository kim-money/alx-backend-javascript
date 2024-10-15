# 0x03. ES6 data manipulation
In this project we learnt about the several features for data manipulation in JavaScript. These features are fundamental tools for modern web development.

---

## Resources
- [Array](https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)
- [Typed Array](https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw)
- [Set Data Structure](https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg)
- [Map Data Structure](https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw)
- [WeakMap](https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg)

## Learning Objectives
```
    How to use map, filter and reduce on arrays
    Typed arrays
    The Set, Map, and Weak link data structures
```

## Requirements
```
    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
    All of your functions must be exported
```

## Setup
```
Install NodeJS 12.11.x

(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3

Install Jest, Babel, and ESLint

in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.
Configuration files

Add the following files to your project directory
package.json
Click to show/hide file contents


{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js
Click to show/hide file contents


module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click to show/hide file contents


module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

and…

Don’t forget to run $ npm install when you have the package.json
```

### Project Tasks
| Task | Description |
| ---- | ----------- |
| 0. Basic list of objects | Create a function named `getListStudents` that returns an array of objects; Each object should have three attributes: `id (Number)`, `firstName (String)`, and `location (String)`. |
| 1. More mapping | Create a function `getListStudentIds` that returns an array of ids from a list of object; This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task, If the argument is not an array, the function is returning an empty array; use `map` |
| 2. Filter | Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city;It should accept a `list of students` (from getListStudents) and a `city (string)` as parameters. use `filter` |
| 3. Reduce | Create a function `getStudentIdsSum` that returns the sum of all the student ids; It should accept a list of students (from getListStudents) as a parameter. use `reduce` |
| 4. Combine | Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade; It should accept a list of students (from `getListStudents`), a `city` (String), and `newGrades` (Array of “grade” objects) as parameters, If a student doesn’t have grade in `newGrades`, the final grade should be `N/A`. use `filter` and `map` combined. |
| 5. Typed Arrays | Create a function named `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position; It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number). If adding the value is not possible the error `Position outside range` should be thrown. |
|  6. Set data structure | Create a function named `setFromArray` that returns a `Set` from an array; It accepts an argument (Array, of any kind of element). |
| 7. More set data structure | Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set; It accepts two arguments: a `set` (Set) and an `array` (Array). |
| 8. Clean set | Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`); It accepts two arguments: a `set` (Set) and a `startString` (String), When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -. |
| 9. Map data structure | Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity): Apple, 10; Tomatoes, 10; Paste, 1; Rice, 1; Banana, 5 |
| 10. More map data structure | Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1; It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task, For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown. |
