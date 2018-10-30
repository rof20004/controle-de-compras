export const state = ({
  produtos: []
})

export const getters = {
  produtos (state) {
    return state.produtos
  }
}

export const mutations = {
  addProduto (state, produto) {
    state.produtos.push(produto)
  }
}

export const actions = {
  addProduto (context, payload) {
    context.commit('addProduto', payload)
  }
}