<template>
  <section class="src-componentes-resultadosChoice">
    <div class="jumbotron">
      <h1>Resultados Choice</h1>
      <hr />
      <br />

      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <td><strong>Numero de pregunta </strong></td>
            <td><strong>Respuesta</strong></td>
          </tr>

          <tr>
            <td>1</td>
            <td>a</td>
          </tr>

          <tr>
            <td>2</td>
            <td>b</td>
          </tr>

          <tr>
            <td>3</td>
            <td>a</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-resultadosChoice',
    props: [],
    mounted () {

    },
    data () {
      return {
       
      }
    },
    methods: {
      

    },
    computed: {
     
    }
}


</script>

<style scoped lang="css">
.src-componentes-resultadosChoice {
}

.jumbotron {
  background-color: blue;
  color: white;
}
</style>
