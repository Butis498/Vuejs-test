
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var peliculas_app = new Vue({
  el: '#peliculas_app',
  data: {
    items:[
    {
      contenido: 'Breaking Bad es una serie de televisión dramática estadounidense creada y producida por Vince Gilligan.', 
      img: "https://imagenes.elpais.com/resizer/Ugy-uuTasy_kRG5UVrnWRryD9Gw=/394x295/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZZ5JDIYDDFCOBLKRZBCYELT4WU.jpg",
      page:'https://es.wikipedia.org/wiki/Breaking_Bad',
      name:'Breaking Bad'},
    {
      contenido:'The Umbrella Academy es una serie de televisión de superhéroes estadounidense de 2019, desarrollada por Steve Blackman para Netflix.',
      img: "https://i.pinimg.com/originals/c2/c9/00/c2c9001d2429fa1b01b9829164cca3bc.jpg",
      page:'https://es.wikipedia.org/wiki/The_Umbrella_Academy_(serie_de_televisi%C3%B3n)',
      name:'Umbrella Academy'},
    {
      contenido:'Prison Break, es una serie de televisión dramática estadounidense. Es considerada una de las mejores series de la historia. ',
      img: "https://as.com/tikitakas/imagenes/2017/04/05/portada/1491402373_785919_1491402605_noticia_normal.jpg",
      page:'https://es.wikipedia.org/wiki/Prison_Break',
      name:'Prision Break'},
    {
      contenido:'Suits es un drama-legal estadounidense creado por Aaron Korsh para USA Network. Se estrenó el 23 de junio de 2011 con un especial de noventa minutos y la primera temporada conformada por doce episodios',
      img: "https://i0.wp.com/thehappening.com/wp-content/uploads/2018/02/suits_season_8.jpg?fit=1024%2C694&ssl=1",
      page:'',
      name:'Suits'}
    ]  
  }
})

var turism = new Vue({
  el: '#turism',
  data: {
    items:[
    {
      contenido: 'En Tequila puedes recorrer los cultivos de agave a pie o en tren. Además de presenciar la elaboración de la bebida más mexicana, el tequila.', 
      img: "https://i1.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/02/Tequila-Jalisco-Mexico.jpg?w=700&ssl=1",
      page:'https://blog.vivaaerobus.com/lugares-turisticos-mexico/',
      name:'Tequila, Jalisco'},
    {
      contenido:'Probablemente es el recinto cultural más grande dentro de Jalisco, y además el edificio más conservado de Hispanoamérica. La arquitectura de estilo neoclásico, ¡te impactará!',
      img: "https://i1.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/02/Teatro-Degollado-en-Guadalajara-Jalisco.jpg?w=700&ssl=1",
      page:'https://blog.vivaaerobus.com/lugares-turisticos-mexico/',
      name:'Teatro Degollado en Jalisco'},
    {
      contenido:'mpactantes escenas presenciarás cuando conozcas los lugares para visitar en México. Subir al Cerro de la silla es una de las actividades obligadas que no debes dejar pasar cuando visites el norte de México.',
      img: "https://i2.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/02/Cerro-de-la-Silla-en-Monterrey.jpg?w=700&ssl=1",
      page:'https://blog.vivaaerobus.com/lugares-turisticos-mexico/',
      name:'Cerro de la silla, Monterrey, Nuevo León'}
    ]  
  }
})