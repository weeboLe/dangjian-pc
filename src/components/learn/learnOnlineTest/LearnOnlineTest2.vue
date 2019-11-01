<template>
  <form action="" class="formBox">
    <div class="testQuestion" v-for="(t,idx_t) in testQuestions" :key="index">
      <p>{{t.questionText}}</p>
      <label :for="labelId(idx_t,idx_o)" v-for="(o,idx_o) in t.options">
        <input type="radio" :id="labelId(idx_t,idx_o)" :name="inputName(idx_t)"/>
        {{o.option}}<br/>
      </label>
    </div>
    <input type="submit" class="submitBtn" value="提交"/>
  </form>
</template>

<script>
    export default {
        name: "LearnOnlineTest2",
      data(){
        return{
          testQuestions:[
            {
              questionText:'党章指出，党的上下级组织之间要互通情报、互相支持和___。',
              options:[
                {option:'A.互相监督。'},
                {option:'B.互相批评。'},
                {option:'C.互相促进。'},
                {option:'D.从互相提醒。'}
              ]
            },
            {
              questionText:'1、两学一做‛是指___。',
              options:[
                {option:'A.学党章、学党规、做合格党员'},
                {option:'B.学党章党规、学系列讲话、做优秀党员'},
                {option:'B.学党章党规、学系列讲话、做优秀党员'}
              ]
            },
            {
              questionText:'2、预备党员的预备期，从___算起。',
              options:[
                {option:'A.从支委会确定其为发展对象之日算起。'},
                {option:'B.从支部大会通过其为预备党员之日算起。'},
                {option:'C.从党委研究同意其为预备党员之日算起。'},
                {option:'D.从其填写《入党志愿书》之日算起。'}
              ]
            }
          ]
        }
      },
      methods: {
        labelId: function (idx_t,idx_o) {
          return "q" + idx_t + "o" + idx_o;
        },
        inputName: function (idx_t) {
          return "question" + idx_t;
        }
      }
    }
</script>

<style scoped>
  .formBox{
    width:100%;
    min-height: 600px;
    max-height: 1200px;
    overflow-y: scroll;
  }
  .submitBtn{
    width:120px;
    height:40px;
    font-size: 20px;
    background-color: #9c0401;
    color:white;
    border:none;
    border-radius: 5px;
    display: block;
    margin:50px auto;
  }
</style>
