<script>
  import { navigate } from "svelte-routing";
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";

  let formProductos = {
    codigo: "",
    nombre: "",
    vencimiento: "",
    contneto: "",
    pro_tipo: "",
    pro_precio: "",
  };
  const errorToast = document.getElementById("errorToast")

  const crearProducto = async () => {
    console.log(formProductos);
    try {
      const response = await axios.post(
        BASEURLWEB + "/productos",
        formProductos
      );
      if (response.status == 201) {
        navigate("/productos")
      }
    } catch (er) {
        console.error(er.response)
        //window.alert(er.response.data.message)
        document.readyState
    }

    setTimeout(() => {
       errorToast.innerHTML = "" 
    }, );
  };

  //const back
  const navegacionRegresar = () =>{
    navigate("/productos")
  }

  const soloNumeros=(evt)=>{

    return "return {evt.charCode >=48 && evt.charCode <=57 }"
  }
</script>

<main>
  <div class="fluid">
    <nav class="padding-titulo">
      <h3>Nuevo Producto</h3>
    </nav>
    <div id="errorToast"></div>
    <div>
      <div class="field label border">
        <input type="text" id="codigo" bind:value={formProductos.codigo} />
        <!-- /*onkeypress={soloNumeros()} pattern="[0-9+]"  maxlength=10 -->
        <label for="codigo"> Codigo</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="nombre" bind:value={formProductos.nombre} />
        <label for="nombre"> Nombre</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input
          type="date"
          id="vencimiento"
          bind:value={formProductos.vencimiento}
        />
        <i>today</i>
        <label class="active" for="vencimiento"> Fecha de Vencimiento</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="contneto" bind:value={formProductos.contneto} />
        <label for="contneto"> Contenido Neto</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="tipo" bind:value={formProductos.pro_tipo} />
        <label for="tipo"> Tipo</label>
      </div>
    </div>
    <div>
      <div class="field label border">
        <input type="text" id="precio" bind:value={formProductos.pro_precio} />
        <label for="precio"> Precio</label>
      </div>
    </div>
    <button on:click={crearProducto} class="border">Anadir Producto</button>
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
