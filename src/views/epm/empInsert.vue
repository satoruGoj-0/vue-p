<template>
  <div>
    <h1>人事信息登记</h1>
    <hr />
    <h5>基本信息</h5>
    <el-form
      :inline="true"
      :model="ruleForm"
      ref="ruleForm"
      label-width="128px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-form-item label="员工ID" prop="id">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item label="员工姓" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- 民族 -->
      <el-form-item label="民族" prop="nation">
        <el-input v-model="ruleForm.nation"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" required>
        <el-col :span="11">
          <el-form-item prop="birthday">
            <el-date-picker
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              v-model="ruleForm.birthday"
              style="width: 160%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="政治面" prop="belief">
        <el-select v-model="ruleForm.belief">
          <el-option label="群众" value="群众"></el-option>
          <el-option label="团员" value="团员"></el-option>
          <el-option label="党员" value="党员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="婚姻状况" prop="marry">
        <el-select v-model="ruleForm.marry">
          <el-option label="已婚" value="已婚"></el-option>
          <el-option label="未婚" value="未婚"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要职责" prop="works">
        <el-select v-model="ruleForm.works">
          <el-option label="PG" value="PG"></el-option>
          <el-option label="SE" value="SE"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工类别" prop="workType">
        <el-select v-model="ruleForm.workType">
          <el-option label="正式员" value="正式员"></el-option>
          <el-option label="实习员" value="实习员"></el-option>
          <el-option label="协力员" value="协力员"></el-option>
          <el-option label="其他员" value="其他员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工状" prop="empType">
        <el-select v-model="ruleForm.empType">
          <el-option label="公司在" value="公司在"></el-option>
          <el-option label="日本出" value="日本出"></el-option>
          <el-option label="国内出" value="国内出"></el-option>
          <el-option label="国内派" value="国内派"></el-option>
          <el-option label="整天休" value="整天休"></el-option>
          <el-option label="脱产培" value="脱产培"></el-option>
          <el-option label="日本实" value="日本实"></el-option>
          <el-option label="日本常" value="日本常"></el-option>
          <el-option label="退休" value="退休"></el-option>
          <el-option label="离职" value="离职"></el-option
        ></el-select>
      </el-form-item>
      <el-form-item label="所属部门" prop="cof">
        <el-select v-model="ruleForm.cof">
          <el-option label="远东一部" value="远东一部"></el-option>
          <el-option label="远东二部" value="远东二部"></el-option>
          <el-option label="远东三部" value="远东三部"></el-option>
        </el-select> </el-form-item
    ></el-form>

    <el-tabs type="border-card">
      <el-tab-pane label="户籍信息">
        <h5>户籍信息</h5>
        <el-form
          :inline="true"
          :model="addressImfForm"
          ref="addressImfForm"
          label-width="128px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="身份证号" prop="codeId">
            <el-input v-model="addressImfForm.codeId"></el-input>
          </el-form-item>
          <el-form-item label="籍贯" prop="addressCode">
            <el-input v-model="addressImfForm.addressCode"></el-input>
          </el-form-item>
          <el-form-item label="出生地" prop="addressUp">
            <el-input v-model="addressImfForm.addressUp"></el-input>
          </el-form-item>
          <el-form-item label="派出所名" prop="addressPlo">
            <el-input v-model="addressImfForm.addressPlo"></el-input>
          </el-form-item>
          <el-form-item label="户籍地址" prop="addressPerson">
            <el-input v-model="addressImfForm.addressPerson"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="教育履历">
        <h5>教育履历</h5>
        <el-form
          :inline="true"
          :model="eduForm"
          ref="eduForm"
          label-width="128px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="第一外语" prop="firstLn">
            <el-select v-model="eduForm.firstLn">
              <el-option label="日语" value="日语"></el-option>
              <el-option label="英语" value="英语"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="外语能力" prop="lnPower">
            <el-input v-model="eduForm.lnPower"></el-input> </el-form-item
        ></el-form>
        <el-table :data="learnTable" border style="width: 100%">
          <el-table-column prop="startEduTime" label="起始时间" width="180">
            <template slot-scope="scope">
              <el-date-picker
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                v-model="scope.row.startEduTime"
                style="width: 100%"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="finishEduTime" label="毕业年月" width="180">
            <template slot-scope="scope">
              <el-date-picker
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                v-model="scope.row.finishEduTime"
                style="width: 100%"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="edu" label="学历" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.edu"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="eduJp" label="学历(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.eduJp"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="uni" label="毕业学校" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.uni"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="uniJp" label="毕业学校(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.uniJp"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="maj" label="所学专业(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.maj"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="majJp" label="所学专业(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.majJp"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="工作履历">
        <h5>工作履历</h5>
        <el-table :data="workLiForm" border style="width: 100%">
          <el-table-column prop="startTime" label="开始时间" width="180">
            <template slot-scope="scope">
              <el-date-picker
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                v-model="scope.row.startTime"
                style="width: 100%"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="finishTime" label="结束时间" width="180">
            <template slot-scope="scope">
              <el-date-picker
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                v-model="scope.row.finishTime"
                style="width: 100%"
              ></el-date-picker>
            </template>
          </el-table-column>
          <el-table-column prop="workAdd" label="工作单位" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.workAdd"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="workAddJp" label="工作单位(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.workAddJp"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="job" label="担当职位" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.job"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="jobJp" label="担当职位(日语)" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.jobJp"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="合同相关">
        <h5>合同相关</h5>
        <el-form
          :inline="true"
          :model="ruleForm"
          ref="ruleForm"
          label-width="128px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="劳务合同期" prop="conPeriod">
            <el-input v-model="ruleForm.conPeriod"></el-input>
          </el-form-item>
          <el-form-item label="赴日起始年月" required>
            <el-col :span="21">
              <el-form-item prop="startJpTime">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  v-model="ruleForm.startJpTime"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="赴日终止年月" required>
            <el-col :span="21">
              <el-form-item prop="finishJpTime">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  v-model="ruleForm.finishJpTime"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="赴日批次" prop="gojpBatch">
            <el-input v-model="ruleForm.gojpBatch"></el-input>
          </el-form-item>
          <el-form-item label="赴日合同年限" prop="gojpYears">
            <el-input v-model="ruleForm.gojpYears"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="护照相关">
        <h5>护照相关</h5>
        <el-form
          :inline="true"
          :model="passForm"
          ref="passForm"
          label-width="128px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="英文名字" prop="enName">
            <el-input v-model="passForm.enName"></el-input>
          </el-form-item>
          <el-form-item label="护照号码" prop="passCode">
            <el-input v-model="passForm.passCode"></el-input>
          </el-form-item>
          <br />
          <el-form-item label="日语片假名字" prop="jpName">
            <el-input v-model="passForm.jpName"></el-input>
          </el-form-item>
          <el-form-item label="日语汉字名字" prop="jpHanName">
            <el-input v-model="passForm.jpHanName"></el-input>
          </el-form-item>
          <el-form-item label="护照类型" prop="passClass">
            <el-input v-model="passForm.passClass"></el-input>
          </el-form-item>
          <el-form-item label="签发日期" required>
            <el-col :span="21">
              <el-form-item prop="passYear">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  v-model="passForm.passYear"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="有效日期" required>
            <el-col :span="21">
              <el-form-item prop="passEffYear">
                <el-date-picker
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  v-model="passForm.passEffYear"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="签发机关" prop="passCoff">
            <el-input v-model="passForm.passCoff"></el-input>
          </el-form-item>
          <el-form-item label="签发地点" prop="passAddress">
            <el-input v-model="passForm.passAddress"></el-input> </el-form-item
        ></el-form>
      </el-tab-pane>
      <!--kkkkkkkkkk-->
      <el-tab-pane label="家庭相关">
        <h5>家庭相关</h5>
        <el-form
          :inline="true"
          :model="homeForm"
          ref="homeForm"
          label-width="120px"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="现住址" prop="addressNew">
            <el-input v-model="homeForm.addressNew"></el-input>
          </el-form-item>
          <br />
          <el-form-item label="邮政编码" prop="postcode">
            <el-input v-model="homeForm.postcode"></el-input>
          </el-form-item>
          <el-form-item label="住宅电话" prop="homePhone">
            <el-input v-model="homeForm.homePhone"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="personPhone">
            <el-input v-model="homeForm.personPhone"></el-input>
          </el-form-item>
          <el-form-item label="假期电话" prop="leavePhone">
            <el-input v-model="homeForm.leavePhone"></el-input> </el-form-item
        ></el-form>
        <el-table :data="homeTable" border style="width: 100%">
          <el-table-column prop="elation" label="关系" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.elation"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="elaName" label="家人名字" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.elaName"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="elaWorkAddress"
            label="家人工作单位"
            width="180"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.elaWorkAddress"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="elaPhone" label="家人电话" width="180">
            <template slot-scope="scope">
              <el-input v-model="scope.row.elaPhone"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <br />
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <hr />
    <router-link to="/"> <el-button type="danger">返回</el-button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      ruleForm: {
        id: "",
        name: "",
        cof: "",
        works: "",
        workType: "",
        empType: "",
        workYear: "",
        conPeriodDeadline: "",
        gender: "",
        nation: "",
        birthday: "",
        belief: "",
        marry: "",
        conPeriod: "",
        startJpTime: "",
        finishJpTime: "",
        gojpBatch: "",
        gojpYears: "",
      },
      passForm: {
        id: "",
        enName: "",
        passCode: "",
        jpName: "",
        jpHanName: "",
        passClass: "",
        passYear: "",
        passEffYear: "",
        passCoff: "",
        passAddress: "",
      },
      workLiForm: [
        {
          id: "",
          startTime: "",
          finishTime: "",
          workAdd: "",
          workAddJp: "",
          job: "",
          jobJp: "",
        },
        {
          id: "",
          startTime: "",
          finishTime: "",
          workAdd: "",
          workAddJp: "",
          job: "",
          jobJp: "",
        },
        {
          id: "",
          startTime: "",
          finishTime: "",
          workAdd: "",
          workAddJp: "",
          job: "",
          jobJp: "",
        },
        {
          id: "",
          startTime: "",
          finishTime: "",
          workAdd: "",
          workAddJp: "",
          job: "",
          jobJp: "",
        },
      ],
      addressImfForm: {
        id: "",
        codeId: "",
        addressCode: "",
        addressUp: "",
        addressPlo: "",
        addressPerson: "",
      },
      eduForm: {
        id: "",
        firstLn: "",
        lnPower: "",
      },
      learnTable: [
        {
          id: "",
          startEduTime: "",
          finishEduTime: "",
          edu: "",
          eduJp: "",
          uni: "",
          uniJp: "",
          maj: "",
          majJp: "",
        },
        {
          id: "",
          startEduTime: "",
          finishEduTime: "",
          edu: "",
          eduJp: "",
          uni: "",
          uniJp: "",
          maj: "",
          majJp: "",
        },
        {
          id: "",
          startEduTime: "",
          finishEduTime: "",
          edu: "",
          eduJp: "",
          uni: "",
          uniJp: "",
          maj: "",
          majJp: "",
        },
        {
          id: "",
          startEduTime: "",
          finishEduTime: "",
          edu: "",
          eduJp: "",
          uni: "",
          uniJp: "",
          maj: "",
          majJp: "",
        },
      ],
      homeForm: {
        id: "",
        addressNew: "",
        postcode: "",
        homePhone: "",
        personPhone: "",
        leavePhone: "",
        elation: "",
        elaName: "",
        elaWorkAddress: "",
        elaPhone: "",
      },
      homeTable: [
        {
          id: "",
          leavePhone: "",
          elation: "",
          elaName: "",
          elaWorkAddress: "",
          elaPhone: "",
        },
        {
          id: "",
          leavePhone: "",
          elation: "",
          elaName: "",
          elaWorkAddress: "",
          elaPhone: "",
        },
        {
          id: "",
          leavePhone: "",
          elation: "",
          elaName: "",
          elaWorkAddress: "",
          elaPhone: "",
        },
        {
          id: "",
          leavePhone: "",
          elation: "",
          elaName: "",
          elaWorkAddress: "",
          elaPhone: "",
        },
      ],
    };
  },
  methods: {
    async onSubmit() {
      try {
        //emp
        this.ruleForm.id = this.id;
        const response1 = await this.$axios.post(
          "http://localhost:8080/empInsert",
          JSON.stringify(this.ruleForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response1.data);
        this.homeForm.id = this.id;
        const response2 = await this.$axios.post(
          "http://localhost:8080/homeInsert",
          JSON.stringify(this.homeForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response2.data);
        //passForm
        this.passForm.id = this.id;
        const response3 = await this.$axios.post(
          "http://localhost:8080/passInsert",
          JSON.stringify(this.passForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response3.data);
        //workLiForm
        for (var i = 0; i < this.workLiForm.length; i++) {
          this.workLiForm[i].id = this.id;
        }
        const response4 = await this.$axios.post(
          "http://localhost:8080/workInsert",
          JSON.stringify(this.workLiForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response4.data);
        //eduForm
        this.eduForm.id = this.id;
        const response5 = await this.$axios.post(
          "http://localhost:8080/eduInsert",
          JSON.stringify(this.eduForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response5.data);
        //addressImfForm
        this.addressImfForm.id = this.id;
        const response6 = await this.$axios.post(
          "http://localhost:8080/addInsert",
          JSON.stringify(this.addressImfForm),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response6.data);
        for (var a = 0; a < this.homeTable.length; a++) {
          this.homeTable[a].id = this.id;
        }
        const response7 = await this.$axios.post(
          "http://localhost:8080/elaInsert",
          JSON.stringify(this.homeTable),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response7.data);
        //learn
        for (var b = 0; b < this.learnTable.length; b++) {
          this.learnTable[b].id = this.id;
        }
        const response8 = await this.$axios.post(
          "http://localhost:8080/learnInsert",
          JSON.stringify(this.learnTable),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response8.data);
        this.$message("登录成功");
      } catch (err) {
        this.$message("失败");
      }
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },
  },
};
</script>
<style ></style>

