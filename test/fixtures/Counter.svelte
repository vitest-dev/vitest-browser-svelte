<script>
  const { initialCount = 0 } = $props()

  let count = $state(initialCount)

  function inctement() {
    count += 1
  }
</script>

<div>
  Count is {count}
</div>
<button onclick={inctement}>Increment</button>
