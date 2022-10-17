<script>
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { productosEdit} from "../../assets/store"
  import { escape_attribute_value } from "svelte/internal";
  
  let datos = [];

  const formatofecha = (fecha) => {
    let fechaCortada = fecha.slice(0, 10);
    return fechaCortada;
  };
  const getProductos = async () => {
    const response = await axios.get(BASEURLWEB + "/productos");
    datos = response.data;
    console.log(response.data);
  };

  onMount(() => {
    getProductos();
  });
  const ButtonNew = () => {
    navigate("/productos/new");
  };

  const ButtonEdit = (producto) => {
    productosEdit.set(producto)
    navigate("/productos/edit"); 
    return  undefined
  };
  const ButtonDelete = async (codigo) => {
   try {
    const confirmacion = window.confirm("¿Está seguro de eliminar este producto ?")
    if(confirmacion){
      const response = await axios.delete(BASEURLWEB+"/productos/"+codigo)
      window.alert(response.data.message)
      location.reload()
    }        
   } catch (er) {
    window.alert(er.response.data.message)    
   }
   return undefined
  };
  const onDeleteClick = (e,codigo) =>
  {ButtonDelete(codigo)
    return undefined
  }

  //Constantes
  const navegacionRegresar = () =>{
    navigate("/")
  }
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Tabla de Productos</h3>
      <div class="max" />
      <button on:click={ButtonNew} class="border">
        <span class="material-symbols-outlined">add_circle</span>
      </button>
    </nav>
  </div>
  <table class="border">
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Vencimiento</th>
        <th>Contenido Neto</th>
        <th>Tipo</th>
        <th>ㅤㅤPrecio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {#if datos.length == 0}
        <tr>
          <th>Cargando Datos...</th>
          <th />
          <th />
          <th />
          <th />
        </tr>
      {:else}
        {#each datos as productos}
          <tr>
            <td>ㅤ{productos.pro_codigo}</td>
            <td>{productos.pro_nombre}</td>
            <td>ㅤㅤ{formatofecha(productos.pro_vencimiento)}</td>
            <td>ㅤㅤ{productos.pro_contneto}</td>
            <td>{productos.pro_tipo}</td>
            <td>ㅤㅤ{productos.pro_precio}</td>
            <td>
              <button class="transparent square"on:click={ButtonEdit(productos)}>
                <i class="material-symbols-outlined">edit</i>
               </button>
               <button class="transparent square"on:click={onDeleteClick(event,productos.pro_codigo)}>
                <i class="material-symbols-outlined">delete</i>
               </button>
              
              
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>

  <div>
    <h1> </h1>
  </div>

  <div>
    <button class="circle border" on:click={navegacionRegresar} >
      <i>arrow_back</i>
      <div class="dropdown left no-wrap">
        
      </div>
    </button>
  </div>
</main>

<style>
  .padding-titulo {
    padding-top: 5%;
    padding-bottom: 5%;
  }
</style>
