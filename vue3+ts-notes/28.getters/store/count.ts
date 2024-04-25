import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions:{
    increment(value:number){
      console.log('increment被调用了',value)
      if( this.sum < 10){
        // 修改数据（this是当前的store）
        this.sum += value
      }
    }
  },
  // 真正存储数据的地方
  state(){
    return {
      sum:3,
      school:'atguigu',
      address:'宏福科技园'
    }
  },
  // 相当于vue2中的计算属性
  getters:{
    bigSum:state => state.sum * 10,
    upperSchool():string{
      return this.school.toUpperCase()
    }
  }
})