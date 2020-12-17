<script>
    import { Link } from "svelte-routing";
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

    .nav-link {
        padding: 0.3em;
    }
</style>

<nav class="navigation"><i class="material-icons nav-link">add</i></nav>
