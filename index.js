const axios = require('axios');

// Function to rephrase the prompt
async function rephrasePrompt(prompt) {
    try {
        const response = await axios.post('https://promptperfect.xyz/rephrase', prompt);
        return response.data.rephrased;
    } catch (error) {
        console.error(error);
        throw new Error('Rephrasing request failed');
    }
}

module.exports = { rephrasePrompt };
