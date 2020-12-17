<script>
  import Showcase from "./Showcase.svelte";
  import TicketList from "./TicketList.svelte";

  let openTickets = [];
  let closedTickets = [];

  const addTicket = (list, status) => {
    return [
      ...list,
      {
        timestamp: new Date(),
        summary: `${status} Ticket ${list.length}`,
        description: `Description ${list.length}`,
        category: "DJ",
        status,
      },
    ];
  };
</script>

<style>
  h2 {
    text-align: center;
  }
</style>

<Showcase />
<h2>Open Tickets</h2>
<TicketList tickets={openTickets} />
<h2>Closed Tickets</h2>
<TicketList tickets={closedTickets} />

<!-- For testing purposes -->
<button
  style="position: fixed; bottom: 40px; right: 10px;"
  on:click={() => (openTickets = addTicket(openTickets, 'OPEN'))}>Add open
  ticket</button>
<button
  style="position: fixed; bottom: 10px; right: 10px;"
  on:click={() => (closedTickets = addTicket(closedTickets, 'CLOSED'))}>Add
  closed ticket</button>
