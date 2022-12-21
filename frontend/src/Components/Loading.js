import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loading({ loading }) {
  return (
    <ClipLoader
      color='#0085ad'
      size={50}
      loading={loading}
      cssOverride={{ display: 'block', margin: '0 auto' }}
    />
  );
}

export default Loading;
