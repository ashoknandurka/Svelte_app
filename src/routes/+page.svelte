<script>
    import {message} from '$lib/message'
    /**
   * @type {number}
   */
    let number;
    async function roll(){
      const response  = await fetch('/roll');
      number = await response.json();
    }
</script>
<h1>home</h1>
<p>this is home page.</p>
<p>{message}</p>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
    <p>You roled a {number}</p>
{/if}
