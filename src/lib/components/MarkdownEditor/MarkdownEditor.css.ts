import { token } from "@davidnet-net/svelte-ui/tokens";
import { globalStyle, style } from "@vanilla-extract/css";

export const markdownEditor = style({
	position: "relative",
	width: "100%",
	height: "100%",
	overflow: "auto",
	padding: "2rem",
	color: token.theme.color.text.default,
	fontFamily: token.global.font.family.sans
});

// Bind Crepe internal CSS variables directly to your design system tokens
globalStyle(`${markdownEditor} .crepe, ${markdownEditor} .milkdown`, {
	vars: {
		"--crepe-color-background": "transparent",
		"--crepe-color-surface": "transparent", // Removes the block background color difference
		"--crepe-color-surface-low": "transparent",
		"--crepe-color-on-background": token.theme.color.text.default,
		"--crepe-color-on-surface": token.theme.color.text.default,
		"--crepe-color-on-surface-variant": token.theme.color.text.secondary,
		"--crepe-color-primary": token.theme.color.link.default,
		"--crepe-color-outline": token.theme.color.border.default,
		"--crepe-color-hover": token.theme.color.surface.default.hover,
		"--crepe-color-selected": token.theme.color.surface.default.pressed,
		"--crepe-font-default": token.global.font.family.sans,
		"--crepe-font-title": token.global.font.family.brand,
		"--crepe-font-code": token.global.font.family.mono
	},
	outline: "none",
	height: "100%"
});

// Remove Crepe's default block card wrapper background and 3D shadows
globalStyle(
	`${markdownEditor} .crepe-block, ${markdownEditor} .milkdown-block, ${markdownEditor} .table-block-wrapper`,
	{
		boxShadow: "none !important",
		backgroundColor: "transparent !important",
		border: "none !important"
	}
);

globalStyle(
	`${markdownEditor} .milkdown-table-block button, ${markdownEditor} .button-group button`,
	{
		color: token.theme.color.text.default,
		background: "transparent",
		border: "none",
		borderRadius: token.global.radius.small,
		cursor: "pointer",
		padding: "0.3rem 0.5rem",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		transition: `background ${token.global.transition.duration.standard} ${token.global.transition.timing.ease}`
	}
);

globalStyle(
	`${markdownEditor} .milkdown-table-block button:hover, ${markdownEditor} .button-group button:hover`,
	{
		backgroundColor: token.theme.color.surface.default.hover
	}
);

globalStyle(
	`${markdownEditor} .milkdown-icon, ${markdownEditor} .milkdown-icon svg, ${markdownEditor} .milkdown-icon path`,
	{
		color: token.theme.color.text.default,
		fill: "currentColor !important",
		stroke: "currentColor !important"
	}
);

// Table borders and focused cell highlights using your design tokens
globalStyle(`${markdownEditor} table`, {
	borderCollapse: "collapse",
	borderColor: token.theme.color.border.default,
	margin: "1rem 0"
});

globalStyle(`${markdownEditor} th, ${markdownEditor} td`, {
	border: `1px solid ${token.theme.color.border.default}`,
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	paddingLeft: token.global.spacing.small,
	paddingRight: token.global.spacing.small,
	textAlign: "left",
	outline: "none"
});

globalStyle(`${markdownEditor} th`, {
	fontWeight: token.global.font.weight.bold,
	backgroundColor: token.theme.color.surface.raised.normal
});

globalStyle(
	`${markdownEditor} th:focus-within, ${markdownEditor} td:focus-within, ${markdownEditor} .selectedCell`,
	{
		borderColor: token.theme.color.border.focus,
		boxShadow: `inset 0 0 0 1px ${token.theme.color.border.focus}`,
		backgroundColor: token.theme.color.surface.raised.normal
	}
);
