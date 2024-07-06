import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from '../actions/loremActions';

const LoremIpsum = () => {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>Lorem Ipsum</h1>
      {lorem.loading && <p>Loading...</p>}
      {lorem.error && <p>Error: {lorem.error}</p>}
      <ul>
        {lorem.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoremIpsum;
