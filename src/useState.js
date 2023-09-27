const useState = (initialState) => {
  let value = initialState;
  const setValue = (newValue) => {
    value = newValue;
  };
  return [value, setValue];
};
const [value, setValue] = useState(0);
