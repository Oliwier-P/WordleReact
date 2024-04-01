import wordsArray from './words.json';

export const RandomWord = async () => {
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    return randomWord;
}
