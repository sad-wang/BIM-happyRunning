// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layui from '@/util/layui-src/src/layui.js'
import '@/util/layui-src/src/css/layui.css'
let form
let table
layui.use(['form','table'], function(){
  form = layui.form;
  table = layui.table;
  table.on('checkbox(demo)', function(obj){
    console.log(obj)
  });
  table.on('tool(demo)', function(obj){
    var data = obj.data;
    if(obj.event === 'detail'){
      layer.msg('ID：'+ data.id + ' 的查看操作');
    } else if(obj.event === 'del'){
      layer.confirm('真的删除行么', function(index){
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      layer.alert('编辑行：<br>'+ JSON.stringify(data))
    }
  });
  $('.demoTable .layui-btn').on('click', function(){
    var type = $(this).data('type');
    active[type] ? active[type].call(this) : '';
  });
});

new Vue({
  el: '#app',
  data: {
    diarySwitch:{
      point:true,
      score:true,
    },
    sideLists:[
      {
        name:'首页',
        status:false
      },
      {
        name:'得分管理',
        lists:[
          '日常得分',
          '奖项得分',
          '段位管理',
        ],
        status:true
      },
      {
        name:'学生管理',
        lists:[
          '成绩管理',
          '加分管理',
        ],
        status:false
      },
      {
        name:'系统管理',
        lists:[
          '角色管理',
          '用户管理',
          '学期设置',
        ],
        status:false
      },
      {
        name:'定时任务',
        lists:[
          '任务提醒',
          '任务执行日志',
        ],
        status:false
      }
    ],
  },
  methods: {

  }

})


