var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Jahed in Vue",
    message2: "Thank you for entering vue world",
    seen: true,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
    message3: "Hello Jahed! Thanks",
    message4: "Hello Jahed!",
  },
  methods: {
    reverseMessage() {
      this.message3 = this.message3.split("").reverse().join("");
    },
  },
});
