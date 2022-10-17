<script>
  import { Router, Route, navigate } from "svelte-routing"
  import ClientesVista from "./components/clientes/clientes_vista.svelte";
  import ClientesCreate from "./components/clientes/clientes_create.svelte";
  import ClientesEdit from "./components/clientes/clientes_edit.svelte";

  import Inicio from "./components/inicio/inicio.svelte";
  import ProductosCreate from "./components/productos/productos_create.svelte";
  import ProductosVista from "./components/productos/productos_vista.svelte";
  import ProductosEdit from "./components/productos/productos_edit.svelte";
  
</script>


<main>
  <Router>
    
    <Route exact path="/productos"><ProductosVista/></Route>
    <Route exact path="/productos/new"><ProductosCreate/></Route>
    <Route exact path="/productos/edit"><ProductosEdit/></Route>
    <Route exact path="/clientes"><ClientesVista/></Route>
    <Route exact path="/clientes/new"><ClientesCreate/></Route>
    <Route exact path="/clientes/edit"><ClientesEdit/></Route>

    <Route exact path="/"><Inicio/></Route>
    
  </Router>
</main>

<style>
 
</style>
