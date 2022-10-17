<script>
  import { navigate } from "svelte-routing"

  const navegacionCliente = () =>{
      navigate("/clientes")
  }
  const navegacionProducto = () =>{
    navigate("/productos")
  }

</script>

<main>
    <div class="fluid">
        <h2>Proyecto Final</h2>
        <h3>Integrantes:</h3>
        <h4>Angelo Vaca</h4>
        <h4>Rafael Rosero</h4>
        <h4>Cristian Castro</h4>
      
        <div class="row">
          <div>
            <button on:click={navegacionCliente} class="border">
              <h4>Clientes</h4>
            </button>
          </div>

          <div>
            <button on:click={navegacionProducto} class="border">
              <h4>Productos</h4>
            </button>
          </div>

        </div>

    </div>


</main>

<style>

</style>