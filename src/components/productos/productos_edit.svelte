<script>
  import { navigate } from "svelte-routing";
  import axios from "axios";
  import { BASEURLWEB } from "../../assets/ApiRutas";
  import {productosEdit} from "../../assets/store";


  const formatofecha = (fecha) => {
    let fechaCortada = fecha.slice(0, 10);
    return fechaCortada;
  };  

  let formProductos = {
    codigo: $productosEdit.pro_codigo,
    nombre: $productosEdit.pro_nombre,
    vencimiento: formatofecha ($productosEdit.pro_vencimiento),
    contneto: $productosEdit.pro_contneto,
    pro_tipo: $productosEdit.pro_tipo,
    pro_precio: $productosEdit.pro_precio,
  };
  const errorToast = document.getElementById("errorToast");

  const editarProducto = async () => {
    console.log(formProductos);
    try {
      const response = await axios.put(
        BASEURLWEB + "/productos",
        formProductos
      );
      if (response.status == 200) {
        navigate("/productos");
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
      <h3>Editar Producto</h3>
    </nav>
    <div id="errorToast" />
    <div>
      <div class="field label border">
        <input type="text" id="codigo" bind:value={formProductos.codigo} disabled/>
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
    <button on:click={editarProducto}>Editar Producto</button>
  </div>
</main>

<style>
</style>
