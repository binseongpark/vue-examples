<template>
  <div :style="{ padding: '24px' }">
    <!-- <b-container> -->
    <!-- </b-container> -->
    <div>
      <b-button v-b-modal.modal-1>글쓰기</b-button>
    </div>

    <b-table :items="list" :busy="isBusy" class="mt-3" outlined>
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

      <template #cell(image)="data">
        <div>
          <img width="30px" :src="data.item.image" />
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      align="center"
      @change="handlePageChange"
    ></b-pagination>
    <b-modal id="modal-1" title="BootstrapVue" @ok="onSumit">
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
import { rootComputed, rootMethods } from "@/store/helpers";

export default {
  created: function () {
    this.getPosts({
      page: 0,
      size: 5,
    }).then((value) => {
      console.log("@@@@ value: ", value);
    });
  },
  computed: {
    ...rootComputed,
  },
  data() {
    return {
      isBusy: false,
      rows: 100,
      currentPage: 1,
      nameState: false,
      name: "",
      fields: ["id", "name", "image"],
    };
  },
  methods: {
    ...rootMethods,
    toggleBusy() {
      this.isBusy = !this.isBusy;
    },
    handlePageChange(e) {
      console.log(e - 1);
      this.getPosts({
        page: e - 1,
        size: 5,
      }).then((value) => {
        console.log("@@@@ value: ", value);
      });
    },
    onSumit(bvModalEvt) {
      bvModalEvt.preventDefault();
      alert("post call");

      this.$nextTick(() => {
        this.$bvModal.hide("modal-1");
      });
    },
  },
};
</script>

<style>
</style>
