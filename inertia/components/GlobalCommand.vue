<script setup lang="ts">
import { useMagicKeys, whenever } from '@vueuse/core'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-vue-next'
import { ref } from 'vue'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '~/components/ui/command'

const open = ref(false)

const { ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k' && e.type === 'keydown') {
      e.preventDefault()
    }
  },
})

whenever(ctrl_k, () => {
  open.value = !open.value
})
</script>

<template>
  <CommandDialog v-model:open="open" class="rounded-lg border shadow-md md:min-w-[450px]">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">
          <Calendar />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem value="emoji">
          <Smile />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled value="calculator">
          <Calculator />
          <span>Calculator</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="profile">
          <User />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem value="billing">
          <CreditCard />
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem value="settings">
          <Settings />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
