<script>
  import Login from "../components/Login.svelte";
  import Nav from "../components/Nav.svelte";
  import { isAuth } from "../components/GlobalState";
  import { PRIMARY_COLOR } from "../../constants";
  import IoIosPeople from "svelte-icons/io/IoIosPeople.svelte";
  import MdMap from "svelte-icons/md/MdMap.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  import MdSettings from "svelte-icons/md/MdSettings.svelte";
  import MdSend from "svelte-icons/md/MdSend.svelte";
  import { goto } from "@sapper/app";
</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 20% 80%;
  }

  .sidebar-div {
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
  .content-div {
    height: 100vh;
    width: 100%;
  }

  .sidebar-options-div {
    margin-left: 1em;
    margin-top: 2em;
  }

  .sidebar-option {
    color: white;
    font-size: 24px;
    margin-bottom: 1em;

    display: flex;
    cursor: pointer;
  }

  .sidebar-option:hover {
    color: lightslategray;
  }

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 0.5em;
  }

  .logo-div {
    color: white;
    font-weight: bold;
    margin-bottom: 2em;
    width: 90%;
  }
</style>

<!-- {#if $isAuth} -->
<main class="wrapper">
  <div class="sidebar-div" style="background: {PRIMARY_COLOR}">
    <div class="sidebar-options-div">
      <div class="logo-div">
        <h1 style="margin:0;">Door to Door</h1>
        <hr />
      </div>
      <div class="sidebar-option" on:click={async () => await goto('/')}>
        <div class="icon">
          <IoIosPeople />
        </div>
        My Team
      </div>
      <div
        class="sidebar-option"
        on:click={async () => await goto('/send-tasks')}>
        <div class="icon">
          <MdSend />
        </div>
        Send Tasks
      </div>
      <div class="sidebar-option" on:click={async () => await goto('/our-map')}>
        <div class="icon">
          <MdMap />
        </div>
        Our Map
      </div>
      <div class="sidebar-option">
        <div class="icon">
          <MdEmail />
        </div>
        Inbox
      </div>
      <div class="sidebar-option">
        <div class="icon">
          <MdSettings />
        </div>
        Settings
      </div>
    </div>
  </div>
  <div class="content-div">
    <slot />
  </div>
</main>
<!-- {:else}
  <Login />
{/if} -->
