<script lang="ts">
    let currentNum = 0;
    let binary = decimalToBinaryPadded(currentNum);

    let andFirst = 10;
    let andSecond = 27;

    let orFirst = 51;
    let orSecond = 37;

    let xorFirst = 29;
    let xorSecond = 41;

    function increase() {
        currentNum += 1;
        if (currentNum > 255) currentNum = 0;
        binary = decimalToBinaryPadded(currentNum);
    }

    function decrease() {
        currentNum -= 1;
        if (currentNum < 0) currentNum = 255;
        binary = decimalToBinaryPadded(currentNum);
    }

    function decimalToBinaryPadded(number: number) {
        let binary = "";

        for (let i = 7; i >= 0; i--) {
            const bit = (number >> i) & 1;
            binary += bit;
        }

        return binary;
    }

    function decimalToBinary(number: number) {
        if (number === 0) {
            return "0";
        }

        let binary = "";
        while (number > 0) {
            binary = (number % 2) + binary;
            number = Math.floor(number / 2);
        }

        return binary;
    }

    function padNumber(number: number) {
        // Convert number to string
        let numberString = number.toString();

        // Calculate the number of zeros to pad
        let zerosToPad = 8 - numberString.length;

        // Pad the string with zeros
        let paddedString = "0".repeat(zerosToPad) + numberString;

        return paddedString;
    }

    function handleKeydown(event: KeyboardEvent) {
        switch (event.key) {
            case "+":
                increase();
                break;

            case "-":
                decrease();
                break;

            default:
                break;
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<h1 class="title">Wie Rechner rechnen - Binärsystem und Logic Gates</h1>

<div class="container">
    <div class="section">
        <h2>Binäres Zählen</h2>
        <div class="binary">
            <div>
                {padNumber(currentNum)}
            </div>
            <div>
                {binary}
            </div>
            <button class="btn btn-danger" on:click={decrease}>-</button>
            <button class="btn btn-success" on:click={increase}>+</button>
        </div>
    </div>

    <div class="section">
        <h2>AND Gate</h2>

        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AND_ANSI_Labelled.svg/120px-AND_ANSI_Labelled.svg.png"
            alt=""
            style="background-color: white;"
        />

        <div class="binary">
            <input min="0" max="255" type="number" bind:value={andFirst} /> &
            <input min="0" max="255" type="number" bind:value={andSecond} />
            <div>
                {decimalToBinaryPadded(andFirst)}
            </div>
            <div>
                {decimalToBinaryPadded(andSecond)}
            </div>
            <hr />
            <div>
                {decimalToBinaryPadded(andFirst & andSecond)}
            </div>
        </div>
    </div>

    <div class="section">
        <h2>OR Gate</h2>

        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/120px-OR_ANSI_Labelled.svg.png"
            alt=""
            style="background-color: white;"
        />

        <div class="binary">
            <input min="0" max="255" type="number" bind:value={orFirst} /> ||
            <input min="0" max="255" type="number" bind:value={orSecond} />
            <div>
                {decimalToBinaryPadded(orFirst)}
            </div>
            <div>
                {decimalToBinaryPadded(orSecond)}
            </div>
            <hr />
            <div>
                {decimalToBinaryPadded(orFirst || orSecond)}
            </div>
        </div>
    </div>

    <div class="section">
        <h2>XOR Gate</h2>

        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/120px-XOR_ANSI_Labelled.svg.png"
            alt=""
            style="background-color: white;"
        />

        <div class="binary">
            <input min="0" max="255" type="number" bind:value={xorFirst} /> ^
            <input min="0" max="255" type="number" bind:value={xorSecond} />
            <div>
                {decimalToBinaryPadded(xorFirst)}
            </div>
            <div>
                {decimalToBinaryPadded(xorSecond)}
            </div>
            <hr />
            <div>
                {decimalToBinaryPadded(xorFirst ^ xorSecond)}
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Komplexe Schaltkreise - Half Adder</h2>
        <img src="https://i.stack.imgur.com/Dj6XM.jpg" alt="" />
    </div>
</div>

<style>
    .section {
        margin-bottom: 3rem;
    }

    .binary {
        font-family: "Inconsolata", monospace;
        font-size: 3rem;
    }

    .binary button {
        margin-top: 0.5rem;
    }

    .binary input {
        font-size: 1.5rem;
    }

    img {
        max-width: 350px;
    }

</style>
