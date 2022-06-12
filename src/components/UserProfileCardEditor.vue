<template>
  <div class="profile-card">


    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" :alt="`${user.avatar} profile picture`" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input v-model="userData.username" type="text" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
        <input v-model="userData.name" type="text" placeholder="Full Name" class="form-input text-lead">
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea v-model="userData.bio" class="form-input" id="user_bio"
                  placeholder="Write a few words about yourself."></textarea>
      </div>

      <div class="stats">
        <span>{{ user.postsCount }} posts</span>
        <span>{{ user.threadsCount }} threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input v-model="userData.website" autocomplete="off" class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input v-model="userData.email" autocomplete="off" class="form-input" id="user_email">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input v-model="userData.location" autocomplete="off" class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserProfileCardEditor",
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      userData: {...this.user},
    }
  },
  methods: {
    save() {
      console.log('saving...')
    }
  },
}
</script>

<style scoped>

</style>