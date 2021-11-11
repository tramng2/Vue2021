export default {
  data() {
    return {
      timeout: "",
    };
  },
  methods: {
    debounce(func, time) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, time);
    },
  },
};
