<template>
  <div id="connexion">

    <div id="content">
      <h1 class="text-xs-center">Connexion</h1>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    name="name"
                    label="Pseudo"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required>
                  </v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'text' : 'password'">
                  </v-text-field>

                  <v-alert type="error" :value="error==null ? false : true">
                    {{ error }}
                  </v-alert>

                  <v-btn @click="submit" :disabled="!valid" >Se connecter</v-btn>
                </v-form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
// import Navbar from '../../Navbar.vue'
export default {
  // components: {
  //   navbar: Navbar
  // },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Le pseudo est requis',
      (v) => (v && v.length <= 10) || ('Le Pseudo doit faire moins de 10 caracteres')
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Le mot de passe est requis'
    ],
    e1: false,
    error: null
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    async login () {
      try {
        const response = await AuthentificationService.login({
          pseudo: this.name,
          password: this.password
        })
        // this.$store.dispatch('setToken', response.data.token) // -> appeler la méthode setToken des actions
        // this.$store.dispatch('setUser', response.data.user) // -> appeler la méthode setUser des actions
        this.$store.dispatch('userLoggedIn', response.data.user, response.data.token) // voir dans -> store/store.js
        console.log(response.data) // a effacter
      } catch (error) {
        // this.error = 'Les informations de connexions sont incorrectes'
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
#connexion{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
