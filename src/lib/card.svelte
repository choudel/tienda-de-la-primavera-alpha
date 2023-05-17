<script lang="ts">
  import {
    fragment,
    graphql,
    type ItemInfo,
    type ItemInfo$data,
  } from "$houdini";

  export let item: ItemInfo;

  const stuff: ItemInfo$data = fragment(
    item,
    graphql(`
      fragment ItemInfo on Item {
        id
        image
        item
        price
        sellText
      }
    `)
  );
  $: console.log($stuff);
</script>

{#each $stuff as node}
  {node.id}
  <div class="card">
    <div class="item-pic">
      <img src={node.image} alt="bag" />
    </div>
    <div class="label">
      <div class="item-name">{node.item}</div>
      <div class="sell-text">{node.sellText}</div>
      <div class="price">{node.price} D.A</div>
    </div>
  </div>
{/each}

<style lang="scss">
  img {
    max-width: 20vw;
    height: auto;
  }
</style>
