<script class="ts">
  import { page } from "$app/stores";

  $: active = $page.url.pathname;
</script>

<div class="relative flex items-center justify-between py-4 px-8 bg-base-300">
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
    class="fab btn btn-lg border-8 box-content border-base-100 btn-circle btn-primary absolute transform -top-10 left-0 right-0 mx-auto"
    ><i class="fa-solid fa-lg fa-plus z-50" /></button
  >
</div>

<style lang="postcss">
  a {
    @apply text-base-content text-opacity-40 transition-all;
  }
  .active {
    @apply text-white text-opacity-100;
  }
  .active::before {
    content: "";
    position: absolute;
    view-transition-name: active-page;
    z-index: 1;
    @apply w-10 transform -translate-x-2.5 top-0 h-1 rounded-full bg-white;
  }

  .fab {
    view-transition-name: fa-button;
    z-index: 100;
  }
</style>
