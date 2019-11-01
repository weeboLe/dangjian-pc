// 接口封装
import Vue from 'vue'
import { post } from '../http'
import base from './base'

const url = '/dangjian_api';
// 接口统一管理
// 通用api
export const common = {
  column: (par) => post(url + 'api/cms/channel/channleListData', par),
  columnData: (par) => post(url + 'api/cms/channel/channleContentData', par)
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
