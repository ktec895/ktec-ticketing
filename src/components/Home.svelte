<script>
  import Showcase from "./Showcase.svelte";
  import TicketList from "./TicketList.svelte";
  import NewTicket from "./NewTicket.svelte";
  import Ticket from "./Ticket.svelte";
  export let showNewTicketModal;
  export let showTicketDetailsModal;
  export let toggleNewTicketModal;
  export let toggleTicketDetailsModal;

  let openTickets = [
    {
      timestamp: new Date(),
      summary: "Water on the Soundboard",
      description:
        "I spilled water on the soundboard and the station is going crazy",
      category: "BROADCAST",
      status: "OPEN",
    },
  ];
  let closedTickets = [];
  let ticket;

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

  const setTicket = (newTicket) => (ticket = newTicket);
</script>

<style>
  h2 {
    text-align: center;
  }
</style>

<!-- Main page items -->
<Showcase />
<h2>Open Tickets</h2>
<TicketList tickets={openTickets} {setTicket} {toggleTicketDetailsModal} />
<h2>Closed Tickets</h2>
<TicketList tickets={closedTickets} {setTicket} {toggleTicketDetailsModal} />

<!-- Modals -->
{#if showNewTicketModal}
  <NewTicket {toggleNewTicketModal} />
{/if}

{#if showTicketDetailsModal && ticket}
  <Ticket {toggleTicketDetailsModal} {ticket} />
{/if}

<!-- For testing purposes -->
<button
  style="position: fixed; bottom: 60px; right: 10px;"
  on:click={() => (openTickets = addTicket(openTickets, 'OPEN'))}>Add open
  ticket</button>
<button
  style="position: fixed; bottom: 10px; right: 10px;"
  on:click={() => (closedTickets = addTicket(closedTickets, 'CLOSED'))}>Add
  closed ticket</button>
