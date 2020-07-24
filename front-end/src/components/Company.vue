<template>
  <el-form ref="form" label-width="80px" style="width: 580px;margin: 0 auto;">
    <el-form-item label="公司名称">
      <el-input v-model="name" maxlength="10" clearable placeholder="请输入公司名称" style="width:200px;"></el-input>
    </el-form-item>
    <el-form-item label="公司类型">
      <el-select v-model="type" placeholder="请选择类别" style="width:200px">
        <el-option label="互联网企业" value="互联网企业"></el-option>
        <el-option label="电子商务" value="电子商务"></el-option>
        <el-option label="生活服务" value="生活服务"></el-option>
        <el-option label="游戏行业" value="游戏行业"></el-option>
        <el-option label="其他行业" value="其他行业"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="公司规模">
      <el-select v-model="scale" placeholder="请选择规模" style="width:200px">
        <el-option label="1-20" value="1-20"></el-option>
        <el-option label="20-99" value="20-99"></el-option>
        <el-option label="100-499" value="100-499"></el-option>
        <el-option label="500-1000" value="500-1000"></el-option>
        <el-option label="1000-9999" value="1000-9999"></el-option>
        <el-option label="10000以上" value="10000以上"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="公司图标">
      <el-input v-model="logo" placeholder="请输入公司图标的链接" style="width:400px" clearable></el-input>
    </el-form-item>
    <el-form-item label="公司图标">
      <el-input v-model="desc" placeholder="请输入公司介绍" type="textarea" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认修改</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import request from '@/api'

export default {
  name: 'Company',
  data() {
    return {
      name: '',
      type: '',
      scale: '',
      logo: '',
      desc: ''
    }
  },
  mounted() {
    this.getCompanyInfo()
  },
  methods: {
    async onSubmit() {
      try {
        const data = {
          name: this.name,
          type: this.type,
          scale: this.scale,
          logo: this.logo,
          userId: this.$store.state.userId,
          desc: this.desc
        }
        await request.put('/company', data)
        alert('修改成功')
      } catch (err) {
        console.log(err)
      }
    },
    onCancel() {
      Object.assign(this.$data, this.$options.data())
    },
    async getCompanyInfo() {
      try {
        const { userId } = this.$store.state
        const { data } = await request.get(`/company/${userId}`)
        if (data.ok) {
          this.name = data.company.name
          this.type = data.company.type
          this.scale = data.company.scale
          this.logo = data.company.logo
          this.desc = data.company.desc
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>