<script>
  import { onMount } from 'svelte'
  export let id

  let ticket

  onMount(async () => {})
</script>

{#if ticket}
  <h1>{id}</h1>
{/if}
