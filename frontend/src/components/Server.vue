<template>
  <div>
    <a :href="serverInfo.inviteUrl">
      <div class="uk-card uk-card-default uk-card-body uk-card-hover">
        <h3 class="uk-card-title">{{ serverInfo.name }}</h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["serverInfo"],
};
</script>

<style scoped>
</style>
