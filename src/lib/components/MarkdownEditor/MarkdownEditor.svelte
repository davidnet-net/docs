<script lang="ts">
	import { onMount } from "svelte";
	import { Crepe } from "@milkdown/crepe";
	import "@milkdown/crepe/theme/common/style.css";
	import "@milkdown/crepe/theme/frame-dark.css";
	import * as styles from "./MarkdownEditor.css";

	let editorElement: HTMLDivElement;
	let crepeInstance: Crepe;

	onMount(() => {
		crepeInstance = new Crepe({
			root: editorElement,
			defaultValue: `# Tables Test\n\n| Feature | Description | Example |\n| --- | --- | --- |\n| 🎨 Theme | Create your own theme with CSS | Nord, Dracula |\n| 🧩 Plugin | Create your own plugin | Search, Collab |`
		});

		crepeInstance.create().then(() => {
			// Editor is ready and fully interactive
		});

		return () => {
			crepeInstance?.destroy();
		};
	});
</script>

<div bind:this={editorElement} class={styles.markdownEditor}></div>
