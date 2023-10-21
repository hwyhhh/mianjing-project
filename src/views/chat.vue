<template>
  <div class="user-chat">
    <!-- 头部导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      @click-left="$router.back()"
      left-arrow
      left-text="返回"
      title="客服"
    />
    <!-- 消息列表 -->
    <van-cell-group class="message-list">
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
      <van-cell title="单元格" />
    </van-cell-group>

    <!-- 发消息的输入框 -->

    <van-cell-group class="send-message-wrap">
      <van-field v-model="message" placeholder="请输入消息内容" :border="false"></van-field>
      <van-button type="info" size="small">发送</van-button>
    </van-cell-group>
  </div>
</template>

<script>

export default {
  name: 'APP',
  data() {
    return {
      message: ''
    }
  },
  methods: {},
  created() {
    
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.send-message-wrap {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 14px;
  align-items: center;
  z-index: 999;
}
.message-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 44px;
  overflow-y: auto;
}
</style>
