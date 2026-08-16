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
		// Backgrounds & Surfaces
		"--crepe-color-background": "transparent",
		"--crepe-color-surface": "transparent",
		"--crepe-color-surface-low": "transparent",

		// Text Colors
		"--crepe-color-on-background": token.theme.color.text.default,
		"--crepe-color-on-surface": token.theme.color.text.default,
		"--crepe-color-on-surface-variant": token.theme.color.text.secondary,

		// Accents & States
		"--crepe-color-primary": token.theme.color.link.default,
		"--crepe-color-outline": token.theme.color.border.default,
		"--crepe-color-hover": token.theme.color.surface.default.hover,
		"--crepe-color-selected": token.theme.color.surface.default.pressed,
		"--crepe-color-error": token.theme.color.text.danger,
		"--crepe-color-inline-code": token.theme.color.text.primary,

		// Typography Variables from Documentation
		"--crepe-font-default": token.global.font.family.sans,
		"--crepe-font-title": token.global.font.family.brand,
		"--crepe-font-code": token.global.font.family.mono,

		// Remove Crepe default shadows globally
		"--crepe-shadow-1": "none",
		"--crepe-shadow-2": "none"
	},
	outline: "none",
	height: "100%"
});

// Remove Crepe's default block card wrapper background and shadows
globalStyle(
	`${markdownEditor} .crepe-block, ${markdownEditor} .milkdown-block, ${markdownEditor} .table-block-wrapper`,
	{
		boxShadow: "none !important",
		backgroundColor: "transparent !important",
		border: "none !important"
	}
);

// Standardize button styles inside toolbars/groups
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

// --- TABLE ITSELF (UNTOUCHED & TRANSPARENT) ---
globalStyle(`${markdownEditor} table`, {
	borderCollapse: "collapse",
	borderColor: token.theme.color.border.default,
	margin: "1rem 0",
	backgroundColor: "transparent !important"
});

globalStyle(`${markdownEditor} th, ${markdownEditor} td`, {
	border: `1px solid ${token.theme.color.border.default}`,
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	paddingLeft: token.global.spacing.small,
	paddingRight: token.global.spacing.small,
	textAlign: "left",
	outline: "none",
	backgroundColor: "transparent !important"
});

globalStyle(`${markdownEditor} th`, {
	fontWeight: token.global.font.weight.bold,
	backgroundColor: "transparent !important"
});

globalStyle(
	`${markdownEditor} th:focus-within, ${markdownEditor} td:focus-within, ${markdownEditor} .selectedCell`,
	{
		borderColor: token.theme.color.border.focus,
		boxShadow: `inset 0 0 0 1px ${token.theme.color.border.focus}`,
		backgroundColor: token.theme.color.surface.raised.normal
	}
);

// Clean up shadows and filters on all toolbars, handles, and button groups
globalStyle(
	`${markdownEditor} .milkdown-table-block, ${markdownEditor} .button-group, ${markdownEditor} .crepe-toolbar, ${markdownEditor} .table-block-handle, ${markdownEditor} .drag-handle, ${markdownEditor} .handle, ${markdownEditor} .cell-handle`,
	{
		boxShadow: "none !important",
		filter: "none !important",
		outline: "none !important"
	}
);

// Style the popup button group when it opens
globalStyle(`${markdownEditor} .button-group`, {
	backgroundColor: `${token.theme.color.surface.raised.normal} !important`,
	border: `1px solid ${token.theme.color.border.default} !important`,
	borderRadius: `${token.global.radius.medium} !important`,
	padding: `${token.global.spacing.xsmall} !important`,
	gap: `${token.global.spacing.xsmall} !important`,
	alignItems: "center !important"
});

// Give the actual compact buttons (both the `=` drag handle and the `+` add buttons) a nice small background, border, and larger size
globalStyle(
	`${markdownEditor} .handle, ${markdownEditor} .cell-handle, ${markdownEditor} [data-role*="drag-handle"]`,
	{
		backgroundColor: `${token.theme.color.surface.raised.normal} !important`,
		border: `1px solid ${token.theme.color.border.default} !important`,
		borderRadius: `${token.global.radius.small} !important`,
		padding: "0.4rem 0.75rem !important",
		minWidth: "2rem !important",
		minHeight: "1.5rem !important",
		display: "inline-flex !important",
		alignItems: "center !important",
		justifyContent: "center !important"
	}
);

// Force override hardcoded SVG widths/heights inside those buttons to make icons larger
globalStyle(
	`${markdownEditor} .handle svg, ${markdownEditor} .cell-handle svg, ${markdownEditor} [data-role*="drag-handle"] svg`,
	{
		width: "1.1rem !important",
		height: "1.1rem !important",
		maxWidth: "none !important",
		maxHeight: "none !important"
	}
);

// Style the + add buttons to match the rest of your design system
globalStyle(`${markdownEditor} .add-button`, {
	backgroundColor: `${token.theme.color.surface.raised.normal} !important`,
	border: `1px solid ${token.theme.color.border.default} !important`,
	borderRadius: `${token.global.radius.small} !important`,
	color: `${token.theme.color.text.default} !important`,
	cursor: "pointer !important",
	padding: "0.35rem 0.6rem !important",
	minWidth: "1.75rem !important",
	minHeight: "1.5rem !important",
	display: "inline-flex !important",
	alignItems: "center !important",
	justifyContent: "center !important",
	boxShadow: "none !important",
	outline: "none !important",
	transition: `background ${token.global.transition.duration.standard} ${token.global.transition.timing.ease}`
});

globalStyle(`${markdownEditor} .add-button:hover`, {
	backgroundColor: `${token.theme.color.surface.default.hover} !important`
});

// Size and center the SVG icon inside the + add button
globalStyle(`${markdownEditor} .add-button svg`, {
	width: "1.15rem !important",
	height: "1.15rem !important",
	maxWidth: "none !important",
	maxHeight: "none !important",
	fill: "currentColor !important",
	stroke: "currentColor !important"
});
