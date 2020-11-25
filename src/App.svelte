<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Home from './components/Home.svelte'
  import NewTicket from './components/NewTicket.svelte'
  import Ticket from './components/Ticket.svelte'

  export let url = ''
</script>

<style>
  i {
    color: white;
  }
</style>

<Router {url}>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">KTEC Ticketing</span>
        <div class="mdl-layout-spacer" />
        <nav>
          <Link to="/new">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">add</i>
            </button>
          </Link>
          <Link to="/">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">home</i>
            </button>
          </Link>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/new">
        <NewTicket />
      </Route>
      <Route path="/view/:id" let:params>
        <Ticket id={params._id} />
      </Route>
    </main>
  </div>
</Router>
