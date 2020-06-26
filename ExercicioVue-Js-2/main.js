var vue = new Vue({
  el:"#app",
  data: { nome: "Daniel Teles"},

  computed: {},

  methods: {
      mensagemParaVivi() {
        console.log("Oi Vivi, tudo certo? by(" + this.nome + ")");
        alert("Oi Vivi, tudo certo? by(" + this.nome + ")");
      }
    }
  }
);
