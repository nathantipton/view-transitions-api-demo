<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { themeStore, themes } from "$lib/stores/ui/theme.store";
  import type { Unsubscriber } from "svelte/motion";
  import { writable } from "svelte/store";

  let selectedTheme: string;

  const dropdownOpen = writable(false);

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
    dropdownOpen.set(false);
  }
</script>

<details bind:open={$dropdownOpen} class="dropdown w-full">
  <summary
    class="m-1 btn select select-bordered w-full flex flex-row justify-between items-center"
  >
    <div>{$themeStore}</div>
    <div class="flex flex-row items-center justify-end gap-1">
      <div class="h-4 rounded-full aspect-square bg-primary" />
      <div class="h-4 rounded-full aspect-square bg-secondary" />
      <div class="h-4 rounded-full aspect-square bg-accent" />
      <div class="h-4 rounded-full aspect-square bg-base-content" />
    </div>
  </summary>
  <ul
    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full max-h-52 overflow-scroll flex-nowrap"
  >
    {#each themes as theme}
      <li>
        <button class="hover:bg-base-200" on:click={() => switchTheme(theme)}>
          <div>{theme[0].toUpperCase() + theme.slice(1)}</div>
          <div class="flex flex-row items-center justify-end gap-1">
            <div
              class="h-4 rounded-full aspect-square bg-primary"
              data-theme={theme}
            />
            <div
              class="h-4 rounded-full aspect-square bg-secondary"
              data-theme={theme}
            />
            <div
              class="h-4 rounded-full aspect-square bg-accent"
              data-theme={theme}
            />
            <div
              class="h-4 rounded-full aspect-square bg-base-content"
              data-theme={theme}
            />
          </div></button
        >
      </li>
    {/each}
  </ul>
</details>
