import React from 'react';

function Logo({ 
  width = '120px', 
  height = 'auto', 
  src = '', 
  alt = 'Logo', 
  text = 'Logo',
  style = {}
}) {

  return (
    <div 
      style={{ 
        width, 
        height, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        ...style 
      }}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      ) : (
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {text}
        </span>
      )}
    </div>
  );
}

export default Logo;
