Vue.component('componente-card',{
    data:function(){
        return{
            nombre: "Pepe trueno"
        }
    },
    props:{
        titulo:String,
        descripcion:String,
        imagen:String,
        costo:Number,
        stock:Number,
        prod:Object
    },
    /*Recibo algo que se llama texto1 */
   // props:['tituloc', 'descripcion', 'costo', 'stockc'],
    template:/*html*/`
        <div class="card col-2" style="width: 20rem;">
            <img :src="prod.imagen" class="card-img-top" :alt="prod.titulo">
            <div class="card-body text-center">
                <h5 class="card-title"> <strong> {{prod.titulo}}</strong></h5>
                <p class="card-text">{{prod.descripcion}}</p>

                <div class="cantidad mb-3">Cantidad:
                    <button v-on:click="decrementar()" class="btn btn-outline-secondary" type="button"> - </button>
                    <span>{{mostrarCantidad}}</span>
                    <button v-on:click="incrementar()" class="btn btn-outline-secondary" type="button"> + </button>
                </div>
                <p class="card-text">Costo: {{prod.costo}}</p>
                <p class="card-text">Stock: {{prod.stock}}</p>
                <button v-if="prod.stock !== 0"class="btn btn-primary"> Comprar </button>
                <p v-else>Sin stock</p>

            </div>
        </div>
    `
});