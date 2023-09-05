<script lang="ts">
  import "../app.css";
  import BottomNavBar from "$lib/components/ui/BottomNavBar.svelte";
  import { onNavigate } from "$app/navigation";

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

<div class="flex flex-col items-stretch justify-between h-screen-safe">
  <div class="flex-1 overflow-y-auto p-4">
    <slot />
  </div>
  <BottomNavBar />
</div>
