<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let done = false

    function click(event) {
        done = !done
        dispatch('click', event.detail)
    }
</script>

<cell class:done on:click={click}><slot /></cell>

<style lang="scss">
    :root {
        --cl-white: white;
        --cl-blue: #4355fa;
    }

    cell {
        flex-basis: calc(25% - 30px / 4);
        font-family: sans-serif;
        color: var(--cl-blue);
        background-color: var(--cl-white);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        border: 3px solid var(--cl-blue);
        cursor: pointer;
        user-select: none;
        border-radius: 10px;

        &.done {
            --cl-white: #4355fa;
            --cl-blue: white;
        }
    }
</style>
