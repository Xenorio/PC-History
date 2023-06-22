<script lang="ts">
    import { page } from "$lib/stores";
    import { goto } from "$app/navigation";

    function nextPage() {
        if ($page >= 6) {
            page.set(0)
            goto('/')
            return;
        }

        page.set($page + 1);
        goto(`/pages/${$page}`);
    }

    function prevPage() {
        if ($page <= 0) {
            page.set(0);
            goto("/");
            return;
        }

        page.set($page - 1);
        goto(`/pages/${$page}`);
    }

    function handleKeyup(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowLeft":
                prevPage();
                break;

            case "ArrowRight":
                nextPage();
                break;

            default:
                break;
        }
    }
</script>

<svelte:window on:keyup={handleKeyup} />

<div id="pagenav">
    <span id="navprev">
        {#if $page > 0}
            <button class="btn btn-primary" on:click={prevPage}
                ><i class="fa-solid fa-arrow-left" /></button
            >
        {:else}
            <button class="btn btn-primary" on:click={() => goto("/")}
                ><i class="fa-solid fa-house" /></button
            >
        {/if}
    </span>

    <span id="navnext">
        {#if $page < 5}
            <button class="btn btn-primary" on:click={nextPage}
                ><i class="fa-solid fa-arrow-right" /></button
            >
        {:else}
            <button class="btn btn-primary" on:click={nextPage}
                ><i class="fa-solid fa-house" /></button
            >
        {/if}
    </span>
</div>

<slot />
