// 接口封装
import Vue from 'vue'
import { post } from '../http'

const url = '/dangjian_api';
// 接口统一管理
// 通用api
export const common = {
  column: (par) => post(url + 'api/cms/channel/channleListData', par),
  columnData: (par) => post(url + 'api/cms/channel/channleContentData', par),

  getuserInfo: (par) => post(url + 'api/member/getUserInfo', par)
  // 栏目
}
// 登录
export const login = {

  login: (par) => post(url + 'api/member/login', par)

}

// 首页
export const index = {

  // 通知公告
  notice: (par) => post(url + 'api/cms/channel/channleListData', par)
  // 党建要闻

}
// 学习中心
export const study = {
  // 网上党校

  // 专题学习

  // 在线考试
}
// 党务管理
export const partyAffairs = {
  // 党务公开

  // 党内奖惩

  // 党建考核
}
// 党员管理
export const partyMember = {

  // 获取个人组织关系信息返回顶部
  getParty: (par) => post(url + 'api/pb/relationChange/getParty', par),
  // 党员关系转接返回顶部
  changeParty: (par) => post(url + 'api/pb/relationChange/save', par),
  // 全部党支部信息
  getAllOrg: (par) => post(url + 'api/common/getAllOrg', par)
}
// 群团工作
export const regiment = {

}
// 纪检监察
export const inspect = {

}
// 民生平台
export const Livelihood = {

}
// 党建论坛
export const forum = {

}
