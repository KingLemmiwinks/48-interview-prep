// add whatever parameters you deem necessary
function constructNote(message, letters) {

    // Create variables
    const messageFreq = {};
    const lettersFreq = {};

    // Build frequency counter of letters
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    // Build frequency counter of message
    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    // Frequency comparison
    for (let char in messageFreq) {
        if ( !lettersFreq[char]) {
            return false;
        }
        if (messageFreq[char] > lettersFreq[char]) {
            return false;
        }
    }
    return true;
}
