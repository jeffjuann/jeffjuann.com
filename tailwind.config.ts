/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				code: ['Source Code Pro Variable', 'monospace'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				code: {
					DEFAULT: 'hsl(var(--code))',
					foreground: 'hsl(var(--code-foreground))',
				},
				'table-head':{
					DEFAULT: 'hsl(var(--table-head))',
					foreground: 'hsl(var(--table-head-foreground))',
				},
				'table-row':{
					DEFAULT: 'hsl(var(--table-row))',
					foreground: 'hsl(var(--table-row-foreground))',
				},
			},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
			fontSize: {
				'1.5xs': '0.75rem',
				'2xs': '0.625rem',
				'3xs': '0.5rem',
			},
		},
	},
	plugins: [],
}
