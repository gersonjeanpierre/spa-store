export const firstLetterToUpperCase = (string) => {
  string = string.replace(/[^\w\s]|_/g, '').trim('')

  if (string[0] !== 'i') {
    const words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // console.log(words);
    return words.join(' ');
  };
  return string;
}