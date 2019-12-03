process.argv.slice(2).filter(n => n > 0).forEach(n =>
  setTimeout(() => {
    process.stdout.write("\x07");
  }, n * 1000)
);
