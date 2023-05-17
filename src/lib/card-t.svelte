<script lang="ts">
  let stuff = {
    items: {
      nodes: [
        {
          item: "hello",
          sellText: "qfsfsdfs",
          price: 1212,
        },
        {
          item: "hello",
          sellText: "qfsfsdfs",
          price: 1212,
        },
        {
          item: "hello",
          sellText: "qfsfsdfs",
          price: 1212,
        },
      ],
    },
  };
</script>

{#each stuff.items.nodes as node}
  <div class="card">
    <div class="item-pic">
      <img src="/static/shirt-mini.png" alt="bag" />
    </div>
    <div class="label">
      <div class="item-name">{node.item}</div>
      <div class="sell-text">{node.sellText}</div>
      <div class="price">{node.price} D.A</div>
    </div>
  </div>
{/each}

<slot />

<style lang="scss">
  img {
    max-width: 20vw;
    height: auto;
  }
</style>
