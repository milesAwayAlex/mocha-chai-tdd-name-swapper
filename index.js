export default nameStr => {
  if (nameStr === undefined) throw new Error('Pass me a string');
  if (!nameStr) return '';
  const honors = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'].map(e => e.toUpperCase());
  const arr = nameStr.replace(/\s+/g, ' ').trim().split(' ');
  const honored = honors.includes(arr[0].toUpperCase());
  if (arr.length === 1) return honored ? '' : arr[0];
  if (arr.length === 2)
    return honored ? arr.join(' ') : arr.reverse().join(', ');
  return `${arr[0]} ${arr[2]}, ${arr[1]}`;
};
