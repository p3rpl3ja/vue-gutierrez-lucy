let app = new Vue({
    el:'#app',
    data:{
        mensaje:"Platos disponibles",
        stock:25,
        productosgenerales:[
            {
                titulo:"Salmón teriyaki",
                imagen:"./images/salmon-teriyaki.jpg",
                descripcion:"Plato típico oriental. En japonés, el teriyaki es una técnica culinaria basada en asar la carne adobada en una salsa agridulce.",
                botonInc:"mas",
                botonDec:"menos",
                costo:2990,
                stock:10
            },
            {
                titulo:"Pasta Fetuccini",
                imagen:"./images/pasta-fetuccini.jpg",
                descripcion:"Lo mejor de Italia de la mano de nuestro Chef.",
                botonInc:"mas",
                botonDec:"menos",
                costo:1900,
                stock:10
            },
            {
                titulo:"Burritos",
                imagen:"./images/burritos.jpg",
                descripcion:"Burritos mexicanos extra picantes",
                botonInc:"mas",
                botonDec:"menos",
                costo:1200,
                stock:0
            },
            {
                titulo:"Salmón Grillado",
                descripcion:"Pesca del día. Salmón grillado",
                imagen:"./images/salmon-grillado.jpg",
                botonInc:"mas",
                botonDec:"menos",
                costo:1200,
                stock:20
            }
        ],
        productosveganos:[
            {
                titulo:"Humus de garbanzo",
                imagen:"./images/salmon-teriyaki.jpg",
                descripcion:"zaraza",
                botonInc:"mas",
                botonDec:"menos",
                costo:699,
                stock:12
            },
            {
                titulo:"Hamburguesas de lentejas",
                imagen:"./images/pasta-fetuccini.jpg",
                descripcion:"zaraza",
                botonInc:"mas",
                botonDec:"menos",
                costo:499,
                stock:15
            }
        ],
        productossintacc:[
            {
                titulo:"Empanadas árabes",
                imagen:"./images/salmon-teriyaki.jpg",
                descripcion:"Con tapas sin TACC",
                botonInc:"mas",
                botonDec:"menos",
                costo:800,
                stock:10
            },
            {
                titulo:"Pasta de zanahoria",
                imagen:"./images/pasta-fetuccini.jpg",
                descripcion:"SINTACC.",
                botonInc:"mas",
                botonDec:"menos",
                costo:1900,
                stock:10
            }
        ],
        carta:{
        },
        cantidad:0
    },
    methods:{
        incrementar(){
            this.cantidad+=1;
            return this.cantidad;
        },
        decrementar(){
            this.cantidad-=1;
            return this.cantidad;
        }
    },
    computed:{
        mostrarCantidad(){
            return this.cantidad;
        }
        
    }
});