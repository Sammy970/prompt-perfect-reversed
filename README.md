## Prompt Perfect Reversed - Sammy970

Version 1.0.1

Original Creator Website: https://promptperfect.xyz/

---

## How to use ?

1. First install the package:

`npm install prompt-perfect-plugin`

2. Import the package:

`import { rephrasePrompt } = require('prompt-perfect-plugin')`

3. Use the function:

`await rephrasePrompt(textObj)`

---

## Note:

### The text should be an object with the key value pair as follows:

`textObj: { text: "Hello how are you" }`

---

## Example:

```
// Import the package
const { rephrasePrompt } = require('prompt-perfect-plugin');

// Define the text object
const textObj = { text: "Hello, how are you?" };

// Call the rephrasePrompt function
rephrasePrompt(textObj)
  .then((rephrasedPrompt) => {
    // Process the rephrased prompt
    console.log('Rephrased prompt:', rephrasedPrompt.text);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```
