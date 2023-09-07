<script lang="ts">
  import ThemePicker from "../lib/components/ui/ThemePicker.svelte";

  import "../app.css";
  import BottomNavBar from "$lib/components/ui/BottomNavBar.svelte";
  import { onNavigate } from "$app/navigation";
  import { fade, slide } from "svelte/transition";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const warningModalOpen = writable(false);

  onMount(() => {
    if (!document.startViewTransition) {
      warningModalOpen.set(true);
    }
  });

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="container max-w-md mx-auto p-4 h-screen-safe">
  <div class="mockup-phone aspect-iphone h-iphone">
    <div class="camera" />
    <div class="display h-full">
      <div
        class="flex flex-col h-full items-stretch justify-between bg-base-200 pt-8"
      >
        {#key $page.url.pathname}
          <div class="flex-1 p-4" in:fade={{ duration: 300 }}>
            <slot />
            <div class="py-4">
              <h5>Theme</h5>
              <ThemePicker />
            </div>
          </div>
        {/key}
        <BottomNavBar />
      </div>
    </div>
  </div>
</div>
<dialog id="my_modal_1" class="modal {$warningModalOpen ? 'modal-open' : ''}">
  <div class="modal-box">
    <h3 class="font-bold text-2xl">Oh no!</h3>
    <p class="py-4">
      This site is a demo of the new <a
        class="link"
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API"
        >View Transitions API</a
      >
      and your current browser
      <span class="font-bold text-red-500 uppercase">does not</span>
      support it. Please try again on a supported browser!
    </p>
    <a class="link" target="_blank" href="https://caniuse.com/view-transitions"
      >Look up supported browsers</a
    >
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button
          class="btn btn-warning"
          on:click={() => warningModalOpen.set(false)}>Close</button
        >
      </form>
    </div>
  </div>
</dialog>
