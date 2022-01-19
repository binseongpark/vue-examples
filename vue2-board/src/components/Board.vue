<template>
  <div :style="{ padding: '24px' }">
    <!-- <b-container> -->
    <!-- </b-container> -->
    <div>
      <b-button v-b-modal.modal-1>글쓰기</b-button>
    </div>

    <b-table :items="items" :busy="isBusy" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      align="center"
    ></b-pagination>
    <b-modal id="modal-1" title="BootstrapVue">
      <b-form-group
        label="Name"
        label-for="name-input"
        invalid-feedback="Name is required"
        :state="nameState"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState"
          required
        ></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false,
      items: [
        { first_name: "Dickerson", last_name: "MacDonald", age: 40 },
        { first_name: "Larsen", last_name: "Shaw", age: 21 },
        { first_name: "Geneva", last_name: "Wilson", age: 89 },
        { first_name: "Jami", last_name: "Carney", age: 38 },
      ],
      rows: 100,
      currentPage: 1,
      nameState: false,
      name: "",
    };
  },
  methods: {
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
  },
};
</script>

<style>
</style>
