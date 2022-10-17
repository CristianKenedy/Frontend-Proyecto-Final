<script>
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { clientesEdit} from "../../assets/store"
  import { escape_attribute_value } from "svelte/internal";

  let datos = [];



  const getClientes = async () => {
    const response = await axios.get(BASEURLWEB + "/clientes");
    datos = response.data;
    console.log(response.data);
  };

  onMount(() => {
    getClientes();
  });
  const ButtonNew = () => {
    navigate("/clientes/new");
  };
  const ButtonEdit = (cliente) => {
    clientesEdit.set(cliente)
    navigate("/clientes/edit"); 
    return  undefined
  };
  const ButtonDelete = async (cedula) => {
   try {
    const confirmacion = window.confirm("¿Está seguro de eliminar este cliente ?")
    if(confirmacion){
      const response = await axios.delete(BASEURLWEB+"/clientes/"+cedula)
      window.alert(response.data.message)
      location.reload()
    }        
   } catch (er) {
    window.alert(er.response.data.message)    
   }
   return undefined
  };
  const onDeleteClick = (e,cedula) =>
  {ButtonDelete(cedula)
    return undefined
  }

  //asdadasdasd
  const navegacionRegresar = () =>{
      navigate("/")
  }
</script>

<main>
  

  <div class="fluid">
    <nav class="padding-titulo">
      
    <h3>Tabla de Clientes</h3>
    <div class="max" />
    <button on:click={ButtonNew} class="border">
      <span class="material-symbols-outlined">add_circle</span>
    </button>
  </nav>

  </div>
  <table class="border">
    <thead>
      <tr>
        <th>Cedula</th>
        <th>Nombre</th>
        <th>Direccion</th>
        <th>ㅤㅤTelefono</th>
        <th>Correo Electronico</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {#if datos.length == 0}
        <tr>
          <th>Cargando...</th>
          <th />
          <th />
          <th />
        </tr>
      {:else}
        {#each datos as clientes}
          <tr>
            <td>{clientes.cli_cedula}</td>
            <td>{clientes.cli_nombre}</td>
            <td>ㅤ{clientes.cli_direccion}</td>
            <td>ㅤㅤ{clientes.cli_telefono}</td>
            <td>ㅤㅤ{clientes.cli_correo}</td>
            <td>
              <button class="transparent square"on:click={ButtonEdit(clientes)}>
                <i class="material-symbols-outlined">edit</i>
               </button>
               <button class="transparent square"on:click={onDeleteClick(event,clientes.cli_cedula)}>
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
    <button class="circle border" on:click={navegacionRegresar}>
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
