<template>
  <v-dialog value="true" persistent max-width="200">
    <v-card>
      <v-card-text class="text-center pa-10">
        <v-progress-circular :size="70" indeterminate class="primary--text"/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default{
    name: 'loading',
  }
</script>