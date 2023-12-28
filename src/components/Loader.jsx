import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#03e9f4"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
