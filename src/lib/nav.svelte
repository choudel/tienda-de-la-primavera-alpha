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
          id="services"
          value="ser"
          bind:group={selected}
          on:click={selected != "ser" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="services" id="services_id"
          >page_1</label
        >

        <div
          class="second_accordion__content"
          id="services__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_services">
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
          id="mentors"
          value="tor"
          bind:group={selected}
          on:click={selected != "tor" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="mentors" id="mentors_id"
          >page_2</label
        >

        <div
          class="second_accordion__content"
          id="mentors__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_mentors">
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
          id="mentees"
          value="tee"
          bind:group={selected}
          on:click={selected != "tee" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label class="second_accordion__label" for="mentees" id="mentees_id"
          >page_3</label
        >

        <div
          class="second_accordion__content"
          id="mentees__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_mentees">
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
          id="certifications"
          value="cer"
          bind:group={selected}
          on:click={selected != "cer" || !toggle
            ? () => (toggle = true)
            : () => (toggle = !toggle)}
        />
        <label
          class="second_accordion__label"
          for="certifications"
          id="certifications_id">page_4</label
        >

        <div
          class="second_accordion__content"
          id="certifications__content"
          class:toggle={!toggle}
        >
          {#if toggle}
            <div class="sub_certifications">
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
    src: url("MontserratAlternates-Regular.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "Montserrat Alternates Bold";
    src: url("MontserratAlternates-Bold.ttf");
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
      "logo home services mentor mentee certif blog . login "
      "ser ser ser ser ser ser ser ser ser"
      "tors tors tors tors tors tors tors tors tors"
      "tees tees tees tees tees tees tees tees tees"
      "cer cer cer cer cer cer cer cer cer";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto 1fr;
    @media only screen and (max-width: $break) {
      grid-template-areas:
        "logo"
        "login"
        "home"
        "services"
        "ser"
        "mentor"
        "tors"
        "mentee"
        "tees"
        "certif"
        "cer"
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
  #services {
    &:checked ~ #services__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #services__content {
        display: grid;
      }
    }
  }
  #services_id {
    display: grid;
    grid-area: services;
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
  #services__content {
    grid-area: ser;
  }
  .sub_services {
    background-color: var(--color3);
  }

  #mentors {
    &:checked ~ #mentors__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #mentors__content {
        display: grid;
      }
    }
  }
  #mentors_id {
    display: grid;
    grid-area: mentor;
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
  #mentors__content {
    grid-area: tors;
  }
  .sub_mentors {
    background-color: var(--color3);
  }
  #mentees {
    &:checked ~ #mentees__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #mentees__content {
        display: grid;
      }
    }
  }
  #mentees_id {
    display: grid;
    grid-area: mentee;
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
  #mentees__content {
    grid-area: tees;
  }
  .sub_mentees {
    background-color: var(--color3);
  }
  #certifications {
    &:checked ~ #certifications__content {
      display: grid;
    }
    @media only screen and (max-width: $break) {
      display: none;
      &:checked ~ #certifications__content {
        display: grid;
      }
    }
  }
  #certifications_id {
    padding-right: 8px;
    padding-left: 18px;
    display: grid;
    grid-area: certif;
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
  #certifications__content {
    grid-area: cer;
  }
  .sub_certifications {
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
