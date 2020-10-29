<script>
  import { onMount } from "svelte";

  onMount(() => {
    let map;
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyANpg5zbhIRYpHkKXeGvlByvcC1xoXzFR0&callback=initMap&libraries=&v=weekly";
    script.defer = true;
    window.initMap = function () {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    document.head.append(script);
  });
</script>

<style>
  .main-wrapper {
    padding: 1em;
  }

  #map {
    height: 100%;
    width: 100%;
  }
</style>

<main class="main-wrapper">
  <h1>Our Map</h1>
  <div id="map" />
</main>
