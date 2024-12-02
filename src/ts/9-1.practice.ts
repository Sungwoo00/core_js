function processInput(input: object | string | number | any[] | Error): void {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else if (typeof input === 'number') {
    console.log(input ** 2);
  } else if (Array.isArray(input)) {
    console.log(input.length);
  } else if (input instanceof Error) {
    console.log(input.message);
  }
}
