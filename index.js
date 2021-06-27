export default nameStr => {
  if (nameStr === undefined) {
    throw new Error('Expected string, got undefined');
  }
};
