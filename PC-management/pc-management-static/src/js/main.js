let form
layui.use('form', function(){
    form = layui.form;

    //各种基于事件的操作，下面会有进一步介绍
});

new Vue({
    el: '#app',
    data: {
        diarySwitch:{
            point:'false',
            score:'false',
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
        point: function () {
            let that = this
            form.on('switch(pointSetting)', function (data) {
                that.diarySwitch.point = !that.diarySwitch.point
            });
        },
        score: function () {
            let that = this
            form.on('switch(scoreSetting)', function (data) {
                that.diarySwitch.score = !that.diarySwitch.score
            });
        },
    }

})


