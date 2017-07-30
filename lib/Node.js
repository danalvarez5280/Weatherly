export default class Node {
  constructor(letter = null, children = {}) {
    this.children = children;
    this.frequency = 0;
    this.isWord = false;
    this.letter = letter;
    this.timeStamp = 0;
  };
};
