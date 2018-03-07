<template>
  <v-dialog width="350px" v-model="editDialog">
        <v-spacer></v-spacer>      
        <v-btn color="indigo" fab dark absolute right slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title class="headline">Edit Meetup</v-card-title>
                        <v-card-text>
                            <v-text-field v-model="editTitle" color="indigo" name="title" id="title" label="Title" required></v-text-field>
                            <v-text-field v-model="editDescription" color="indigo" name="description" id="description" label="Description" required multi-line></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat class="indigo--text" @click="editDialog=false">cancel</v-btn>
                            <v-btn flat class="indigo--text" @click="onSave">save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:["meetup"],
    data(){
        return {
            editDialog: true,
            editTitle: this.meetup.title,
            editDescription: this.meetup.description,
        }
    },
    methods:{
        onSave(){
            this.editDialog = false
        }
    }
}
</script>
