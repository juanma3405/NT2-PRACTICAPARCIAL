
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
        formData: this.getInicialData(),
        formState: {},
       /* nombreLengthMin: 5,
        nombreLengthMax: 15,
        edadMin: 18,
        edadMax: 120,*/
        clientes: [],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
     getInicialData(){
      return {
        nombre: "",
        dni:"",
        totalAPagar:"",
        pagoEfectuado:"",
        saldo:0
      }
      
    },

     enviar() {
      console.log({...this.formData})
      this.clientes.push({...this.formData})
      this.formData=this.getInicialData()
      this.formState._reset()
    },

    convertirFmtFyh() {
        return new Date().toLocaleString()
      },

    calcularDeuda(totalAPagar,pagoEfectuado) {
      return this.saldo = totalAPagar - pagoEfectuado
    },

    deuda(totalAPagar,pagoEfectuado){
      this.saldo = this.calcularDeuda(totalAPagar,pagoEfectuado)
      if (this.saldo<0){
        return [
          'text-white',
          'bg-primary' 
        ] 
      }
      else if (this.saldo>0){
        return [
          'text-white',
          'bg-danger'  
        ]
      }
      else {
         return [
          'text-white',
          'bg-success' 
        ]
      }
    },

  
  }
}


