// Loading.jsx
import React from 'react';
import './loading.css'; // optional styles

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner" />
      <p>Please be patient, images are loading...</p>
    </div>
  );
}
