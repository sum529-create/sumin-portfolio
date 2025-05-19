import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Pretendard', 'system-ui', 'sans-serif'],
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  		},
  		fontWeight: {
  			normal: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700',
  		},
  		colors: {
  			background: {
  				DEFAULT: '#FFFFFF',
  				dark: '#0F172A',
  			},
  			foreground: {
  				DEFAULT: '#1E293B',
  				dark: '#F8FAFC',
  			},
  			card: {
  				DEFAULT: '#FFFFFF',
  				dark: '#1E293B',
  				foreground: '#1E293B',
  				'foreground-dark': '#F8FAFC',
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				dark: '#1E293B',
  				foreground: '#1E293B',
  				'foreground-dark': '#F8FAFC',
  			},
  			primary: {
  				DEFAULT: '#6366F1',
  				foreground: '#FFFFFF',
  				light: '#818CF8',
  				dark: '#4F46E5',
  			},
  			secondary: {
  				DEFAULT: '#3B82F6',
  				foreground: '#FFFFFF',
  				light: '#60A5FA',
  				dark: '#2563EB',
  			},
  			muted: {
  				DEFAULT: '#94A3B8',
  				foreground: '#475569',
  			},
  			accent: {
  				DEFAULT: '#EC4899',
  				foreground: '#FFFFFF',
  				light: '#F472B6',
  				dark: '#DB2777',
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF',
  				light: '#F87171',
  				dark: '#DC2626',
  			},
  			border: '#E2E8F0',
  			'border-dark': '#334155',
  			input: '#E2E8F0',
  			'input-dark': '#334155',
  			ring: '#6366F1',
  			'ring-dark': '#818CF8',
  			chart: {
  				'1': '#6366F1',
  				'2': '#3B82F6',
  				'3': '#EC4899',
  				'4': '#10B981',
  				'5': '#8B5CF6'
  			},
				purple: {
					DEFAULT: '#8B5CF6',
					light: '#A78BFA',
					dark: '#7C3AED'
				},
				teal: {
					DEFAULT: '#10B981',
					light: '#34D399',
					dark: '#059669'
				},
				amber: {
					DEFAULT: '#F59E0B',
					light: '#FBBF24',
					dark: '#D97706'
				}
  		},
  		borderRadius: {
  			'none': '0',
  			'sm': '0.125rem',
  			DEFAULT: '0.25rem',
  			'md': '0.375rem',
  			'lg': '0.5rem',
  			'xl': '0.75rem',
  			'2xl': '1rem',
  			'3xl': '1.5rem',
  			'full': '9999px',
  		},
  		spacing: {
  			'0': '0',
  			'1': '0.25rem',
  			'2': '0.5rem',
  			'3': '0.75rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'8': '2rem',
  			'10': '2.5rem',
  			'12': '3rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'32': '8rem',
  			'40': '10rem',
  			'48': '12rem',
  			'56': '14rem',
  			'64': '16rem',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;