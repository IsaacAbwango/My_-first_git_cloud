const { createApp } = Vue

createApp({
  data() {
    return {
      on: 'false',
      message: "Chelsea TV",
      footballshowchannels: [
        "chelsea1.jpg",
        "chelsea2.jpg",
        "chelsea3.jpg",
      ],
      visible: 0,
    };
  },
  methods: {
    off() {
      this.on = !this.on;
    },
    next() {
      if (this.visible >= this.footballshowchannels.length - 1) {
        this.visible = 0;
      } else {
        this.visible++;
      }
    },
    previous() {
      if (this.visible <= 0) {
        this.visible = this.footballshowchannels.length - 1;
      } else {
        this.visible--;
      }
    },

  }
}).mount('#app')