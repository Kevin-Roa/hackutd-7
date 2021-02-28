<template>
  <div>
    <h2 class="uk-text-center">Announcements</h2>
    <div uk-grid="masontry: true">
      <div
        v-for="article in announcements"
        :key="article.key"
        class="uk-width-1-1"
      >
        <Article :articleData="article" />
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
          title: "Kevin just released a super cool discord bot!?!",
          author: "Kevin Roa",
          date: "1hr ago",
          url: "",
          body:
            "Lorem ipsum  incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          key: 2,
          title: "HackUTD is underway!",
          author: "HackUTD",
          date: "12:00pm, 02/27/21",
          url: "",
          body:
            " Incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit  fermentum odio eu feugiat pretium nibh ipsum consequat. Trum tellus pellentesque eu tincidunt tortor aliquam nulla. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.",
        },
        {
          key: 3,
          title: "Super cool article!?!",
          author: "Gamer",
          date: "4:20am, 04/20/21",
          url: "",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer. viverra nam libero justo laoreet sit amet cursus",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
