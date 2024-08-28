function lengthOfLastWord(s: string): number {
    var wordLength = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] == " " && wordLength != 0) {
        break;
        }
        if (s[i] != " ") {
        wordLength++;
        }
    }
    return wordLength;
};