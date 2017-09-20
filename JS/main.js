//Vue.js
new Vue({
    el: '#Juegosyfiltros',
    data: {
      nuevojuego: null,
      mostrar: true,
      busqueda: '',
      minimo: 5,
      juegos: [
        {titulo: 'Resident Evil 7', calificacion:'9', eliminar: false},
        
    ]
  },
  methods: {
    eliminarjuego(juego){
      juego.eliminar = !juego.eliminar;
    },
    agregarjuego(){
      this.juegos.push({titulo: this.nuevojuego, eliminar: false});
      this.nuevojuego = '';
    },
  },
  computed: {
    juegospuntuacion() {
      return this.juegos.filter((juego) => juego.calificacion >= this.minimo);
    },
    buscarJuego() {
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
    },
    tacharjuego(){
      return this.juegos.filter((juego) => juego.eliminar);
    },
  }
});
