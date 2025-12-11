<template>
  <div class="relative container mx-auto px-4 py-8">
    <!-- Central vertical line -->
    <div class="absolute left-5 h-full w-1 bg-border md:left-1/2 md:-translate-x-1/2"></div>

    <div class="space-y-12">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative flex items-center justify-end"
        :class="index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'"
      >
        <!-- Timeline dot -->
        <div
          class="absolute left-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:left-1/2"
        ></div>

        <!-- Card container -->
        <div
          class="ml-8 pr-4 text-left md:ml-0 md:w-1/2 transition-all duration-300 hover:scale-105"
          :class="index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'"
        >
          <!-- Card -->
          <div class="bg-card border rounded-lg shadow-md overflow-hidden">
            <!-- Date badge -->
            <div
              class="px-4 py-2 bg-muted text-left"
              :class="index % 2 === 0 ? 'md:text-right' : 'md:text-left'"
            >
              <span class="text-sm font-semibold text-muted-foreground">{{ item.date }}</span>
            </div>

            <!-- Card content -->
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-foreground">{{ item.title }}</h3>

              <!-- Image -->
              <div v-if="item.image" class="mb-4 rounded-md overflow-hidden">
                <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
              </div>

              <!-- Description -->
              <p class="text-muted-foreground leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  date: string
  title: string
  image?: string
  description: string
}

defineProps<{
  items: TimelineItem[]
}>()
</script>

<style scoped>
/* Optional: Add custom animations or styles here */
</style>
