const setStorage = (response, setQueries) => {
  if (localStorage.getItem('history') && response) {
    const arr = JSON.parse(localStorage.getItem('history'));
    console.log('object');
    if (
      arr.every(
        (city) =>
          city.response.name.toLowerCase() !== response.name.toLowerCase() &&
          city.response.coord.lat !== response.coord.lat
      )
    ) {
      arr.unshift({ response });
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
      setQueries(arr.slice(0, 4));
    } else {
      const tempArr = arr.filter(
        (city) =>
          city.response.name.toLowerCase() !== response.name.toLowerCase() &&
          city.response.coord.lat !== response.coord.lat
      );
      tempArr.unshift({ response });
      localStorage.setItem('history', JSON.stringify(tempArr.slice(0, 4)));
      setQueries(tempArr.slice(0, 4));
    }
  } else {
    response &&
      localStorage.setItem('history', JSON.stringify([{ response }])) &&
      setQueries([{ response }]);
  }
};
export default setStorage;
