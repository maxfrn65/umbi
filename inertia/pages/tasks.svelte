<script lang="ts">
  import { onMount } from 'svelte'

  let { allTasks } = $props()

  onMount(() => {
    console.log("Tasks from backend:", allTasks)
  })
</script>

<h1>Tasks</h1>
<pre>
  {allTasks.value}
</pre>

<style>

</style>
