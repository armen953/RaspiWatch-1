<template>
  <div id="inscription">

    <div id="content">
      <h1 class="text-xs-center">Inscription</h1>
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
                    name="email"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required>
                  </v-text-field>
                  <v-text-field
                    name="password"
                    label="Password"
                    hint="At least 8 characters"
                    v-model="password"
                    :rules="passwordRules"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'text' : 'password'">
                  </v-text-field>
                  <v-checkbox
                    label="Do you agree?"
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue! ( a changer)']"
                    required>
                  </v-checkbox>

                  <v-alert type="error" :value="error==null ? false : true">
                    {{ error }}
                  </v-alert>

                  <v-alert type="success" :value="userRegistered ? true : false">
                    L'utilisateur à été crée !!
                  </v-alert>

                  <v-btn @click="submit" :disabled="!valid" >
                    submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
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
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail est requis',
      (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit etre valide'
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Le mot de passe est requis'
    ],
    checkbox: false,
    e1: false,
    error: null,
    userRegistered: false
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.register()
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    async register () {
      try {
        const response = await AuthentificationService.register({
          pseudo: this.name,
          email: this.email,
          password: this.password,
          admin: false
        })
        this.userRegistered = true
        this.error = null
        console.log(response.data) // a effacer
      } catch (error) {
        this.error = error.response.data.error
        this.userRegistered = false
      }
    }
  }
}
</script>

<style scoped>
#inscription{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
