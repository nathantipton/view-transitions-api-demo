<script lang="ts">
  import { page } from "$app/stores";

  $: active = $page.url.pathname;
  const icons: { [key: string]: string } = {
    "/": "fa-bars",
    "/bookmarks": "fa-bookmark",
    "/search": "fa-search",
    "/account": "fa-times",
  };

  $: selectedIcon = icons[active] || "fa-plus";
</script>

<div class="relative flex items-center justify-between py-4 px-8 bg-base-100">
  <!-- Navigation Buttons -->

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
  <!-- Spacer for the FAB -->
  <div />

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

  <button
    class="z-50 btn btn-lg box-content border-8 border-base-200 hover:border-base-200 btn-circle btn-primary absolute transform -top-10 left-0 right-0 mx-auto"
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
</style>
