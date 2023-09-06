<script lang="ts">
  import "../app.css";
  import BottomNavBar from "$lib/components/ui/BottomNavBar.svelte";
  import { onNavigate } from "$app/navigation";
  import { fade, slide } from "svelte/transition";
  import { page } from "$app/stores";

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
  <div class="mockup-phone w-full h-full">
    <div class="camera" />
    <div class="display h-full">
      <div
        class="flex flex-col h-full items-stretch justify-between bg-base-200 pt-8"
      >
        {#key $page.url.pathname}
          <div in:fade={{ duration: 300 }}>
            <div
              class="flex-1 overflow-y-auto p-4"
              in:slide={{ duration: 300, axis: "x" }}
            >
              <slot />
            </div>
          </div>
        {/key}
        <BottomNavBar />
      </div>
    </div>
  </div>
</div>
