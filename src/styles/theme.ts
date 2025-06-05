export const theme = {
  colors: {
    primary: '#1B365D',      // Deep navy blue - professional, trustworthy
    secondary: '#C9A961',    // Warm gold - luxury, elegance
    accent: '#E8F4F8',       // Light blue-grey - clean, modern
    tertiary: '#2C5F41',     // Forest green - South African nature
    highlight: '#F7931E',    // Vibrant orange - energy, creativity
    neutral: {
      50: '#FAFBFC',
      100: '#F5F7FA',
      200: '#E4E7EB',
      300: '#CBD2D9',
      400: '#9AA5B1',
      500: '#7B8794',
      600: '#616E7C',
      700: '#52606D',
      800: '#3E4C59',
      900: '#323F4B'
    },
    success: '#10B981',      // Modern green
    warning: '#F59E0B',      // Amber warning
    error: '#EF4444',        // Clean red
    white: '#FFFFFF',
    black: '#0F172A'
  },
  
  fonts: {
    primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    heading: "'Montserrat', 'Georgia', serif",
    monospace: "'JetBrains Mono', 'Monaco', monospace"
  },
  
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem'  // 60px
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem'     // 128px
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(27, 54, 93, 0.05)',
    base: '0 1px 3px 0 rgba(27, 54, 93, 0.1), 0 1px 2px 0 rgba(27, 54, 93, 0.06)',
    md: '0 4px 6px -1px rgba(27, 54, 93, 0.1), 0 2px 4px -1px rgba(27, 54, 93, 0.06)',
    lg: '0 10px 15px -3px rgba(27, 54, 93, 0.1), 0 4px 6px -2px rgba(27, 54, 93, 0.05)',
    xl: '0 20px 25px -5px rgba(27, 54, 93, 0.1), 0 10px 10px -5px rgba(27, 54, 93, 0.04)',
    '2xl': '0 25px 50px -12px rgba(27, 54, 93, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(27, 54, 93, 0.06)',
    glow: '0 0 20px rgba(201, 169, 97, 0.3)'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px'
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  }
} as const;

export type Theme = typeof theme;
