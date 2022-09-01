const setStorage = (response, setQueries) => {
  if (localStorage.getItem('history') && response) {
    const arr = JSON.parse(localStorage.getItem('history'));

    if (arr.every((city) => city.name !== response.name)) {
      console.log('no');
      arr.unshift(response);
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
      setQueries(arr.slice(0, 4));
    } else {
      console.log('yes');
      const tempArr = arr.filter((city) => city.name !== response.name);
      tempArr.unshift(response);
      setQueries(tempArr.slice(0, 4));
    }
  } else {
    response &&
      localStorage.setItem('history', JSON.stringify([response])) &&
      setQueries([response]);
  }
};
export default setStorage;
