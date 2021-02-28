<template>
  <div>
    <h2 class="uk-text-center">News</h2>
    <div uk-grid="masontry: true">
      <div
        v-for="article in announcements"
        :key="article.key"
        class="uk-width-1-1"
      >
        <Article class="uk-width-1-1" :articleData="article" />
      </div>
    </div>
  </div>
</template>

<script>
import Article from "./Article.vue";
export default {
  components: {
    Article,
  },
  data() {
    return {
      announcements: [
        {
          key: 1,
          title:
            "McKinney firefighters battled four fires likely sparked by lightning strikes Thursday night",
          author: "Anna Caplan",
          date: "4:55pm, 02/26/21",
          source: "Dallas News",
          url:
            "https://www.dallasnews.com/news/2021/02/26/mckinney-firefighters-battled-four-fires-likely-sparked-by-lightning-strikes-thursday-night/",
          body:
            "The severe weather also reportedly produced golf-ball sized hail... Thursday night’s stormy weather not only inundated McKinney with golf-ball sized hail, it also yielded numerous lightning strikes, which may have been the cause of multiple structure fires...",
        },
        {
          key: 2,
          title:
            "Dallas County Judge Clay Jenkins spars with the state over North Texas COVID-19 vaccine allocations",
          author: "Allie Morris",
          date: "5:35pm, 02/26/21",
          source: "Dallas News",
          url:
            "https://www.dallasnews.com/news/politics/2021/02/26/dallas-county-judge-clay-jenkins-spars-with-the-state-over-north-texas-covid-19-vaccine-allocations/",
          body:
            "The state is counting shots given at a federally backed site toward Dallas County’s allocation, which Jenkins says leaves fewer vaccines for North Texans...",
        },
        {
          key: 3,
          title:
            "Dallas-Fort Worth in for a wet weekend, with thunderstorms possible",
          author: "Jesus Jimenez",
          date: "8:52am, 02/27/21",
          source: "Dallas News",
          url:
            "https://www.dallasnews.com/news/weather/2021/02/27/dallas-fort-worth-in-for-a-wet-weekend-with-thunderstorms-possible/",
          body:
            "Widespread severe weather is not expected, but isolated storms with hail and damaging wind are possible,",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
