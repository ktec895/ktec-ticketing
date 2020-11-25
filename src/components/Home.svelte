<script>
  import { onMount } from 'svelte'

  let openTickets = []
  let closedTickets = []

  onMount(async () => {
    try {
      let res = await fetch('/api/ticket/open?limit=5&page=1')

      if (res.status === 200) {
        openTickets = await res.json()
        openTickets = openTickets.map((ticket) => {
          return { ...ticket, date: new Date(ticket.timestamp) }
        })
      } else throw new Error(`invalid response code: ${res.status}`)

      res = await fetch('/api/ticket/closed?limit=5&page=1')

      if (res.status === 200) {
        closedTickets = await res.json()
        closedTickets = closedTickets.map((ticket) => {
          return { ...ticket, date: new Date(ticket.timestamp) }
        })
      } else throw new Error(`invalid response code: ${res.status}`)
    } catch (err) {
      console.warn(`Error retrieving tickets: ${err.message}`)
    }
  })
</script>

<style>
  .ticket {
    display: flex;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    width: 80%;
    margin: 1em auto;
    padding: 1em;
    justify-content: space-between;
  }

  .ticket:hover {
    background-color: #eee;
  }

  .section-header {
    text-align: center;
  }
</style>

<h2 class="section-header">Open Tickets</h2>
{#if openTickets.length > 0}
  {#each openTickets as ticket}
    <div class="ticket">
      <b>{ticket.summary}</b>
      <p style="margin: 0">{ticket.date.toLocaleString()}</p>
    </div>
  {/each}
{:else}
  <h3 class="section-header">No open tickets</h3>
{/if}
<h2 class="section-header">Closed Tickets</h2>
{#if closedTickets.length > 0}
  {#each closedTickets as ticket}
    <div class="ticket">
      <b>{ticket.summary}</b>
      <p style="margin: 0">{ticket.date.toLocaleString()}</p>
    </div>
  {/each}
{:else}
  <h3 class="section-header">No closed tickets</h3>
{/if}
