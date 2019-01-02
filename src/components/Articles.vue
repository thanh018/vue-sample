<template>
  <div class="col-md-9">
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li class="nav-item">
          <a class="nav-link disabled" href="">Your Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="">Global Feed</a>
        </li>
      </ul>
    </div>

    <div v-for="(item, index) in articles" :key="index" class="article-preview">
      <div class="article-meta">
        <a href="profile.html"><img :src="item.author.image" /></a>
        <div class="info">
          <a href="" class="author">{{item.author.username}}</a>
          <span class="date">{{item.createdAt}}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> {{item.favoritesCount}}
        </button>
      </div>
      <a href="" class="preview-link">
        <h1>{{item.title}}</h1>
        <p>{{item.description}}</p>
        <span>Read more...</span>
      </a>
      <button @click="toggle(abc)">aaaaa</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Articles',
  computed: {
    ...mapState('articles', ['articles', 'abc'])
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    ...mapActions('articles', ['getArticles'])
  }
}
</script>
