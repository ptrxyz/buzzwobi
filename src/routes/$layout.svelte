<script>
    import '$lib/style.scss'
</script>

<pageview>
    <slot />
</pageview>

<style lang="scss">
    pageview {
        background-color: #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        font-family: 'Binance Plex', sans-serif;
    }
</style>
