<script setup lang="ts">
interface Props {
  label: string
}

const { label } = defineProps<Props>()
const value = defineModel<string>({ default: '' })
const error = defineModel<string | undefined>('error')

watch(value, () => error.value = undefined)

const id = useId()
</script>

<template>
  <div class="relative">
    <input
      type="text"
      v-model="value"
      :id="id"
      :placeholder="label"
      class="peer p-4 block w-full bg-neutral-800 rounded-lg text-sm text-white
            placeholder:text-transparent focus:outline-none focus:ring-0
            disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2
            [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
      :class="error ? 'border border-red-600' : 'border border-transparent focus:border-transparent'"
    >
    <label
      :for="id"
      class="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none
            transition ease-in-out duration-100 peer-disabled:opacity-50 border border-transparent focus:border-transparent
            peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5
            peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-neutral-400"
    >
      {{ label }}
    </label>
    <p v-if="error" class="text-sm text-red-600 mt-2">{{ error }}</p>
  </div>
</template>
