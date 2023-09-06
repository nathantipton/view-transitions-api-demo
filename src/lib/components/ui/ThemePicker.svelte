<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { themeStore, themes } from "$lib/stores/ui/theme.store";
  import type { Unsubscriber } from "svelte/motion";

  let selectedTheme: string;

  onMount(() => {
    let unsub: Unsubscriber;
    if (browser) {
      unsub = themeStore.subscribe((theme) => {
        selectedTheme = theme;
        document.body.setAttribute("data-theme", theme);
      });
    }

    return () => {
      if (unsub) unsub();
    };
  });

  $: if (selectedTheme) {
    switchTheme(selectedTheme);
  }

  function switchTheme(theme: string) {
    themeStore.set(theme);
  }
</script>

<select
  class="select select-bordered w-full max-w-xs"
  bind:value={selectedTheme}
>
  {#each themes as theme}
    <option value={theme}>
      {theme[0].toUpperCase() + theme.slice(1)}
    </option>
  {/each}
</select>
