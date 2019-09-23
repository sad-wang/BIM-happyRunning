layui.use('form', function(){
    var form = layui.form;

    //各种基于事件的操作，下面会有进一步介绍
});
layui.use('flow', function(){
    var flow = layui.flow;
    //信息流
    flow.load(options);
    //图片懒加载
    flow.lazyimg(options);
});
new Vue({
    el: '#app',
    data: {
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
    method:{
    }

})


