import { defaultTheme } from './src/theme';

type CustomTheme = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends CustomTheme {}
}
