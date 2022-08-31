import React from 'react';
import { StyledContainer } from '../Style/styled-componets';
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import withContext from '../hocs/withContext';
const DetailPage = ({ response }) => {
  const { query } = useParams();
  const arr = query.split('-');
  useFetchData({ city: arr[0], code: arr[1] });
  console.log(response);
  return <StyledContainer>DetailPage</StyledContainer>;
};

export default withContext(DetailPage);
