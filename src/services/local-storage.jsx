const setStorage = (response, setQueries) => {
  if (localStorage.getItem('history') && response) {
    const arr = JSON.parse(localStorage.getItem('history'));

    if (arr.every((city) => city?.name === response.name)) {
      console.log('equal');
    } else {
      console.log('not equal');

      arr.unshift(response);
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
      setQueries(arr.slice(0, 4));
    }
  } else {
    response &&
      localStorage.setItem('history', JSON.stringify([response])) &&
      setQueries([response]);
  }
};
export default setStorage;
