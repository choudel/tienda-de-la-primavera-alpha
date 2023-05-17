<script lang="ts">
  import Nav from "../lib/nav.svelte";
  import Title from "../lib/title.svelte";
  import Search from "../lib/search.svelte";
  import Card from "../lib/card.svelte";
  import Footer from "../lib/footer.svelte";
  import type { Items } from "$houdini";
  /* @type { import('./$houdini').PageData } */
  export let data: Items;

  $: ({ Items } = data);
</script>

<main>
  <header>
    <Nav />
    {#if $Items.fetching}
      <h3>wait</h3>
    {:else}
      {#each $Items.data.items.nodes as node}
        {node.id}
      {:else}
        <p>No Favorites Selected</p>
      {/each}
    {/if}
  </header>
  <section class="hero">
    <Title />
    <Search />
  </section>
  <section class="container">
    <Card item={$Items.data.items.nodes} />
  </section>
  <footer>
    <Footer />
  </footer>
</main>

<style lang="scss">
  main {
    z-index: 0;
    display: grid;
    grid-template-rows: auto 35vmax 35vmax 20vmax;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 71.35%
      ),
      #a4bc92;
    @media only screen and (max-width: 815px) {
      grid-template-rows: 10vmax auto auto 20vmax;
      padding: 16px;
    }
  }
  header {
    z-index: 2;
    padding: 16px;
  }
  section {
    z-index: 1;
    padding-left: 74px;
    padding-right: 74px;
    @media only screen and (max-width: 815px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .container {
    z-index: 1;
    grid-template-columns: auto auto auto auto;
    gap: 8px;
    @media only screen and (max-width: 815px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
    }
  }
  footer {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
  }
</style>
