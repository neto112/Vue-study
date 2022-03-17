<template>
  <v-row class="vh-100 vw-100 row-login">
    <v-col sm="5" class="d-flex justify-content-center align-items-center left-lofin">
      <div class="col-8">
        <h2 class="text-center mb-5 title-login">Faça o login</h2>
        <b-form action="">
          <b-form-group label="E-mail" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="cristianorneto@gmail.com"
              autocomplete="off"
              v-model="form.email"
            ></b-form-input>
          </b-form-group>

          <form-group label-for="password">
            <label class="d-flex justify-content-between">
              Senha
              <small><a href="#">Esqueceu sua senha?</a></small>
            </label>
            <form-input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              v-model="form.password"
            ></form-input>
          </form-group>
          <v-tbn type="button" variant="primary" block @click="login">
            <i class="fas fa-sign-in-alt"></i>Entrar</v-tbn
          >

          <hr />

          <v-btn
            type="button"
            variant="outline-secondary"
            block
            @click="register"
          >
            <i class="fas fa-user-plus">Não tenho conta</i></v-btn
          >
        </b-form>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      }
    }
  },

  methods: {
    login() {},
    register() {},
  }
};
</script>

<style>
*, /*resetar o estilo da página*/
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  font-weight: bold;
}
</style>
