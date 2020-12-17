<script>
    export let tickets = [];
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
    }

    tr:hover {
        background-color: #444;
    }
    tr:nth-of-type(odd) {
        background: #eee;
    }

    th {
        background: #333;
        color: white;
        font-weight: bold;
    }

    td,
    th {
        padding: 6px;
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

<div class="container">
    <table>
        <thead>
            <tr class="table-head">
                <th>Summary</th>
                <th>Category</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {#each tickets as ticket}
                <tr>
                    <td>{ticket.summary}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.timestamp.toLocaleDateString()}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
