<script>
    export let tickets = [];
    export let toggleTicketDetailsModal;
    export let setTicket;
</script>

<style>
    .ticket-list {
        width: 100%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
        border-radius: 1em;
        overflow: hidden;
        color: black;
    }

    tr {
        transition: background-color 0.5s;
    }

    tr:hover {
        background: #ccc;
        cursor: pointer;
    }

    tr {
        background: white;
    }
    th {
        background: black;
        padding: 0.5em;
        color: white;
        font-weight: 700;
        padding: 1em;
        text-align: left;
    }
    th:nth-child(1) {
        padding-left: 2em;
    }
    th:last-child {
        padding-right: 2em;
    }

    td {
        padding: 0.75em;
        padding-left: 1em;
        text-align: left;
    }

    @media only screen and (max-width: 760px),
        (min-device-width: 768px) and (max-device-width: 1024px) {
        table,
        thead,
        tbody,
        th,
        td,
        tr {
            display: block;
        }

        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        td {
            border: none;
            position: relative;
            padding-left: 50%;
        }

        tr {
            border-bottom: 1px solid #ccc; /* SEE IF YOU LIKE THIS TRISTEN */
        }

        tr:last-child {
            border: none;
        }

        td:before {
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
        }

        td:nth-of-type(1):before {
            content: "Summary";
        }
        td:nth-of-type(2):before {
            content: "Category";
        }
        td:nth-of-type(3):before {
            content: "Time";
        }
    }
</style>

<div class="ticket-list">
    <table>
        <thead>
            <tr class="table-head">
                <th>Summary</th>
                <th>Category</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {#each tickets as ticket}
                <tr
                    on:click={function () {
                        setTicket(ticket);
                        toggleTicketDetailsModal();
                    }}>
                    <td>{ticket.summary}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.timestamp.toLocaleDateString()}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
