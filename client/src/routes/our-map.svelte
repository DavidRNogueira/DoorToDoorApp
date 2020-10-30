<script>
  import Map from "../components/Map.svelte";
  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyANpg5zbhIRYpHkKXeGvlByvcC1xoXzFR0&callback=initMap">
  </script>
</svelte:head>

<main>
  <h1>Our Map</h1>
  {#if $ready}
    <Map />
  {/if}
</main>
