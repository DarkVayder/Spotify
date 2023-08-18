/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        'moblie': '600px',
        //=> @media (min-width: 600px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    }
  }