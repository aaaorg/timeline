<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-6xl mx-auto py-12">
      <h1 class="text-4xl font-bold text-center mb-12">My Journey</h1>
      <Timeline :items="timelineData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from '~/components/Timeline.vue'

const timelineData = [
  {
    date: 'January 2024',
    title: 'Started New Project',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
    description:
      'Launched an exciting new project that would change everything. This was the beginning of an amazing journey.',
  },
  {
    date: 'March 2024',
    title: 'First Milestone',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
    description:
      'Reached our first major milestone with the team. We celebrated this achievement with great enthusiasm.',
  },
  {
    date: 'June 2024',
    title: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    description:
      'Successfully launched the product to the public. The response was overwhelming and positive.',
  },
  {
    date: 'September 2024',
    title: 'Team Expansion',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    description:
      'Grew the team from 5 to 20 members. Each new addition brought unique skills and perspectives.',
  },
  {
    date: 'December 2024',
    title: 'Year End Success',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    description:
      'Ended the year with incredible results, exceeding all our goals and expectations for the year.',
  },
]
</script>
