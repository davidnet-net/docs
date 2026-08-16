<script lang="ts">
	import { onMount } from "svelte";
	import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
	import { commonmark } from "@milkdown/preset-commonmark";
	import { gfm } from "@milkdown/preset-gfm";
	import { clipboard } from "@milkdown/plugin-clipboard";
	import { automd } from "@milkdown/plugin-automd";
	import * as styles from "./MarkdownEditor.css";

	let editorElement: HTMLDivElement;
	let editorInstance: Editor;

	onMount(() => {
		Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, editorElement);
				ctx.set(
					defaultValueCtx,
					"# Tables Test\n\n| Header 1 | Header 2 |\n| --- | --- |\n| Cell 1 | Cell 2 |"
				);
			})
			.use(commonmark)
			.use(gfm)
			.use(clipboard)
			.use(automd)
			.create()
			.then((editor) => {
				editorInstance = editor;
			});

		return () => {
			editorInstance?.destroy();
		};
	});
</script>

<div bind:this={editorElement} class={styles.markdownEditor}></div>
