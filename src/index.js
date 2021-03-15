module.exports = function toReadable(number) {
    // let words = [];

    const lessThanTwenty = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    };

    if (number < 20) {
        return lessThanTwenty[number];
    };

    let digit = number % 10;

    if (number < 100) {
        return tens[Math.floor(number / 10)] + (digit ? " " + lessThanTwenty[digit] : "");
    }
}

