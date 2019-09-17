new Vue({
    el: '#app',
    data: {
        sideLists:[
            {
                name:'首页',
                status:false
            },
            {
                name:'系统管理',
                lists:[
                    '积分/等级设置',
                    '设置活动加分明细',
                    '设置比赛加分明细',
                    '上传线上课堂视频',
                ],
                status:true
            },
            {
                name:'权限管理',
                lists:[
                    '用户管理',
                    '角色管理',
                ],
                status:false
            },
            {
                name:'人员管理',
                lists:[
                    '学生课外成绩管理',
                    '教师课时管理',
                    '学生锻炼情况通知',
                ],
                status:false
            }
        ],
    },
    method:{
    }

})


