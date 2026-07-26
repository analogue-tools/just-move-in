/**
 * Jay · Tailwind theme extension
 * Generated from tokens.json. Mirrors the Just Move In Figma library so a
 * Figma layer name and a Tailwind class resolve to the same value.
 *
 * Usage: merge `theme.extend` into your existing tailwind.config.
 */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Degular Display"', 'Figtree', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      // Floor is 14px. Do not add anything below it.
      fontSize: {
        xs:   ['0.875rem',  { lineHeight: '1.25rem'   }],
        sm:   ['0.9375rem', { lineHeight: '1.375rem'  }],
        base: ['1rem',      { lineHeight: '1.5625rem' }],
        lg:   ['1.1875rem', { lineHeight: '1.75rem'   }],
        xl:   ['1.5rem',    { lineHeight: '1.875rem'  }],
        '2xl':['2.125rem',  { lineHeight: '2.375rem'  }],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card:       'hsl(var(--card))',
        muted:      { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        border:     'hsl(var(--border))',
        ring:       'hsl(var(--ring))',
        primary:    { DEFAULT: 'hsl(var(--primary))',   foreground: 'hsl(var(--primary-foreground))',   subtle: 'hsl(var(--primary-subtle))' },
        secondary:  { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        success:    { DEFAULT: 'hsl(var(--success))',   subtle: 'hsl(var(--success-subtle))' },
        warning:    { DEFAULT: 'hsl(var(--warning))',   subtle: 'hsl(var(--warning-subtle))' },
        // Load bearing. See tokens.json. Do not collapse into success or destructive.
        pending:    { DEFAULT: 'hsl(var(--pending))',   subtle: 'hsl(var(--pending-subtle))' },
        destructive:{ DEFAULT: 'hsl(var(--destructive))', subtle: 'hsl(var(--destructive-subtle))' },
      },
      borderRadius: {
        sm: '4px', DEFAULT: '8px', md: '10px', lg: '14px',
        xl: '18px', '2xl': '22px', '3xl': '28px',
      },
      boxShadow: {
        sm:          '0 1px 2px rgba(22,20,31,.05)',
        'sm-strong': '0 1px 2px rgba(22,20,31,.06), 0 6px 16px -10px rgba(22,20,31,.18)',
        md:          '0 2px 4px rgba(22,20,31,.06), 0 16px 32px -16px rgba(22,20,31,.24)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
