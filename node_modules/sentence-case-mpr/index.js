// Function to convert a string to sentence case
function toSentenceCase(inputString) {
    if (typeof inputString !== 'string') {
        throw new Error('Enter a string');
    }
    // input string - to words
    const words = inputString.toLowerCase().split(' ');
    // Enabling sentence casing
    const sentenceCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // .Join, to join words together and form the sentence case string
    const sentenceCaseString = sentenceCaseWords.join(' ');

    return sentenceCaseString;
}

// Export the function as part of your library
module.exports = { toSentenceCase };
