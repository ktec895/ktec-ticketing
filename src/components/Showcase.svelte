<style>
    /*#showcase {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 2fr 1fr;
        background-size: cover;
    }

    #showcase-image {
        justify-self: center;
        grid-row: 1 / span 2;
    }

    #showcase-heading {
        align-self: flex-end;
        font-family: "Yanone Kaffeesatz", sans-serif;
        font-size: xxx-large;
    }

    #showcase-message {
        align-self: flex-start;
        font-family: "Numans", sans-serif;
        font-size: large;
    }*/

    .showcase {
        color: #333;
        text-align: center;
        padding: 10em 0;
    }

    .showcase-heading {
        font-size: 4rem;
        font-size: clamp(3rem, calc(5vw + 1rem), 4.5rem);
        line-height: 1;
        text-transform: uppercase;
    }

    .showcase-message {
        font-family: "Numans", sans-serif;
        font-size: large;
    }
</style>

<div class="showcase">
    <div class="container">
        <p class="showcase-heading">Problems with our equipment?</p>
        <p class="showcase-message">
            Press the
            <i class="material-icons">add</i>
            to create a ticket!
        </p>
    </div>
</div>
