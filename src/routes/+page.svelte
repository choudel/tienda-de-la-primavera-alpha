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
  </header>
  <section class="hero">
    <div class="left">
      <Title />
      <Search />
    </div>
    <div class="right">
      <img src="woman.webp" alt="woman" />
    </div>
  </section>
  <section class="container">
    <div class="outer">
      <div class="icon">
        <img src="Polygon-up.svg" alt="up" />
      </div>
    </div>
    <Card item={$Items.data.items.nodes} />
    <div class="card">
      <h1>Click to view all products</h1>
    </div>
    <div class="outer">
      <div class="icon">
        <img src="Polygon-down.svg" alt="down" />
      </div>
    </div>
  </section>
  <footer>
    <Footer />
  </footer>
</main>

<style lang="scss">
  $break: 815px;
  @font-face {
    font-family: "Montserrat Alternates Regular";
    src: url("/fonts/MontserratAlternates-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "Montserrat Alternates Bold";
    src: url("/fonts/MontserratAlternates-Bold.ttf");
    font-display: swap;
  }
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
  .hero {
    display: grid;
    grid-template-columns: auto 40vmax;
    grid-template-rows: 35vmax;
    gap: 8px;
    @media only screen and (max-width: 815px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
    }
  }
  .left {
    display: grid;
    height: 35vmax;
    justify-items: center;
    background: #ddffbb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    @media only screen and (max-width: 815px) {
      background: none;
      box-shadow: none;
      height: auto;
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
  .right {
    height: 35vmax;
    border-radius: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 815px) {
      display: none;
    }
  }
  .right > img {
    display: grid;
    width: 40vmax;
    height: 35vmax;
    object-fit: cover;
    border-radius: 32px;
  }
  .container {
    display: grid;
    z-index: 1;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    gap: 8px;
    @media only screen and (max-width: 815px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
      justify-content: center;
    }
  }
  .card {
    display: grid;
    width: auto;
    height: calc(35vmax - 42px);
    background: #b3c99c;
    border: 2px solid #ddffbb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 16px;
    align-items: center;
    justify-items: center;
    color: #004242;
    @media only screen and (max-width: 815px) {
      display: none;
    }
  }
  .card > h1 {
    display: grid;
    width: 15vw;
    height: 15vw;
    font-family: "Montserrat Alternates Bold";
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: 815px) {
      height: auto;
      width: auto;
      padding: 0;
    }
  }
  .icon {
    display: none;
    @media only screen and (max-width: $break) {
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 20px;
      height: 20px;
      background: #ddffbb;
      border-radius: 50px;
    }
  }
  .outer {
    display: none;
    @media only screen and (max-width: $break) {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }
  footer {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
  }
</style>
