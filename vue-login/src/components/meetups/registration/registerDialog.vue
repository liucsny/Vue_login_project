<template>
  <v-dialog presistent v-model="registerDialog">
      <v-btn slot="activator">

      </v-btn>
  </v-dialog>
</template>

<script>
export default {
  data(){
      return {
          registerDialog: false,
      }
  }
}
</script>