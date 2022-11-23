let app = new Vue({
    el:'#app',
    data:{
        mensaje:"Platos disponibles",
        carta:{
            imagen:"./images/salmon-teriyaki.jpg",
            titulo:"Salmón teriyaki",
            descripcion:"Plato típico oriental. En japonés, el teriyaki es una técnica culinaria basada en asar la carne adobada en una salsa agridulce.",
            botonInc:"mas",
            botonDec:"menos",
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