<!--Location组件-->
<template>
  <Row type="flex">
    <Col span="6">
      <Select
        clearable
        filterable
        v-model="branchSelectVal"
        @on-change="locationBranchSelect"
        @on-clear="clearBranchOption"
      >
        <Option
          :key="item.locationBranchId"
          :value="item.locationBranchId"
          v-for="item in locationBranchList"
          >{{ item.locationBranchName }}</Option
        >
      </Select>
    </Col>
    <Col span="6">
      <Select
        clearable
        filterable
        v-model="buildingSelectVal"
        @on-change="locationBuildingSelect"
        @on-clear="clearBuildingOption"
      >
        <Option
          :key="item.locationBuildingId"
          :value="item.locationBuildingId"
          v-for="item in locationBuildingList"
          >{{ item.locationBuildingName }}</Option
        >
      </Select>
    </Col>
    <Col span="6">
      <Select
        clearable
        filterable
        v-model="floorSelectVal"
        @on-change="locationFloorSelect"
        @on-clear="clearFloorOption"
      >
        <Option
          :key="item.locationFloorId"
          :value="item.locationFloorId"
          v-for="item in locationFloorList"
          >{{ item.locationFloorName }}</Option
        >
      </Select>
    </Col>
    <Col span="6">
      <Select
        clearable
        filterable
        v-model="roomSelectVal"
        @on-change="locationRoomSelect"
        @on-clear="clearRoomOption"
      >
        <Option
          :key="item.locationRoomId"
          :value="item.locationRoomId"
          v-for="item in locationRoomList"
          >{{ item.locationRoomName }}</Option
        >
      </Select>
    </Col>
  </Row>
</template>
<script>
import { locationBranchApi } from "@/api/navigation/location-branch";
import { locationBuildingApi } from "@/api/navigation/location-building";
import { locationFloorApi } from "@/api/navigation/location-floor";
import { locationRoomApi } from "@/api/navigation/location-room";
export default {
  name: "LocationSelect",
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      locationBranchList: [],
      locationBuildingList: [],
      locationFloorList: [],
      locationRoomList: [],
      selectValue: this.value,

      branchSelectVal: 0,
      buildingSelectVal: 0,
      floorSelectVal: 0,
      roomSelectVal: 0,
    };
  },
  watch: {
    value: function (newVal) {
      if (newVal) {
        if (newVal[0]) {
          this.branchSelectVal = newVal[0];
          this.queryLocationBuilding();
        }
        if (newVal[1]) {
          this.buildingSelectVal = newVal[1];
          this.queryLocationFloor();
        }
        if (newVal[2]) {
          this.floorSelectVal = newVal[2];
          this.queryLocationRoom();
        }
        if (newVal[3]) {
          this.roomSelectVal = newVal[3];
        }
      }
    },
    selectValue: function (newVal) {
      if (newVal) {
        this.$emit("on-select", this.selectValue);
      }
    },
  },
  mounted() {
    this.reset();
    this.queryLocationBranch();
  },
  methods: {
    reset() {
      this.selectValue = [];
    },
    async queryLocationBranch() {
      let params = {};
      let res = await locationBranchApi.queryLocationBranchList(params);
      this.locationBranchList = res.data;
    },
    queryLocationBuilding() {
      if (this.branchSelectVal > 0) {
        (async () => {
          let params = {
            locationBranchId: this.branchSelectVal,
          };
          let res = await locationBuildingApi.queryLocationBuildingist(params);
          this.locationBuildingList = res.data;
        })();
      }
    },
    queryLocationFloor() {
      if (this.branchSelectVal > 0 && this.buildingSelectVal > 0) {
        (async () => {
          let params = {
            locationBranchId: this.branchSelectVal,
            locationBuildingId: this.buildingSelectVal,
          };
          let res = await locationFloorApi.queryLocationFloorList(params);
          this.locationFloorList = res.data;
        })();
      }
    },
    queryLocationRoom() {
      if (
        this.branchSelectVal > 0 &&
        this.buildingSelectVal > 0 &&
        this.floorSelectVal > 0
      ) {
        (async () => {
          let params = {
            locationBranchId: this.branchSelectVal,
            locationBuildingId: this.buildingSelectVal,
            locationFloorId: this.floorSelectVal,
          };
          let res = await locationRoomApi.queryLocationRoomList(params);
          this.locationRoomList = res.data;
        })();
      }
    },
    /********选中事件**********/
    locationBranchSelect(selectVal) {
      if (selectVal) {
        this.buildingSelectVal = 0;
        this.floorSelectVal = 0;
        this.roomSelectVal = 0;
        this.selectValue = [];
        this.selectValue.push(selectVal);
        this.queryLocationBuilding();
      } else {
        this.branchSelectVal = 0;
        this.buildingSelectVal = 0;
        this.floorSelectVal = 0;
        this.roomSelectVal = 0;
        this.locationBuildingList = [];
        this.locationFloorList = [];
        this.locationRoomList = [];
      }
    },
    locationBuildingSelect(selectVal) {
      if (this.selectValue.length > 1) {
        this.selectValue.splice(1, this.selectValue.length - 1);
      }
      if (selectVal) {
        this.floorSelectVal = 0;
        this.roomSelectVal = 0;

        this.selectValue.push(selectVal);
        this.queryLocationFloor();
      } else {
      }
    },
    locationFloorSelect(selectVal) {
      if (this.selectValue.length > 2) {
        this.selectValue.splice(2, this.selectValue.length - 2);
      }
      if (selectVal) {
        this.roomSelectVal = 0;
        this.selectValue.push(selectVal);
        this.queryLocationRoom();
      } else {
        this.floorSelectVal = 0;
        this.roomSelectVal = 0;
        this.locationRoomList = [];
      }
    },
    locationRoomSelect(selectVal) {
      if (this.selectValue.length > 3) {
        this.selectValue.splice(3, this.selectValue.length - 3);
      }
      if (selectVal) {
        this.selectValue.push(selectVal);
        this.queryLocationRoom();
      } else {
        this.roomSelectVal = 0;
      }
    },
    clearBranchOption() {
      this.branchSelectVal = 0;
      this.buildingSelectVal = 0;
      this.floorSelectVal = 0;
      this.roomSelectVal = 0;
      this.locationFloorList = [];
      this.locationRoomList = [];
      if (this.selectValue.length > 0) {
        this.selectValue.splice(0, this.selectValue.length);
      }
    },
    clearBuildingOption() {
      this.buildingSelectVal = 0;
      this.floorSelectVal = 0;
      this.roomSelectVal = 0;
      this.locationFloorList = [];
      this.locationRoomList = [];
      if (this.selectValue.length > 1) {
        this.selectValue.splice(1, this.selectValue.length - 1);
      }
    },
    clearFloorOption() {
      this.floorSelectVal = 0;
      this.roomSelectVal = 0;
      this.locationRoomList = [];
      if (this.selectValue.length > 2) {
        this.selectValue.splice(2, this.selectValue.length - 2);
      }
    },
    clearRoomOption() {
      this.roomSelectVal = 0;
      if (this.selectValue.length > 3) {
        this.selectValue.splice(3, this.selectValue.length - 3);
      }
    },
  },
};
</script>