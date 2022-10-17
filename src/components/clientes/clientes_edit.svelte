<script>
  import { navigate } from "svelte-routing";
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";
  import {productosEdit} from "../../assets/store";
  import {clientesEdit} from "../../assets/store";


  const formatofecha = (fecha) => {
    let fechaCortada = fecha.slice(0, 10);
    return fechaCortada;
  };  

  let formClientes = {
    cedula: $clientesEdit.cli_cedula,
    correo: $clientesEdit.cli_correo,
    direccion: $clientesEdit.cli_direccion,
    nombre: $clientesEdit.cli_nombre,
    telefono: $clientesEdit.cli_telefono,

  };
  const errorToast = document.getElementById("errorToast");

  const editarCliente = async () => {
    console.log(formClientes);
    try {
      const response = await axios.put(
        BASEURLWEB + "/clientes",
        formClientes
      );
      if (response.status == 200) {
        navigate("/clientes");
      }
    } catch (er) {
      console.error(er.response);
      //window.alert(er.response.data.message)
      document.readyState;
    }

    setTimeout(() => {
      errorToast.innerHTML = "";
    });
  };
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Editar Clientes</h3>
    </nav>
    <div id="errorToast" />
    <div>
      <div class="field label border">
        <input type="text" id="cedula" bind:value={formClientes.cedula} disabled/>
        <label for="cedula"> Cedula</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="nombre" bind:value={formClientes.nombre} />
        <label for="nombre"> Nombre</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input
          type="text"
          id="direccion"
          bind:value={formClientes.direccion}
        />
        <label for="direccion"> Direccion</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="telefono" bind:value={formClientes.telefono} />
        <label for="telefono"> ㅤㅤTelefono</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="correo" bind:value={formClientes.correo} />
        <label for="correo"> Correo</label>
      </div>
    </div>
    
    <button on:click={editarCliente}>Editar Cliente</button>
  </div>
</main>

<style>
  
</style>
