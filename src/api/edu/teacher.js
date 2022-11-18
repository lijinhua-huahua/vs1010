import request from '@/utils/request'
export default{

    //讲师列表（条件查询带分页）
    //current 当前页 limit 每页记录数 teacherQuery条件对象
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            // url: '/table/list/'+current+'/'+limit,
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象 后端使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面
            data: teacherQuery
          })
    },
//删除讲师
    deleteTeacherId(id){
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete',
          })
    }



}

