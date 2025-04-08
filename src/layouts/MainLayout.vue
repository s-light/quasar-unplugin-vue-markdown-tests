<template>
  <!-- style="min-height: 0" -->
  <q-layout view="lHh Lpr lFf">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
      class="fixed-top-left q-ma-sm"
      style="z-index: 10000"
    >
    </q-btn>
    <q-btn
      class="fixed-top-right q-ma-sm"
      flat
      round
      @click="$q.dark.toggle()"
      :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
      style="z-index: 10000"
    />

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list class="q-pt-xl q-pb-xl">
        <EssentialNavigation />

        <q-item>
          <q-item-section>
            <q-btn
              flat
              round
              @click="$q.dark.toggle()"
              :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section> </q-item-section>
        </q-item>

        <q-item-label header class="fixed-bottom"> Quasar v{{ $q.version }} </q-item-label>
      </q-list>
    </q-drawer>

    <!-- style="min-height: 0" -->
    <q-page-container class="fit q-pa-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

import EssentialNavigation from 'components/EssentialNavigation.vue'

defineOptions({
  name: 'MainLayout',
})

const leftDrawerOpen = ref(true)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const $q = useQuasar()
</script>

<style>
.body--light {
  background-color: hsl(0, 0%, 100%);
}
</style>
