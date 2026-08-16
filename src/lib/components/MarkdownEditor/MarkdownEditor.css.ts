import { token } from "@davidnet-net/svelte-ui/tokens";
import { globalStyle, style } from "@vanilla-extract/css";

// Changed from editorContainer to markdownEditor
export const markdownEditor = style({
	width: "100%",
	height: "100%",
	overflow: "auto",
	padding: "2rem",
	color: token.theme.color.text.default,
	fontFamily: "sans-serif"
});

// Scope Milkdown internal classes using markdownEditor
globalStyle(`${markdownEditor} .milkdown`, {
	outline: "none",
	height: "100%"
});

globalStyle(`${markdownEditor} .editor`, {
	outline: "none",
	minHeight: "100%",
	color: "inherit"
});

globalStyle(`${markdownEditor} h1`, {
	fontSize: "2.2rem",
	fontWeight: "bold",
	marginTop: "1.5rem",
	marginBottom: "0.5rem",
	color: "inherit"
});

globalStyle(`${markdownEditor} h2`, {
	fontSize: "1.75rem",
	fontWeight: "bold",
	marginTop: "1.25rem",
	marginBottom: "0.4rem",
	color: "inherit"
});

globalStyle(`${markdownEditor} p`, {
	margin: "0.75rem 0",
	lineHeight: "1.6",
	color: "inherit"
});

globalStyle(`${markdownEditor} ul`, {
	paddingLeft: "1.5rem",
	margin: "0.75rem 0",
	listStyleType: "disc"
});

globalStyle(`${markdownEditor} li`, {
	margin: "0.25rem 0",
	color: "inherit"
});

globalStyle(`${markdownEditor} strong, ${markdownEditor} b`, {
	fontWeight: "bold",
	color: "inherit"
});

globalStyle(`${markdownEditor} em, ${markdownEditor} i`, {
	fontStyle: "italic",
	color: "inherit"
});

// Blockquotes styling
globalStyle(`${markdownEditor} blockquote`, {
	borderLeft: `4px solid ${token.theme.color.border.default}`, // Adjust to your token border
	margin: "1rem 0",
	paddingLeft: "1rem",
	opacity: 0.8,
	color: "inherit"
});

// Links styling
globalStyle(`${markdownEditor} a`, {
	color: token.theme.color.link.default,
	textDecoration: "underline",
	cursor: "pointer"
});

globalStyle(`${markdownEditor} table`, {
	borderCollapse: "collapse",
	width: "max-content",
	minWidth: "2rem",
	margin: "1rem 0",
	color: "inherit"
});

globalStyle(`${markdownEditor} th, ${markdownEditor} td`, {
	border: `1px solid ${token.theme.color.border.default}`,
	margin: "0px",
	padding: "0px",
	paddingLeft: token.global.spacing.small,
	paddingRight: token.global.spacing.small,
	textAlign: "left"
});

globalStyle(`${markdownEditor} th`, {
	fontWeight: "bold",
	backgroundColor: token.theme.color.surface.raised.normal
});
