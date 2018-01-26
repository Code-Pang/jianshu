<template>
  <div>
    <div class="err-logo">
      <nuxt-link to="/">
      <img src="../assets/img/error_p_logo-4a543c8ed828256afa97a62fbea4c186.png" alt="">
      </nuxt-link>
    </div>
    <div class="err-bg">
      <div class="err-img" v-if="error.statusCode === 404">
        <img src="../assets/img/img_404-80cb554db22104d39ab89692e9ebfdb8.png" alt="">
      </div>
      <h3>您要找的页面不存在</h3>
      <p>可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</p>

      <button class="btn btn-success"><nuxt-link to="/">返回「简书」首页</nuxt-link></button>
    </div>
  </div>
</template>
<script>
export default {
    head(){
        return {
            title:'您要找的页面不存在 - 简书',
            meta:[
                {hide:'description',name:'description',content:'404页面'}
            ]
        }
    },
  props: ['error']
}
</script>

<style scoped>

  .err-logo{
    position: absolute;
    top: 40px;
    left: 40px;
  }
  .err-logo img{
    width: 300px;
  }
  .err-bg{
    width: 100%;
    margin: 88px auto 0;
  }
  .err-bg .err-img img{
    width: 220px;
    height: 200px;
    display: block;
    margin: 0px auto;
  }
  .err-bg h3{
    font-weight: bold;
    font-size: 19px;
    text-align: center;
    margin-top: 44px;
  }
  .err-bg p{
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    margin-bottom: 30px;
  }
  .err-bg button{
    width: 162px;
    height: 48px;
    display: block;
    margin: 0 auto;
    border-radius: 24px;
    background-color: #42C02E;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    .err-logo{
      display: none;
    }
  }
</style>
