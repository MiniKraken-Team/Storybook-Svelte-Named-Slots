<script>
  import Button from '../Button.svelte'

  const {
    backgroundColor,
    prefix,
    suffix,
    defaultSlot,
    onClick,
    primary,
    size,
    ...props
  } = $$restProps
</script>


<Button {backgroundColor} {primary} {size} {...props} on:click={onClick}>
  <svelte:fragment slot="prefix">
    {prefix} <!-- could add @html if html is inserted here as well -->
  </svelte:fragment>

  {defaultSlot}

  <svelte:fragment slot="suffix">
    {suffix} <!-- could add @html if html is inserted here as well -->
  </svelte:fragment>
</Button>
