<script>
    import { navigate } from "svelte-routing";
    import axios from "axios";
    import { BASEURLWEB } from "../../assets/ApiRutas";
  
    let formClientes = {
      cedula: "",
      nombre: "",
      direccion: "",
      telefono: "",
      correo: "",
      
    };
    const errorToast = document.getElementById("errorToast")
  
    const crearClientes = async () => {
      console.log(formClientes);
      try {
        const response = await axios.post(
          BASEURLWEB + "/clientes",
          formClientes
        );
        if (response.status == 201) {
          navigate("/clientes")
        }
      } catch (er) {
          console.error(er.response)
          errorToast.innerHTML = `
          <div class="toast pink white-text">
              <i>error</i>
              <span> ` + er.response.data.message + `</span>
          </div>
  `
      }
  
      setTimeout(() => {
         errorToast.innerHTML = "" 
      }, );
    };

    const navegacionRegresar = () =>{
      navigate("/clientes")
    }
  </script>
  
  <main>
    <div class="fluid">
      <nav class="padding-titulo">
        <h3>Nuevo Cliente</h3>
      </nav>
      <div id="errorToast"></div>
      <div>
        <div class="field label border">
          <input type="text" id="cedula" bind:value={formClientes.cedula} />
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
          
          <label class="active" for="direccion"> Direccion</label>
        </div>
      </div>
      <div>
        <div class="field label border">
          <input type="text" id="telefono" bind:value={formClientes.telefono} />
          <label for="telefono"> Telefono</label>
        </div>
      </div>
      <div>
        <div class="field label border">
          <input type="text" id="correo" bind:value={formClientes.correo} />
          <label for="correo"> Correo</label>
        </div>
      </div>
      
      <button on:click={crearClientes} class="border">Anadir Cliente </button>
    </div>

    
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
  </style>
  