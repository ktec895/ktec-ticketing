<script>
  import { navigate } from 'svelte-routing'

  let summary = ''
  let description = ''
  let category = 'DJ'

  const postTicket = async () => {
    try {
      const body = { summary, description, category }

      const res = await fetch('/api/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.status === 201) navigate('/')
      else throw new Error(`invalid status code: ${res.status}`)
    } catch (err) {
      console.warn(`Error creating ticket: ${err}`)
    }
  }

  $: canSave = !!summary && !!description
</script>

<style>
  #fields {
    width: 80%;
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: white;
    padding: 2em;
  }

  #fields-title {
    text-align: center;
  }

  .field-row {
    display: flex;
    align-items: center;
  }

  .field-column {
    display: flex;
    flex-direction: column;
  }

  .field-item {
    margin-bottom: 1em;
  }
</style>

<div id="fields">
  <h1 id="fields-title">New Ticket</h1>
  <div class="field-column field-item">
    <label for="summary">Summary</label>
    <input bind:value={summary} type="text" name="summary" />
  </div>
  <div class="field-column field-item">
    <label for="description">Description</label>
    <textarea rows="8" bind:value={description} name="description" />
  </div>
  <div class="field-row field-item">
    <label style="flex-grow: 1" for="category">Category</label>
    <select
      style="margin: 0; flex-grow: 2"
      bind:value={category}
      name="category">
      <option value="DJ">DJ Equipment</option>
      <option value="BROADCAST">Broadcasting</option>
      <option value="STREAM">Live Stream</option>
      <option value="WEBSITE">Website</option>
      <option value="OTHER">Other</option>
    </select>
  </div>
  <div class="field-item">
    {#if canSave}
      <button
        class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
        on:click={postTicket}>Save</button>
    {:else}<button class="mdl-button mdl-js-button" disabled>Save</button>{/if}
    <button
      class="mdl-button mdl-js-button mdl-button--raised"
      on:click={() => navigate('/')}>Cancel</button>
  </div>
</div>
