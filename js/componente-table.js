Vue.component('componente-table',{
    props:{
        producto:Object
    },
    /*Recibo algo que se llama texto1 */
   // props:['tituloc', 'descripcion', 'costo', 'stockc'],
    template:/*html*/`
        <div> 
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{{producto.titulo}}</td>
                        <td>{{producto.costo}}</td>
                        <td>{{producto.stock}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});