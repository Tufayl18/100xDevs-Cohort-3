const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const asciiString = bytesToAscii(bytes);
console.log(asciiString);

function bytesToAscii(bytesArray) {
  return new TextDecoder().decode(bytesArray);
}

const ascii = "Hello";
const bytesArray = asciiToBytes(ascii);
console.log(bytesArray);

function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}
