<template>
  <div id="home">
    <div class="navbar-fixed">
      <nav class="blue">
        <div class="nav-wrapper">
          <a href="#" data-target="slide-out" class="sidenav-trigger show-on-medium-and-up"><i class="material-icons">menu</i></a>
          <a href="/" class="brand-logo"><span class="flow-text">Controle de Compras</span></a>
        </div>
      </nav>
    </div>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img :src="require('@/assets/prodam_logo.jpg')">
          </div>
          <img class="circle" :src="require('@/assets/venom.jpg')">
          <span class="white-text name">Venom "The Monster" Dead</span>
          <span class="white-text email">venom@gmail.com</span>
        </div>
      </li>
      <li><router-link to="/" tag="a" class="sidenav-close" exact><i class="material-icons">home</i>Home</router-link></li>
      <li><router-link to="/produtos" tag="a" class="sidenav-close" exact><i class="material-icons">cloud</i>Cadastrar Produtos</router-link></li>
      <li><router-link to="/carrinho" tag="a" class="sidenav-close" exact><i class="material-icons">shopping_cart</i>Criar Carrinho</router-link></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    const options = { draggable: true }
    const elems = document.querySelectorAll('.sidenav')
    window.M.Sidenav.init(elems, options)
  }
}
</script>

<style scoped>
/* .brand-logo {
  font-size: 18px;
} */

.router-link-active {
  background:goldenrod;
}

.router-link-active:hover {
  background:goldenrod;
}
</style>
