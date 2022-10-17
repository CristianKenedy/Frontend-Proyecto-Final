import { writable } from "svelte/store";

/*const dataStore = writable(0)

export default dataStore*/

const productosEdit=writable({
    pro_codigo:"",
    pro_contneto: "",
    pro_nombre:"",
    pro_precio:"",
    pro_tipo:"",
    pro_vencimiento:""
})
const clientesEdit=writable({
    cli_cedula:"", 
    cli_correo: "",
    cli_direccion: "",
    cli_nombre: "",
    cli_telefono: "",

})

export {productosEdit, clientesEdit}