import React from 'react';

export default function Error({ error }) {
  return (
    <div>
      <div className="alert alert-danger text-capitalize" role="alert">
        {error}
      </div>
    </div>
  );
}
