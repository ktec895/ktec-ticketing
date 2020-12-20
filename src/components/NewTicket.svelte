<script>
  export let toggleNewTicketModal;
</script>

<style>
  label {
    font-family: proxima-nova, sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
  }

  .input-container label {
    flex: 1;
  }
  .input-container input,
  .input-container select,
  .input-container textarea {
    flex: 3;
    padding: 5px;
    border: 2px solid #aaa;
    border-radius: 5px;
  }

  .input-container > * {
    margin: 0.5em;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    .input-container {
      flex-direction: column;
    }
  }
</style>

<div class="modal">
  <div class="modal-content">
    <div class="navigation">
      <i
        on:click={toggleNewTicketModal}
        class="material-icons icon-button">clear</i>
    </div>
    <h1 class="centered">New Ticket</h1>
    <div class="input-container">
      <label for="summary">Summary</label>
      <input type="text" name="summary" maxlength="100" />
    </div>
    <div class="input-container">
      <label for="category">Category</label>
      <select name="category">
        <option value="DJ">DJ Equipment</option>
        <option value="BROADCAST">Broadcasting</option>
        <option value="STREAM">Live Stream</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
    <div class="input-container">
      <label for="description">Description </label>
      <textarea name="description" rows={10} />
    </div>
    <div class="button-container"><button>SUBMIT</button></div>
  </div>
</div>
