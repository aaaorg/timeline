<script setup lang="ts">
import AuthLayout from '~/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'
import { Loader } from 'lucide-vue-next'

defineOptions({ layout: AuthLayout })

const form = useForm({
  fullName: '',
  email: '',
  password: '',
})
</script>

<template>
  <!-- <AppHead
    title="Register"
    description="Start plotting and planning your courses with ease by creating your PlotMyCourse account today"
  /> -->

  <div class="flex flex-col space-y-2">
    <h1 class="text-2xl font-semibold tracking-tight">Register</h1>
    <p class="text-sm text-muted-foreground">
      <Link href="/login">Have an account? Login</Link>
    </p>
  </div>

  <form
    class="grid gap-3 pt-32"
    @submit.prevent="
      form.post('/register', { onSuccess: () => form.reset(), preserveScroll: true })
    "
  >
    <FormInput
      label="Full Name"
      v-model="form.fullName"
      :error="form.errors.fullName"
      :disabled="form.processing"
    ></FormInput>

    <FormInput
      label="Email"
      v-model="form.email"
      :error="form.errors.email"
      :disabled="form.processing"
    ></FormInput>

    <FormInput
      label="Password"
      v-model="form.password"
      :error="form.errors.password"
      :disabled="form.processing"
    ></FormInput>

    <Button type="submit" :disabled="form.processing">
      <Loader v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
      Register
    </Button>
  </form>
</template>
