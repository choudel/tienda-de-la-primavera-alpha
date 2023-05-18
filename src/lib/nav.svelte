<script>
  // @ts-nocheck
  let selected = "start";
  let toggle = false;
  $: toggle;
  $: selected;
  let page_1 = [
    "page_1 Items_1",
    "page_1 Items_2",
    "page_1 Items_3",
    "page_1 Items_4",
    "page_1 Items_5",
  ];
  let page_2 = [
    "page_2 Items_1",
    "page_2 Items_2",
    "page_2 Items_3",
    "page_2 Items_4",
    "page_2 Items_5",
  ];
  let page_3 = [
    "page_3 Items_1",
    "page_3 Items_2",
    "page_3 Items_3",
    "page_3 Items_4",
    "page_3 Items_5",
  ];
  let page_4 = [
    "page_4 Items_1",
    "page_4 Items_2",
    "page_4 Items_3",
    "page_4 Items_4",
    "page_4 Items_5",
  ];
</script>

<nav
  class="accordion"
  id="start"
  style="
  --color1:#B3C99C;
  --color2:#C7E9B0;
  --color3:#DDFFBB;
  --color4:#A4BC92"
>
  <div class="first_accordion">
    <input
      class="first_accordion__input"
      type="checkbox"
      name="first_accordion"
      id="section1"
    />
    <label class="first_accordion__label" for="section1"
      ><div class="icon">
        <img src="humberger.svg" alt="humburger" />
      </div>
    </label>
    <a href="/" class="logo1"><div class="icon">P</div></a>

    <div class="first_accordion__content">
      <div class="second_accordion">
        <a href="/" class="login">Login</a>
        <a href="/" class="logo"><div class="icon">P</div></a>
        <a href="/" class="home">home</a>

        <input
          class="second_accordion__input"
          type="radio"
          name="second_accordion"
          id="page_1"
          value="pag1"
          bind:group={selected}
          on:click={selected != "pag1" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="page_1" id="page_1_id"
          >page_1</label
        >

        <div
          class="second_accordion__content"
          id="page_1__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_page_1">
              {#each page_1 as detail}
                <a href="/">{detail}</a>
              {/each}
            </div>
          {/if}
        </div>

        <input
          class="second_accordion__input"
          type="radio"
          name="second_accordion"
          id="page_2"
          value="tor"
          bind:group={selected}
          on:click={selected != "tor" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="page_2" id="page_2_id"
          >page_2</label
        >

        <div
          class="second_accordion__content"
          id="page_2__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_page_2">
              {#each page_2 as detail}
                <a href="/">{detail}</a>
              {/each}
            </div>
          {/if}
        </div>

        <input
          class="second_accordion__input"
          type="radio"
          name="second_accordion"
          id="page_3"
          value="tee"
          bind:group={selected}
          on:click={selected != "tee" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="page_3" id="page_3_id"
          >page_3</label
        >

        <div
          class="second_accordion__content"
          id="page_3__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_page_3">
              {#each page_3 as detail}
                <a href="/">{detail}</a>
              {/each}
            </div>
          {/if}
        </div>

        <input
          class="second_accordion__input"
          type="radio"
          name="second_accordion"
          id="page_4"
          value="pag4"
          bind:group={selected}
          on:click={selected != "pag4" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="page_4" id="page_4_id"
          >page_4</label
        >

        <div
          class="second_accordion__content"
          id="page_4__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_page_4">
              {#each page_4 as detail}
                <a href="/">{detail}</a>
              {/each}
            </div>
          {/if}
        </div>

        <a href="/" class="blog">Page_5</a>
      </div>
    </div>
  </div>
  {#if toggle}
    <div class="test" class:toggle={!toggle} on:click={() => (toggle = false)}>
      <a href="/">{!toggle ? "" : "close"}</a>
    </div>
  {/if}
</nav>

<style lang="scss">
  $break: 815px;
  $height: 4vh;
  $shadow: #ddffbb20;
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
  * {
    font-family: "Montserrat Alternates Regular";
  }
  .accordion {
    color: #004242;
    min-height: $height;
  }
  .icon {
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    font-family: "Montserrat Alternates Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    width: 50px;
    height: 50px;
    border: 3px solid #ddffbb;
    border-radius: 50px;
  }
  a {
    color: #004242;
    text-align: center;
    text-decoration: none;
    padding: 10px 10px;
  }
  .toggle {
    height: 0px;
    padding: 0px;
  }
  .test {
    background-color: var(--color4);
    padding: 8px;
    margin-top: 8px;
    border-radius: 32px;
    z-index: 2;
    cursor: pointer;
    text-align: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:hover {
      background-color: $shadow;
    }
    @media only screen and (max-width: $break) {
      &:hover {
        background-color: $shadow;
      }
    }
  }
  .first_accordion {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    min-height: $height;
    background: var(--color1);
    border: 2px solid #ddffbb;
    display: grid;
    border-radius: 32px;
    grid-template-areas:
      "logo1 . button"
      "coll coll coll";
    grid-template-columns: 100px auto 100px;
  }
  .first_accordion__input {
    display: none;
    background-color: var(--color2);

    @media only screen and (max-width: $break) {
      &:checked ~ .first_accordion__content {
        display: grid;
      }
    }
  }

  .first_accordion__label {
    &:hover {
      background-color: $shadow;
      border-radius: 0 32px 32px 0;
    }
    display: none;
    grid-area: button;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    @media only screen and (max-width: $break) {
      display: grid;
      align-items: center;
      justify-items: end;
      padding-right: 15px;
      max-width: 100px;
    }
  }

  .first_accordion__content {
    display: grid;
    text-align: center;
    grid-area: coll;
    @media only screen and (max-width: $break) {
      display: none;
    }
  }
  .logo1 {
    display: none;
    grid-area: logo1;
    @media only screen and (max-width: $break) {
      display: grid;
      text-align: left;
    }
    &:hover {
      background-color: $shadow;
      border-radius: 32px 0 0 32px;
    }
  }
  .logo1 > img {
    height: 50px;
    width: 50px;
  }
  .second_accordion {
    align-items: center;
    border-radius: 32px;
    display: grid;
    grid-template-areas:
      "logo home page_1 page_2 page_3 page_4 blog . login "
      "pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1 pag1"
      "pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2 pag2"
      "pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3 pag3"
      "pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4 pag4";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto 1fr;
    @media only screen and (max-width: $break) {
      grid-template-areas:
        "logo"
        "login"
        "home"
        "page_1"
        "pag1"
        "page_2"
        "pag2"
        "page_3"
        "pag3"
        "page_4"
        "pag4"
        "blog";
      grid-template-columns: auto;
      border-radius: 0 0 32px 32px;
    }
  }
  .second_accordion__input {
    display: none;
    padding: 10px 10px;
    align-items: center;
    justify-items: center;
  }
  .second_accordion__label {
    display: grid;
    cursor: pointer;
    padding: 10px 10px;
    z-index: 1;
  }
  .second_accordion__content {
    text-align: left;
    display: none;
  }

  .second_accordion__content > div {
    display: grid;
    padding: 10px;
    border-radius: 0 0 32px 32px;
  }
  .second_accordion__content > div > a {
    display: grid;
    padding: 10px;
    text-align: left;
    margin: 2px;
    border: 1px solid;
    border-color: #b047ae50;
    border-radius: 32px;
    &:hover {
      background-color: #b047ae10;
    }
  }
  .logo {
    display: grid;
    grid-area: logo;
    min-height: $height;
    align-items: center;
    justify-items: center;
    border-radius: 32px;
    @media only screen and (max-width: $break) {
      display: none;
      background-color: var(--color2);
    }
    &:hover {
      background-color: $shadow;
      border-radius: 32px 0 0 32px;
    }
  }
  .logo > img {
    height: 50px;
    width: 50px;
  }
  .home {
    display: grid;
    min-height: $height;
    align-items: center;
    justify-items: center;
    grid-area: home;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }

  .login {
    display: grid;
    grid-area: login;
    min-height: $height;
    align-items: center;
    justify-items: center;
    border-radius: 0 32px 32px 0;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
      border-radius: 0;
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
  #page_1 {
    &:checked ~ #page_1__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #page_1__content {
        display: grid;
      }
    }
  }
  #page_1_id {
    display: grid;
    grid-area: page_1;
    min-height: $height;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
  #page_1__content {
    grid-area: pag1;
  }
  .sub_page_1 {
    background-color: var(--color3);
  }

  #page_2 {
    &:checked ~ #page_2__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #page_2__content {
        display: grid;
      }
    }
  }
  #page_2_id {
    display: grid;
    grid-area: page_2;
    min-height: $height;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
  #page_2__content {
    grid-area: pag2;
  }
  .sub_page_2 {
    background-color: var(--color3);
  }
  #page_3 {
    &:checked ~ #page_3__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #page_3__content {
        display: grid;
      }
    }
  }
  #page_3_id {
    display: grid;
    grid-area: page_3;
    min-height: $height;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
  #page_3__content {
    grid-area: pag3;
  }
  .sub_page_3 {
    background-color: var(--color3);
  }
  #page_4 {
    &:checked ~ #page_4__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #page_4__content {
        display: grid;
      }
    }
  }
  #page_4_id {
    padding-right: 8px;
    padding-left: 18px;
    display: grid;
    grid-area: page_4;
    max-width: 140px;
    min-height: $height;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
      max-width: 100vw;
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
  #page_4__content {
    grid-area: pag4;
  }
  .sub_page_4 {
    background-color: var(--color3);
  }
  .blog {
    display: grid;
    grid-area: blog;
    min-height: $height;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: $break) {
      background-color: var(--color2);
      border-radius: 0 0 32px 32px;
    }
    &:hover {
      background-color: $shadow;
      min-height: 56px;
    }
  }
</style>
