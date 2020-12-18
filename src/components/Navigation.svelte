<script>
    export let toggleNewTicketModal;
</script>

<style>
    i {
        color: black;
    }

    .navigation {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        width: 100%;
    }
</style>

<nav class="navigation">
    <i
        on:click={toggleNewTicketModal}
        class="material-icons icon-button">add</i>
</nav>
