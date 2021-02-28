<template>
  <div class="home uk-container" style="margin-top: 30px; height: 100vh">
    <div class="uk-grid">
      <div class="uk-width-1-6">
        <ul class="uk-nav uk-nav-default" style="font-size: 20px">
          <li>
            <router-link :to="{ name: 'Announcements' }"
              >Announcements</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'News' }">News</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Search', params: { search: 123 } }"
              >Find a Server</router-link
            >
          </li>
        </ul>
      </div>
      <div class="uk-width-5-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>
