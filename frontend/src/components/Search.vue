<template>
  <div>
    <h2 class="uk-text-center">Find a Server</h2>
    <input
      type="text"
      class="uk-width-4-5 uk-align-center uk-input uk-border-rounded"
      placeholder="Enter a server name"
      v-model="input"
    />
    <div class="uk-grid uk-flex-center">
      <server
        v-for="server in servers_filtered"
        :key="server.key"
        :serverInfo="server.data"
      />
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import Server from "@/components/Server.vue";
import Fuse from "fuse.js";
export default {
  components: {
    Server,
  },
  data() {
    return {
      input: "",
      servers: [],
      servers_filtered: [],
    };
  },
  watch: {
    input: function (val) {
      this.servers_filtered = this.getFilteredServers();
      // console.log(this.servers.filtered);
    },
  },
  methods: {
    getFilteredServers() {
      // // Fuzzy search
      const fuse = new Fuse(this.servers, {
        includeScore: true,
        keys: ["data.name", "data.desc"],
      });
      let result = fuse.search(this.input);
      if (!result[0]) return this.servers;
      if (result.length === 1) return [result[0].item];
      else {
        // Remove the servers that are not as close to the search
        // The closer the score is to 0, the closer the result
        result = result.filter((server) => server.score <= 0.2);
        return result.map((res) => res.item);
      }
    },
  },
  created() {
    db.collection("servers")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            key: doc.id,
            data: doc.data(),
          };
          this.servers.push(data);
        });
        this.servers_filtered = this.getFilteredServers();
      });
  },
};
</script>

<style scoped>
</style>
