const setStorage = (response, setQueries) => {
  const searchParams = `${response?.name?.toLowerCase()},${response?.sys?.country?.toLowerCase()}`;

  if (localStorage.getItem('history') && response) {
    const arr = JSON.parse(localStorage.getItem('history'));

    if (arr.every((city) => city.response.name !== response.name)) {
      arr.unshift({ searchParams, response });
      localStorage.setItem('history', JSON.stringify(arr.slice(0, 4)));
      setQueries(arr.slice(0, 4));
    } else {
      const tempArr = arr.filter(
        (city) => city.response.name !== response.name
      );
      tempArr.unshift({ searchParams, response });
      setQueries(tempArr.slice(0, 4));
    }
  } else {
    response &&
      localStorage.setItem(
        'history',
        JSON.stringify([{ searchParams, response }])
      ) &&
      setQueries([{ searchParams, response }]);
  }
};
export default setStorage;
