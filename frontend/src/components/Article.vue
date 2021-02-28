<template>
  <div>
    <a :href="articleData.url">
      <div class="uk-card uk-card-default uk-card-hover">
        <div class="uk-card-header">
          <p class="uk-text-bold" style="margin: 0">{{ articleData.source }}</p>
          <h3 class="uk-card-title" style="margin: 0 auto 0">
            {{ articleData.title }}
          </h3>
          <p style="margin-top: 0">
            {{ articleData.author }}
            <span
              class="uk-text-muted uk-text-small"
              style="margin-left: 10px"
              >{{ articleData.date }}</span
            >
          </p>
        </div>
        <div class="uk-card-body">
          <p>{{ articleData.body }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["articleData"],
};
</script>

<style scoped>
</style>
