function beep() {
  process.stdout.write("\x07");
}

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', char => {
  if (char === '') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (char === 'b') beep();

  const n = Number(char);
  if (0 < n && n < 10) {
    console.log(`Setting timer for ${n} seconds`);
    setTimeout(() => beep(), n * 1000)
  };
})
