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
                <v-text-field disabled v-model="editedItem.dateCreate" label="dateCreate"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field disabled v-model="editedItem.dateUpdates" label="dateUpdates"></v-text-field>
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
          <td class="text-xs-left">{{ props.item.dateCreate }}</td>
          <td class="text-xs-left">{{ props.item.dateUpdates }}</td>
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

export default {
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      {text: 'user', align: 'left', value: 'id'},
      { text: 'pseudo', value: 'pseudo' },
      { text: 'admin', value: 'admin' },
      { text: 'dateCreate', value: 'dateCreate' },
      { text: 'dateUpdates', value: 'dateUpdates' },
      { text: 'Actions', value: 'id', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      pseudo: 0,
      admin: 0,
      dateCreate: 0,
      dateUpdates: 0
    },
    defaultItem: {
      id: '',
      pseudo: 0,
      admin: 0,
      dateCreate: 0,
      dateUpdates: 0
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
    initialize () {
      // !!!!!! FAIRE requete au serveur pour recuperer les users et les initialiser ici (mettre en more coté serveur comme dans cette exemple, format json meme ordre)

      this.users = [
        {
          id: 1,
          pseudo: 'armen',
          admin: true,
          dateCreate: 24,
          dateUpdates: 4.0
        },
        {
          id: '2',
          pseudo: 'arnaud',
          admin: false,
          dateCreate: 37,
          dateUpdates: 4.3
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)

      console.log('ENVOYER AU SERVEUR ET ATTENDRE LA REP (TODO) !!!!!!!!!!!!!!!!!!!')
      console.log(this.users[index])
      // enviyer au serveur
      confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1) // faire le spilce apres la rep du serveur +, si rep - prevenir user
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      console.log('ENVOYER AU SERVEUR (TODO) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
      // envoyer les donné au serveur
      this.close()
    }
  }
}

</script>

<style scoped>

</style>
