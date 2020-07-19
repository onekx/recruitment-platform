<template>
  <div class="content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="name" maxlength="5" clearable placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="gender" placeholder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="job" placeholder="请输入职位"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EmployerProfile',
  data() {
    return {
      name: '',
      gender: '',
      age: '',
      job: ''
    }
  },
  methods: {
    onCancel() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style scoped>
.content {
  width: 1000px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
}

.el-form {
  width: 580px;
  margin: 0 auto;
}

.el-input,
.el-select {
  width: 200px;
}
</style>