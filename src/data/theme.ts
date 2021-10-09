import '@fontsource/josefin-sans';

import {
	extendTheme,
	theme as defaultChakraTheme,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { GlobalProps } from '@emotion/react';

export const theme = extendTheme({
	colors: {
		light: {
			100: 'hsl(0, 0%, 98%)',
			300: 'hsl(236, 33%, 92%)',
			500: 'hsl(233, 11%, 84%)',
			700: 'hsl(236, 9%, 61%)',
			900: 'hsl(235, 19%, 35%)',
		},
		dark: {
			200: 'hsl(236, 33%, 92%)',
			300: 'hsl(234, 39%, 85%)',
			400: 'hsl(234, 11%, 52%)',
			500: 'hsl(233, 14%, 35%)',
			600: 'hsl(237, 14%, 26%)',
			700: 'hsl(235, 24%, 19%)',
			800: 'hsl(235, 21%, 11%)',
		},
	},
	components: {
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: `0 0 0 0.2rem hsl(210,38.5%,94.9%, 0.5)`,
				},
			},
			variants: {
				ghost: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.ghost(
						props
					),
					_active: {
						bgColor: 'hsl(210,38.5%,94.9%, 0.1)',
						color: 'hsl(210,38.5%,94.9%)',
					},
					_hover: {
						bgColor: 'hsl(210,38.5%,94.9%, 0.1)',
						color: 'hsl(210,38.5%,94.9%)',
					},
					color: 'hsl(210,38.5%,94.9%)',
				}),
				outline: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.outline(
						props
					),
					_active: {
						bgColor: 'hsl(210,38.5%,94.9%, 0.1)',
						borderColor: 'hsl(210,38.5%,94.9%)',
						color: 'hsl(210,38.5%,94.9%)',
					},
					_hover: {
						bgColor: 'hsl(210,38.5%,94.9%, 0.1)',
						borderColor: 'hsl(210,38.5%,94.9%)',
						color: 'hsl(210,38.5%,94.9%)',
					},
					borderColor: 'hsl(210,38.5%,94.9%)',
					color: 'hsl(210,38.5%,94.9%)',
				}),
				solid: (props: any) => ({
					...defaultChakraTheme.components.Button.variants.solid(
						props
					),
					_active: {
						bg: 'hsl(214.3,31.8%,91.4%)',
					},
					_hover: {
						bg: 'hsl(214.3,31.8%,91.4%)',
					},
					bg: 'hsl(210,38.5%,94.9%)',
					color: 'black',
				}),
			},
		},
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: 'none',
				},
				_hover: {
					textDecoration: `none`,
				},
			},
		},
	},
	fonts: {
		body: 'Josefin Sans, -apple-system, BlinkMacSystemFont, "Segoe UI",Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
	styles: {
		global: (props: GlobalProps) => ({
			body: {
				bg: mode('hsl(0,0%,98%)', 'hsl(235,20.7%,11.4%)')(props),
				fontSize: 'clamp(12px, 1.25vw, 18px)',
			},
			h1: {
				fontSize: '2em',
				fontWeight: 'bold !important',
			},
			h2: {
				fontSize: '1.5em',
				fontWeight: 'bold !important',
			},
			h3: {
				fontSize: '1.17em',
				fontWeight: 'bold !important',
			},
			h4: {
				fontWeight: 'bold !important',
			},
		}),
	},
});
