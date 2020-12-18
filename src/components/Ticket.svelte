<script>
  export let ticket;
  export let toggleTicketDetailsModal;

  ticket.updates = [
    {
      date: new Date(),
      status: "DONE",
      message: "Problem solved",
    },
    {
      date: new Date(),
      status: "IN PROGRESS",
      message:
        "We've found the source of the problem. We should be finished soon!",
    },
  ];
</script>

<style>
  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .ticket-section {
    margin: 1em 0;
  }

  .update {
    margin: 1em 0;
  }
</style>

<div class="modal">
  <div class="modal-content">
    <div class="navigation">
      <i
        on:click={toggleTicketDetailsModal}
        class="material-icons icon-button">clear</i>
    </div>
    <div class="ticket-header">
      <h1>{ticket.summary}</h1>
      <p>{ticket.timestamp.toLocaleDateString()}</p>
    </div>
    <div class="ticket-section">
      <p>Category: {ticket.category}</p>
      <p>Status: {ticket.status}</p>
    </div>
    <div class="ticket-section">
      <h2>Description</h2>
      <p>{ticket.description}</p>
    </div>
    <div class="ticket-section ticket-updates">
      <h2>Updates</h2>
      {#each ticket.updates as update}
        <div class="update">
          <p>{update.date.toLocaleString()} &bullet; {update.status}</p>
          <p>{update.message}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
