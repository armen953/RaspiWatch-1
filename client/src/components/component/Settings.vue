<template>
  <div id="settings">
     <v-layout row>
      <v-flex xs12 sm8>
        <v-container>
          <div class="informations">
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Pseudo</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  :value="$store.state.isUserLoggedIn ?  $store.state.user.pseudo:  'null' "
                  disabled
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-subheader>Email</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  :value="$store.state.isUserLoggedIn ? $store.state.user.email : 'null'"
                  disabled
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4>
                <v-subheader>Date d'inscription</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  :value="$store.state.isUserLoggedIn ? $store.state.user.createdAt :'null'"
                  disabled
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

             <v-layout row>
              <v-flex xs4>
                <v-subheader>Date mise à jour profile</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Label Text"
                  :value="$store.state.isUserLoggedIn ? $store.state.user.updatedAt :'null'"
                  disabled
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Admin</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-checkbox :input-value="$store.state.isUserLoggedIn ? $store.state.user.admin : false" value disabled></v-checkbox>
              </v-flex>
            </v-layout>
          </div>
          <div class="display-1" >Changer mot de passe</div>
          <v-form v-model="valid" ref="form">
            <v-text-field
              name="password"
              label="Ancien mot de passe"
              v-model="password"
              :rules="passwordRules"
              :append-icon="p1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (p1 = !p1)"
              :type="p1 ? 'text' : 'password'">
            </v-text-field>
            <v-text-field
              name="Newpassword"
              label="Nouveau mot de passe"
              v-model="Newpassword"
              :rules="passwordRules"
              :append-icon="p1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (p2 = !p2)"
              :type="p2 ? 'text' : 'password'">
            </v-text-field>
            <v-btn @click="submit" :class="{ green: valid, red: !valid }">Mettre a jour le mot de passe</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </v-container>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      valid: false,
      p1: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Le mot de passe est requis'
      ],
      Newpassword: '',
      p2: false
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit() // metre la méthode pour envoyer vers un URL serveur
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>


<style>

</style>

