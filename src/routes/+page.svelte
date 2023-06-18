<script lang="ts">
    import { page, theme } from "$lib/stores";
    import { goto } from "$app/navigation";

    function start() {
        page.set(0);
        goto(`/pages/${$page}`);
    }

    function handleKeyup(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowRight":
                start();
                break;

            case " ": // Space Key
                start();
                break;

            default:
                break;
        }
    }

    function switchTheme() {
        switch ($theme) {
            case "dark":
                theme.set("light");
                break;

            case "light":
                theme.set("dark");
                break;

            default:
                break;
        }
    }
</script>

<svelte:window on:keyup={handleKeyup} />

<div class="container">
    <h1>Die Geschichte des PCs</h1>
    <h2>Eine Reise durch die Welt des Personal Computers</h2>

    <button class="btn btn-primary" on:click={start}>Start</button>
</div>

<button class="btn btn-secondary" id="themeButton" on:click={switchTheme}>
    {#if $theme == "dark"}
        <i class="fa-regular fa-lightbulb" />
        {:else}
        <i class="fa-solid fa-lightbulb"></i>
    {/if}
</button>

<style>
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    #themeButton {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
    }
</style>
