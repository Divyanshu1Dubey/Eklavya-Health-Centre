/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Medical Blue Palette
        'medical-blue': {
          50: '#EAF4FF',
          100: '#D5E8FF',
          200: '#B0D1FF',
          300: '#8ABAFF',
          400: '#6FA9FF',
          500: '#4A90E2',
          600: '#357ABD',
          700: '#2D639A',
          800: '#244C77',
          900: '#1B3C59',
        },
        // Medical Theme Colors
        'medical-dark': '#1B3C59',
        'medical-light': '#F8FBFF',
        'medical-accent': '#DCEEFF',
        'medical-border': '#E6EEF5',
        'medical-success': '#2ECC71',
        'medical-warning': '#F5A623',
        'medical-error': '#E74C3C',
      },
      backgroundColor: {
        'medical-main': '#F8FBFF',
        'medical-card': '#FFFFFF',
        'medical-section': '#F1F7FD',
      },
      textColor: {
        'medical-heading': '#1B3C59',
        'medical-subheading': '#4A6FA5',
        'medical-body': '#5F6C7B',
        'medical-light': '#9AA6B2',
      },
      borderColor: {
        'medical': '#E6EEF5',
      },
    },
  },
  plugins: [],
};
