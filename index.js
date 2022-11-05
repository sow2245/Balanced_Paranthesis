let braketsExample = (InputString) => {
  let inp = InputString.split('');
  let temp = [];
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] == '(' || inp[i] == '[' || inp[i] == '{') {
      temp.push(inp[i]);
    }

    switch (inp[i]) {
      case ')':
        if (temp[temp.length - 1] == '(') temp.pop();
        else return false;
        break;
      case ']':
        if (temp[temp.length - 1] == '[') temp.pop();
        else return false;
        break;
      case '}':
        if (temp[temp.length - 1] == '{') temp.pop();
        else return false;
        break;
    }
  }
  return temp.length == 0;
};
console.log(braketsExample('{{{()}}}())('));
