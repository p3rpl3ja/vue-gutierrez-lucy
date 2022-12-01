Vue.component('componente-buscador',{
    data:function(){
        return{
            buscado:"",
            encontrado:""
        }
    },  
    props:{
        productos:Array
    },
    /*Recibo algo que se llama texto1 */
   // props:['tituloc', 'descripcion', 'costo', 'stockc'],
    template:/*html*/`
        <div>
            <h4>Buscador de productos</h4>
            <input type="text" placeholder="Aquí nombre de producto" v-model="buscado">
            <button @click="buscar" class="btn btn-primary"> Buscar </button>
            <div v-if="encontrado!=='' && encontrado!=='undefined'">
                <p>Titulo: {{encontrado.titulo}}</p>
                <p>Costo: {{encontrado.costo}}</p>
                <p>Stock: {{encontrado.stock}}</p>
            </div>
        </div>
    `,
    methods:{
        buscar(){
            this.encontrado=this.productos.find((producto)=>producto.titulo==this.buscado)
        }
    }
});