import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

//注册成为Vue的插件
Vue.use(Vuex)

//通过构造函数来创建Vuex的Store(仓库)
export default new Vuex.Store({
  //各个组件中共享的数据
  state: {
    // 标识用户是否已经登录
    isLogined:localStorage.getItem('isLogined') || 0,
    // 存储登录用户的相关信息
    info:JSON.parse(localStorage.getItem('info')) || {},
    //////////////////////////////////////////////
    username:'Frank',
    age:23,
    //true表示女,false表示男
    sex:true,
    friends:[
      {
        name:'Tom',
        sex:false
      },
      {
        name:'Rose',
        sex:true
      }
    ]
  },
  getters:{
    counts(state){
      return state.friends.length;
    }
  },
  //改变状态
  mutations: {
    // 用户登录成功
    loginMutation(state,payload){
      //改变用户登录的状态
      state.isLogined = 1;
      //将获取到的登录用户信息存储到info中去
      state.info = payload;
    },
    // 用户注销
    logoutMutation(state){
      state.isLogined = 0;
      state.info = {};     
    },
    ////////////////////////////////////////////
    //增加年龄的方法 
    //state参数从理论上可以省略,但在实践过程中不能进行省略
    //因为任何的Mutation都用于改变state中的数据,所以必须将
    //当前对象的state内的数据作为参数自动注入到mutation中
    //按照自定义函数的语法结构来说,在封装函数时带有参数的话,
    //在调用该函数时,必须为该参数进行赋值操作。但是在Mutations中
    //state参数将自动注入,所以在调用时无法为state参数进行赋值。
    //state参数将自动将当前store内的state注入到mutation内部
    ageIncrementMutation(state){
      state.age ++;
    },
    // 减少年龄的方法
    ageDecrementMutation(state){
      state.age --;
    },
    // 添加用户的方法
    // payload,称为载荷,指用户在调用mutations时的额外参数,可以为任意
    // 数据类型
    addFriendMutation(state,payload){
      state.friends.push(payload);
    }
  },
  //发送异步请求
  actions: {
    // context参数代表是当前store内的state、mutations、getters等
    // 而且context会自动注入到当前的actions方法中,也就代表在分发
    // actions时该参数不需要传递参数值
    getServerData(context){
      //console.log(context);
      //console.log('用户信息已经获取');
      axios.get('/user').then(res=>{
          //res.data; ==> {name:'WEBTN2008',sex:false}
          //将结果存储到store中state中去
          //需要通知Mutations,让Mutations来将服务器返回的数据添加到
          //state中去
          context.commit('addFriendMutation',res.data);
      });
    }
  },
  modules: {
  }
})
