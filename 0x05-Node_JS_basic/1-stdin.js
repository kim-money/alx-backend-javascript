/* eslint-disable no-unused-vars */
/**
 * display the message Welcome to Holberton School, what is your name?
 * user inputs their name on a new line
 * the program displays Your name is: INPUT
 * When the user ends the program it displays
 * This important software is now closing
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
