import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/ocultar el botón según la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Manejar clic para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '4rem', /* Ancho */
        height: '4rem', /* Alto igual al ancho */
        fontSize: '2rem',
        backgroundColor: '#67175a',
        color: 'white',
        border: 'none',
        borderRadius: '50%', /* Hace que el botón sea redondo */
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = '#8b6ce2')
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = '#67175a')
      }
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;