<script>
  import Home from "./components/Home.svelte";
  import Navigation from "./components/Navigation.svelte";

  let showNewTicketModal = false;
  let showTicketDetailsModal = false;

  const toggleNewTicketModal = () => (showNewTicketModal = !showNewTicketModal);
  const toggleTicketDetailsModal = () =>
    (showTicketDetailsModal = !showTicketDetailsModal);
</script>

<Navigation {toggleNewTicketModal} />
<Home
  {toggleNewTicketModal}
  {toggleTicketDetailsModal}
  {showNewTicketModal}
  {showTicketDetailsModal} />
