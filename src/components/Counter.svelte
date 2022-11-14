<script>
  import List from './List.svelte'
  let count = 0
  const increment = () => {
    count += 1
  }
</script>
<List />
<button on:click={increment}>
  count is {count}
</button>
