<script lang="ts">
    import {theme} from "$lib/stores"
</script>

<svelte:head>
    <link rel="stylesheet" href={`/theme/${$theme}.css`}>
</svelte:head>

<slot />