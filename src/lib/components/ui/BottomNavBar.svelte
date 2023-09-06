<script lang="ts">
  import { page } from "$app/stores";
  import Notch from "./Notch.svelte";
  $: active = $page.url.pathname;
  const icons: { [key: string]: string } = {
    "/": "fa-bars",
    "/bookmarks": "fa-bookmark",
    "/search": "fa-search",
    "/account": "fa-times",
  };

  $: selectedIcon = icons[active] || "fa-plus";
</script>

<div class="relative flex items-stretch justify-between">
  <!-- Navigation Buttons -->
  <!-- Left side -->
  <div
    class="flex items-center justify-between py-4 pl-8 pr-2 flex-1 bg-base-100"
  >
    <a href="/" class="focus:outline-none" class:active={active === "/"}>
      <i class="fa-solid fa-lg fa-home" />
    </a>
    <a
      href="/bookmarks"
      class="focus:outline-none"
      class:active={active === "/bookmarks"}
    >
      <i class="fa-solid fa-lg fa-bookmark" />
    </a>
  </div>

  <!-- Spacer for the FAB -->
  <Notch class="fill-base-100" />

  <!-- Right Side -->
  <div
    class="flex items-center py-4 pr-8 pl-2 justify-between flex-1 bg-base-100"
  >
    <a
      href="/search"
      class="focus:outline-none"
      class:active={active === "/search"}
    >
      <i class="fa-solid fa-lg fa-search" />
    </a>
    <a
      href="/account"
      class="focus:outline-none"
      class:active={active === "/account"}
    >
      <i class="fa-solid fa-lg fa-user" />
    </a>
  </div>

  <button
    class="z-50 btn btn-lg box-content hover:border-base-200 btn-circle btn-primary absolute transform -top-8 left-0 right-0 mx-auto"
    ><i class="fab-icon fa-solid fa-lg z-50 {selectedIcon}" /></button
  >
</div>

<style lang="postcss">
  a {
    @apply text-base-content text-opacity-40 transition-all;
  }
  .active {
    @apply text-primary  text-opacity-100;
  }
  .active::before {
    content: "";
    position: absolute;
    view-transition-name: active-page;
    z-index: 1;
    @apply w-10 transform -translate-x-2.5 top-0 h-1 rounded-full bg-primary;
  }

  .fab-icon {
    view-transition-name: fab-icon;
  }

  .notch::before {
    content: "";
    position: absolute;
    @apply w-24 aspect-square -top-14 transform -translate-x-2 mx-auto left-0 right-0 rounded-full bg-base-200;
  }
</style>
