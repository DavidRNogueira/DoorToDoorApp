<script>
  import { onMount } from "svelte";

  let container;
  let map;
  let zoom = 8;
  let center = { lat: -34.397, lng: 150.644 };

  onMount(async () => {
    console.log("here2");
    map = new window.google.maps.Map(container, {
      zoom,
      center,
    });
  });
</script>

<div style="width:100%; height:100%;" bind:this={container} />
