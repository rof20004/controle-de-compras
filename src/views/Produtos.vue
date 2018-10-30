<template>
  <div class="container">
    <div id="createProdutosBtn" class="fixed-action-btn">
      <a class="btn-floating btn-large red waves-effect waves-light modal-trigger" data-target="modalCadastrarProduto">
        <i class="large material-icons">mode_edit</i>
      </a>
    </div>

    <div class="row" v-if="produtos.length">
      <div class="col s12">
        <h2 class="header flow-text">Produtos</h2>
        <div class="card horizontal" v-for="produto in produtos" :key="produto.id">
          <div class="card-image">
            <img class="responsive-img" :src="produto.imagem">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p class="left-align" v-text="produto.nome"></p>
              <small class="left-align" v-text="produto.descricao"></small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="page-content sem-pedidos-container">
      <h1 class="sem-pedidos flow-text">Nenhum produto encontrado</h1>
    </div>

    <div id="modalCadastrarProduto" class="modal">
      <div class="modal-content">
        <div class="row">
          <div class="col">
            <h4 class="flow-text">Cadastrar Produto</h4>
          </div>
          <form @submit.stop.prevent="save" class="col s12" autocomplete="off">
            <div class="row">
              <div class="input-field col s12">
                <input id="produtoNome" type="text" v-model="nome">
                <label for="produtoNome">Nome</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="produtoDescricao" class="materialize-textarea" v-model="descricao"></textarea>
                <label for="produtoDescricao">Descrição</label>
              </div>
            </div>
            <div class="row">
              <div class="file-field input-field">
                <div class="btn">
                  <span>Imagem</span>
                  <input type="file" @change="onFileChange">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s12 m4">
                <button type="submit" class="btn waves-effect waves-light" name="action">Salvar
                  <i class="material-icons left">save</i>
                </button>
              </div>
              <div class="col s12 m4">
                <button @click="modalCadastrarProduto.close()" type="button" class="btn waves-effect waves-light orange darken-4" name="action">Cancelar
                  <i class="material-icons left">close</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      components: {
        floatButton: null,
        modalCadastrarProduto: null
      },
      nome: '',
      descricao: '',
      imagem: ''
    }
  },

  computed: {
    produtos () {
      return this.$store.getters.produtos
    }
  },

  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.getBase64(files[0])
    },

    getBase64 (file) {
      this.disabled = true
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = evt => {
        this.imagem = reader.result
        this.disabled = false
      }
      reader.onerror = () => {
        this.disabled = false
        this.$store.dispatch('showSnackbarInfo', 'Ocorreu um erro ao ler o arquivo')
      }
    },

    save () {
      this.$store.dispatch('addProduto', { id: Date.now(), nome: this.nome, descricao: this.descricao, imagem: this.imagem })
      this.resetFormCadastrarProduto()
      this.modalCadastrarProduto.close()
    },

    resetFormCadastrarProduto () {
      this.nome = ''
      this.descricao = ''
      this.imagem = ''
    },

    resetAllComponents () {
      window.M.updateTextFields()
      window.M.textareaAutoResize(document.querySelector('#produtoDescricao'))
    }
  },

  mounted () {
    this.resetAllComponents()

    const floatButton = document.querySelector('#createProdutosBtn');
    window.M.FloatingActionButton.init(floatButton, { hoverEnabled: false });
    this.floatButton = window.M.FloatingActionButton.getInstance(floatButton)

    const modalCadastrarProduto = document.querySelector('#modalCadastrarProduto');
    window.M.Modal.init(modalCadastrarProduto, { onOpenStart: this.resetAllComponents, dismissible: false });
    this.modalCadastrarProduto = window.M.Modal.getInstance(modalCadastrarProduto)
  }
}
</script>

<style scoped>
.sem-pedidos-container {
	display: table;
	height: 80vh;
	width: 100%;
}

.sem-pedidos {
	display: table-cell;
	text-align: center;
	vertical-align: middle;
	text-shadow: 0 0 2px rgba(0,0,0,0.05);
	color: #ddd;
	font-style: italic;
}
</style>
