import React from 'react';
import api from '~/services/api';

const dashboard = () => {
  api.get('appointments');
  return <div />;
};

export default dashboard;
