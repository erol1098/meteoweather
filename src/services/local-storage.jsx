const setStorage = (response, setQueries) => {
  if (localStorage.getItem('history') && response) {
    const arr = JSON.parse(localStorage.getItem('history'));
    arr.unshift(response);
    localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
    setQueries(arr.slice(0, 4));
  } else {
    response &&
      localStorage.setItem('history', JSON.stringify([response])) &&
      setQueries([response]);
  }
};
export default setStorage;
