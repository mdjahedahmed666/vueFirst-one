const app = new Vue({
  el: "#app",
  data: {
    jahedAge: 23,
    tanvirAge: 22,
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

new Vue({
  data: {
    a: 1,
  },
  created: function () {
    console.log("a is: " + this.a); // => "a is: 1"
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log("hello");
    });
  },
});
