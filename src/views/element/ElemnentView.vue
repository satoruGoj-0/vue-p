<template>
  <div>
    <h1>人事信息一览</h1>
    <hr />

    <el-form
      :inline="true"
      :model="ruleForm"
      ref="ruleForm"
      label-width="70px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-form-item label="员工ID" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="员工姓" prop="name">
        <!-- <el-input v-model="ruleForm.name"></el-input> -->
        <!-- @select="handleSelect" -->
        <el-autocomplete
          class="inline-input"
          v-model="ruleForm.name"
          :fetch-suggestions="querySearch"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="担当职" prop="works">
        <el-select v-model="ruleForm.works">
          <el-option label="SE" value="SE"></el-option>
          <el-option label="PG" value="PG"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入职年" required>
        <el-col :span="9">
          <el-form-item prop="workYear">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.workYear"
              style="width: 180%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="赴日期">
        <el-col :span="9">
          <el-form-item prop="startJpTime">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.startJpTime"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">~</el-col>
        <el-col :span="9">
          <el-form-item prop="finishJpTime">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.finishJpTime"
              style="width: 100%"
            ></el-date-picker
          ></el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="员工类" prop="workType">
        <el-radio-group v-model="ruleForm.workType">
          <el-radio label="正式员" value="正式员"></el-radio>
          <el-radio label="实习员" value="实习员"></el-radio>
          <el-radio label="协力员" value="协力员"></el-radio>
          <el-radio label="其他员" value="其他员"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label-width="135px" label="劳动合同结束日">
        <el-col :span="10">
          <el-form-item prop="agreementStart">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.agreementStart"
              style="width: 100%"
            ></el-date-picker
          ></el-form-item>
        </el-col>

        <el-col class="line" :span="1">~</el-col>

        <el-col :span="10">
          <el-form-item prop="agreementDead">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.agreementDead"
              style="width: 100%"
            ></el-date-picker
          ></el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="员工状" prop="empType">
        <el-radio-group v-model="ruleForm.empType">
          <el-radio label="公司在" value="公司在"></el-radio>
          <el-radio label="日本出" value="日本出"></el-radio>
          <el-radio label="国内出" value="国内出"></el-radio>
          <el-radio label="国内派" value="国内派"></el-radio>
          <el-radio label="整天休" value="整天休"></el-radio>
          <el-radio label="脱产培" value="脱产培"></el-radio>
          <el-radio label="日本实" value="日本实"></el-radio>
          <el-radio label="日本常" value="日本常"></el-radio>
          <el-radio label="退休" value="退休"></el-radio>
          <el-radio label="离职" value="离职"></el-radio>
        </el-radio-group>
      </el-form-item>
      <br />
      <el-form-item label="性别" prop="gender">
        <el-radio-group type="integer" v-model="ruleForm.gender">
          <el-radio value="1" label="1">男</el-radio>
          <el-radio value="0" label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="政治面" prop="belief">
        <el-select v-model="ruleForm.belief">
          <el-option label="群众" value="群众"></el-option>
          <el-option label="团员" value="团员"></el-option>
          <el-option label="党员" value="党员"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label-width="80px" label="入社期">
        <el-col :span="10">
          <el-form-item prop="workStart">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.workStart"
              style="width: 100%"
            ></el-date-picker
          ></el-form-item>
        </el-col>
        <el-col class="line" :span="1">~</el-col>
        <el-col :span="10">
          <el-form-item prop="workDead">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.workDead"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label-width="100px" label="所属主管部门" prop="cof">
        <el-select v-model="ruleForm.cof">
          <el-option label="一部" value="一部"></el-option>
          <el-option label="二部" value="二部"></el-option>
          <el-option label="三部" value="三部"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <!-- 表格 -->

    <router-link to="/empInsert"><el-button>登记</el-button></router-link>
    &nbsp;&nbsp;&nbsp;
    <el-button type="danger" @click="handleDeleteArr()">删除</el-button>
    <hr />
    <el-button type="success" @click="printEmp()">打印</el-button>
    <hr />
    <el-table
      ref="multipleTable"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      tooltip-effect="dark"
      style="width: 100%"
      height="500"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column prop="id" label="员工ID" width="120">
        <template slot-scope="scope">
          <router-link
            :to="{ name: 'empUpdate', params: { id: scope.row.id } }"
          >
            <span>
              {{ scope.row.id }}
            </span>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="员工姓" width="120"></el-table-column>
      <el-table-column
        prop="cof"
        label="所属部门"
        width="120"
      ></el-table-column>
      <el-table-column prop="works" label="主要职位" width="120">
      </el-table-column>
      <el-table-column prop="workType" label="员工类" width="120">
      </el-table-column>
      <el-table-column prop="empType" label="员工状" width="120">
      </el-table-column>
      <el-table-column prop="workYear" label="入职时间" width="120">
      </el-table-column>
      <el-table-column
        prop="conPeriodDeadline"
        label="劳务合同结束日"
        width="120"
      >
      </el-table-column>
      <el-table-column prop="passEffYear" label="护照有效日期" width="300">
      </el-table-column>
      <el-table-column prop="nation" label="民族" width="120">
      </el-table-column>
      <el-table-column prop="belief" label="政治面貌" width="120">
      </el-table-column>
      <el-table-column prop="marry" label="婚姻状况" width="120">
      </el-table-column>
      <el-table-column prop="addressUp" label="出生地" width="300">
      </el-table-column>
      <el-table-column prop="addressCode" label="籍贯" width="120">
      </el-table-column>
      <el-table-column prop="codeId" label="身份证号" width="120">
      </el-table-column>
      <el-table-column prop="finishEduTime" label="毕业年月" width="120">
      </el-table-column>
      <el-table-column prop="conPeriod" label="劳务合同期" width="120">
      </el-table-column>
      <el-table-column prop="startJpTime" label="赴日起始年月" width="120">
      </el-table-column>
      <el-table-column prop="gojpBatch" label="赴日批次" width="120">
      </el-table-column>
      <el-table-column prop="gojpYears" label="赴日合同年" width="300">
      </el-table-column>
      <el-table-column prop="addressNew" label="现住址" width="120">
      </el-table-column>
      <el-table-column prop="homePhone" label="住宅电话" width="120">
      </el-table-column>
      <el-table-column prop="personPhone" label="手机" width="120">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block" style="margin-top: 15px">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20, 10000]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        name: "",
        works: "",
        workYear: "",
        startJpTime: "",
        finishJpTime: "",
        workType: "",
        empType: "",
        conPeriodDeadline: "",
        gender: "",
        belief: "",
        cof: "",
      },
      tableData: [
        {
          id: "",
          name: "",
          cof: "",
          works: "",
          workType: "",
          empType: "",
          workYear: "",
          conPeriodDead: "",
          passEffYear: "",
          gender: "",
          nation: "",
          birthday: "",
          belief: "",
          marry: "",
          addressUp: "",
          addressCode: "",
          codeId: "",
          finishEduTime: "",
          conPeriod: "",
          startJpTime: "",
          finishJpTime: "",
          gojpBatch: "",
          gojpYears: "",
          addressNew: "",
          homePhone: "",
          personPhone: "",
        },
      ],
      a: [],
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 5, // 每页的数据条数,
      dict_code_arr: [],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
    querySearch(queryString, cb) {
      var restaurants = this.a;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return restaurant.value.toLowerCase().match(queryString.toLowerCase())
          ? true
          : false;
      };
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handleSelectionChange(selection) {
      //selection拿到当前的选中数据
      console.log(selection);
      this.multiple = !selection.length;
      console.log(this.multiple);

      let dict_code_arr = selection.map((item) => item.id);
      console.log(dict_code_arr);
      this.selected_num = dict_code_arr.length;
      this.dict_code_arr = dict_code_arr;
    },
    printEmp() {
      if (this.dict_code_arr.length == 0) {
        this.$message({
          type: "error",
          message: "打印失败!",
        });
      } else {
        this.$axios.get(`http://localhost:8080/printEmp/${this.dict_code_arr}`);
        this.$message({
          type: "success",
          message: "打印成功!",
        });
      }
    },
    handleDeleteArr() {
      //连接删除的接口
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios.delete(
            `http://localhost:8080/list/${this.dict_code_arr}`
          );
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          location.reload();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    onSubmit() {
      console.log(this.ruleForm);
      let params = this.ruleForm;

      this.$axios
        .get("http://localhost:8080/listEmp", { params })
        .then((res) => {
          console.log("请求成功");
          console.log(res);
          this.tableData = res.data.data;
        })
        .catch((error) => {
          console.log("请求失败");
          console.log(error);
        });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },
  },
  mounted() {
    axios.get("http://localhost:8080/listEmp").then((res) => {
      console.log("请求成功");
      this.tableData = res.data.data;
      for (var i = 0; i < this.tableData.length; i++) {
        this.a.push({ value: this.tableData[i].name });
      }
    });
  },
};
</script>
<style></style>
