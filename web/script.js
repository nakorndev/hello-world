Vue.createApp({
  data () {
    return {
      isLoading: true,
      profiles: [],
      search: ''
    }
  },
  computed: {
    searchProfiles () {
      if (!this.search) return this.profiles
      const founds = []
      for (const profile of this.profiles) {
        if (profile.full_name.includes(this.search)) {
          founds.push(profile)
        }
      }
      return founds
    },
    devMode () {
      return location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    }
  },
  async mounted () {
    const jsonUrl = this.devMode
      ? '../docs/profiles.json'
      : `https://raw.githubusercontent.com/nakorndev/hello-world/gh-pages/docs/profiles.json?timestamp=${+new Date()}`
    try {
      const { data } = await axios.get(jsonUrl)
      this.profiles = shuffle(data)
    } catch (error) {
      console.error(error)
    }
    this.isLoading = false
  },
  methods: {
    avatarUrl (profile) {
      return this.devMode
        ? `../docs/avatars/${profile.file_name}.svg`
        : `./avatars/${profile.file_name}.svg`
    }
  }
}).mount('#app')
