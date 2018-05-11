<template>
  <div>
    <!-- dialogue -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="editedItem.id" label="user id"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="editedItem.pseudo" label="pseudo"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-checkbox v-model="editedItem.admin" label="admin"></v-checkbox>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="editedItem.createdAt" label="createdAt"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="editedItem.updatedAt" label="updatedAt"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Annuler</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Mettre à jour</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- end dialogue -->

    <v-card>
      <v-card-title>
        Liste des utilisateurs qui ont un compte
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Chercher"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.pseudo }}</td>
          <td class="text-xs-center"> <v-checkbox  disabled v-model="props.item.admin"></v-checkbox></td>
          <td class="text-xs-left">{{ props.item.createdAt }}</td>
          <td class="text-xs-left">{{ props.item.updatedAt }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
         <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Aucun resultat trouvé pour : "{{ search }}"
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      {text: 'user', align: 'left', value: 'id'},
      { text: 'pseudo', value: 'pseudo' },
      { text: 'admin', value: 'admin' },
      { text: 'createdAt', value: 'createdAt' },
      { text: 'updatedAt', value: 'updatedAt' },
      { text: 'Actions', value: 'id', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      pseudo: 0,
      admin: 0,
      createdAt: 0,
      updatedAt: 0
    },
    defaultItem: {
      id: '',
      pseudo: 0,
      admin: 0,
      createdAt: 0,
      updatedAt: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Mettre a jour l\'utilisateur'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      try {
        let users = await UserService.getUsers(this.$store.state.token)
        this.users = users.data
        console.log(users)
      } catch (e) {
        console.log(e)
      }
      // this.users = [
      //   {
      //     id: 1,
      //     pseudo: 'armen',
      //     admin: true,
      //     createdAt: 24,
      //     updatedAt: 4.0
      //   }
      // ]
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)

      // enviyer au serveur
      let rep = confirm('Are you sure you want to delete this item?')
      if (rep) {
        try {
          UserService.deleteUser(this.users[index].pseudo, this.$store.state.token)
          this.users.splice(index, 1) // faire le spilce apres la rep du serveur +, si rep - prevenir user
        } catch (e) {
          console.log('Erreur lors de la suppression', e)
        }
      }
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    async save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
        let a = await UserService.updateUser(this.editedItem.pseudo, {admin: this.editedItem.admin}, this.$store.state.token)
        console.log(a.data.message)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  }
}

</script>

<style scoped>

</style>
