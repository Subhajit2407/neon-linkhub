
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ["JetBrains Mono", "monospace"],
				code: ["Fira Code", "monospace"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				matrix: {
					green: "#00FF41",
					dark: "#0D0208",
					light: "#003B00",
					accent: "#08FF08",
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						'text-shadow': '0 0 5px rgba(0, 255, 65, 0.7), 0 0 10px rgba(0, 255, 65, 0.5)'
					},
					'50%': {
						'text-shadow': '0 0 15px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.6)'
					}
				},
				'matrix-fade': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'cursor-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'button-hover': {
					'0%': { boxShadow: '0 0 0 rgba(0, 255, 65, 0)' },
					'100%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.7), 0 0 20px rgba(0, 255, 65, 0.4)' }
				},
				'grid-fade': {
					'0%': { opacity: '0.2' },
					'50%': { opacity: '0.4' },
					'100%': { opacity: '0.2' }
				},
				'star-movement-top': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(500%)' }
				},
				'star-movement-bottom': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-500%)' }
				},
				'float': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'matrix-pulse': {
					'0%, 100%': { opacity: '0.7' },
					'50%': { opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s infinite',
				'matrix-fade': 'matrix-fade 0.6s ease-out forwards',
				'cursor-blink': 'cursor-blink 1s infinite',
				'button-hover': 'button-hover 0.3s forwards',
				'grid-fade': 'grid-fade 4s infinite',
				'star-movement-top': 'star-movement-top 6s linear infinite',
				'star-movement-bottom': 'star-movement-bottom 6s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'matrix-pulse': 'matrix-pulse 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
