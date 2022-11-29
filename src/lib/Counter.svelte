<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  <slot name="prefix"></slot>
  <slot></slot>
  {count}
  <slot name="suffix"></slot>
</button>
