<template>
  <div class="container center-align">
    <h1 class="flow-text">Cadastrar Produtos</h1>
    <div class="row">
      <form @submit.stop.prevent="save" class="col s12" autocomplete="off">
        <div class="row">
          <div class="input-field col s12">
            <input id="produtoNome" type="text" class="validate" v-model="nome">
            <label for="produtoNome">Nome</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button class="btn waves-effect waves-light" type="submit" name="action">Salvar
              <i class="material-icons right">save</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nome: ''
    }
  },

  methods: {
    save () {
      alert(this.nome)
    }
  },

  mounted () {
    window.M.updateTextFields()
  }
}
</script>
