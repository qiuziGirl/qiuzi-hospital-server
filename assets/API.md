# 医院(hospital)

## 获取医院列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的医院信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/hospital
```

**参数说明**

| Field |  Type  | Not Null | Description  |
| :---: | :----: | :------: | :----------: |
| page  |  Int   |    √     | 分页当前页数 |
| limit |  Int   |    √     | 返回记录条数 |
| name  | String |          |   医院名称   |
| level |  Int   |          |   医院级别   |

**注意： 以上字段可出现可不出现**

**返回值**

```json
{
    "data": {
        "total": 128,
        "hospitals": [
            {
                "id": 1,
                "name": "秋子医院",
                "level": 1,
                "manager": "秋子",
                "tel": "1552145556",
                "address": "广东省广州市海珠区广州塔顶层"
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 id 获取医院信息

**描述**

```
根据 id 获取医院信息
```

**请求协议**

```
Method: Get
URL: /api/v1/hospital/:id(医院 id)
```

**返回值**


```json
{
    "data": {
        "id": 1,
        "name": "秋子医院",
        "level": 1,
        "manager": "秋子",
        "tel": "15521451556",
        "address": "广东省广州市海珠区广州塔塔顶",
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 更新医院信息

**描述**

```
通过 id 更新医院信息
```

**请求协议**

```
Method: Put
URL: /api/v1/hospital/:id(医院 id)
Content-Type: application/json
```

**请求体**

```json
{    
    "name": "若素医院",
    "level": 1,
    "manager": "若素",
    "tel": "15521451556",
    "address": "广东省广州市海珠区广州塔顶层"
}
```

**参数说明**

|  Field  |  Type  | Not Null | Description |
| :-----: | :----: | :------: | :---------: |
|  name   | String |    √     |  医院名称   |
|  level  |  Int   |          |  医院级别   |
| manager | String |          |   负责人    |
|   tel   | String |          |    电话     |
| address | String |          |  联系地址   |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```

## 添加一间医院

**描述**

```
添加一间医院
```

**请求协议**

```
Method: POST
URI: /api/v1/hospital
Content-Type: application/json
```

**请求体**

```json
{        
    "name": "若素医院",    
    "level": 1,    
    "manager": "若素",    
    "tel": "15521451556",    
    "address": "广东省广州市海珠区广州塔顶层"
}
```

**参数说明**

|  Field  |  Type  | Not Null | Description |
| :-----: | :----: | :------: | :---------: |
|  name   | String |    √     |  医院名称   |
|  level  |  Int   |          |  医院级别   |
| manager | String |          |   负责人    |
|   tel   | String |          |  联系电话   |
| address | String |          |  联系地址   |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

## 删除一间医院

**描述**

```
删除一间医院
```

**请求协议**

```
Method: DELETE
URL: /api/v1/hospital/:id
```

**返回值**

```json
{
    "code": 0,
    "message": "删除成功",
}
```

# 科室(department)

## 获取科室列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的科室信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/department
```

**参数说明**

| Field |  Type  | Not Null | Description  |
| :---: | :----: | :------: | :----------: |
| page  |  Int   |    √     | 分页当前页数 |
| limit |  Int   |    √     | 返回记录条数 |
| name  | String |          |   科室名称   |

** 注意： 以上字段可出现可不出现 **

**返回值**

```json
{
    "data": {
        "total": 2,
        "departments": [
            {
                "id": 1,
                "name": "小儿科",
                "introduce": "小儿科，我院的重点科室，承担各项国家特等医学研究项目，保障孩子健康快乐成长。"
            },
            {
                "id": 2,
                "name": "中医科",
                "introduce": "中医科丫中医科丫中医科丫中医科丫中医科丫中医科丫中医科丫中医科丫中医科丫"
            }  
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 id 获取科室信息

**描述**

```
根据 id 获取科室信息
```

**请求协议**

```
Method: Get
URL: /api/v1/department/:id(科室 id)
```

**返回值**

```json
{
    "data": {
        "id": 1,
        "name": "小儿科",
        "introduce": "小儿科，是我院的重点科室，承担各项国家特等医学研究项目，保障孩子健康快乐成长。。"
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 更新科室信息

**描述**

```
通过 id 更新科室信息
```

**请求协议**

```
Method: Put
URL: /api/v1/department/:id(科室 id)
Content-Type: application/json
```

**请求体**

```json
{    
   "name": "小儿科",
   "introduce": "小儿科，是我院的重点科室，承担各项国家特等医学研究项目，保障孩子健康快乐成长。。"
}
```

**参数说明**

|   Field   |  Type  | Not Null | Description |
| :-------: | :----: | :------: | :---------: |
|   name    | String |    √     |  科室名称   |
| introduce | String |          |  科室简介   |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```

## 添加一个科室

**描述**

```
添加一个科室
```

**请求协议**

```
Method: POST
URI: /api/v1/department
Content-Type: application/json
```

**请求体**

```json
{        
   "name": "小儿科",
   "introduce": "小儿科，是我院的重点科室，承担各项国家特等医学研究项目，保障孩子健康快乐成长。。"
}
```

**参数说明**

|   Field   |  Type  | Not Null | Description |
| :-------: | :----: | :------: | :---------: |
|   name    | String |    √     |  科室名称   |
| introduce | String |    √     |  科室简介   |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

## 删除一个科室

**描述**

```
删除一个科室
```

**请求协议**

```
Method: DELETE
URL: /api/v1/department/:id
```

**返回值**

```json
{
    "code": 0,
    "message": "删除成功"
}
```

# 管理员(admin)

## 登录

**描述**

```
管理员 PC 端登录
```

**请求协议**

```
Method: Post
URL: /api/v1/admin/login
Content-Type: application/json
```

**请求体**

```json
{
    "mobile(or email)": 15521451556,
    "password": qwert123,
}
```

**参数说明**

|      Field      |  Type  | Not Null | Description |
| :-------------: | :----: | :------: | :---------: |
| phone(or email) | String |    √     | 管理员账号  |
|    password     | String |    √     |  账号密码   |

**返回值**

```json
{
    "data": { "token": "token" },
    "message": '登录成功',
    "code": 0,
}
```

##  登出

**描述**

```
管理员 PC 端登出
```

**请求协议**

```
Method: Post
URL: /api/v1/admin/logout
Content-Type: application/json
```

**请求体**

```json
{}
```

**参数说明**

| Field | Type | Not Null | Description |
| :---: | :--: | :------: | :---------: |
|       |      |          |             |

**返回值**

```json
{
    "message": "登出成功",
    "code": 0
}
```

## 获取管理员列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的医生信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/admin
```

**参数说明**

|  Field  |  Type  | Not Null | Description  |
| :-----: | :----: | :------: | :----------: |
|  page   |  Int   |    √     | 分页当前页数 |
|  limit  |  Int   |    √     | 返回记录条数 |
|  name   | String |          |     姓名     |
|  role   | String |          |     角色     |
| logined |  Int   |          |   登录状态   |

** 注意： 以上字段可出现可不出现 **

**返回值**

```json
{
    "data": {
        "total": 128,
        "admins": [
            {
                "id": 1,
                "name": "秋子",
                "password": "123456",
                "mobile": "15521451558",
                "email": "2515632822@qq.com",
                "openId": "alhgaohgnsl",
                "role": 'editor',
                "logined": 0,
                "lastLoginTime": 2020-3-3,
                "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png",
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```


## 根据 id 获取管理员信息

**描述**

```
根据 id 获取用户信息
```

**请求协议**

```
Method: Get
URL: /api/v1/admin/:id(管理员 id)
```

**返回值**


```json
{
    "data": {
        "id": 01,
        "name": "qiuzi",
        "mobile": "15521451556",
        "role": "editor",
        "email": "2515632823@qq.com",
        "avatar": "http://qiuzi.cn/image/avatar/admin/qiuzi.png",
    },
    "message": "请求成功",
    "code": 0
}
```


## 根据 token 获取管理员信息

**描述**

```
根据 token 获取用户信息
```

**请求协议**

```
Method: Get
URL: /api/v1/admin/info
```

**请求参数**

```json
{    
    "token": "token",
}
```

**参数说明**

| Field |  Type  | Not Null | Description |
| :---: | :----: | :------: | :---------: |
| token | String |    √     |    token    |

**返回值**

```json
{
    "data": {
        "id": 01,
        "name": "qiuzi",
        "mobile": "15521451556",
        "role": "editor",
        "email": "2515632823@qq.com",
        "avatar": "http://qiuzi.cn/image/avatar/admin/qiuzi.png",
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 更新管理员信息

**描述**

```
通过 id 更新管理员信息
```

**请求协议**

```
Method: Put
URL: /api/v1/admin/:id(管理员 id)
Content-Type: application/json
```

**请求体**

```json
{    
    "name": "若风",
    "password": "123654",
    "mobile": "15521451556",
    "email": "2515632823@qq.com",
    "role": "admin",
    "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png"
}
```

**参数说明**

|  Field   |  Type  | Not Null | Description |
| :------: | :----: | :------: | :---------: |
|   name   | String |    √     |    姓名     |
| password | String |    √     |    密码     |
|  mobile  | String |    √     |  电话号码   |
|  email   | String |          |    邮箱     |
|   role   | String |          |    角色     |
|  avatar  | String |          |  头像 URL   |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```

## 添加管理员

**描述**

```
通过短信验证，更新管理员手机号
```

**请求协议**

```
Method: POST
URI: /api/v1/admin
Content-Type: application/json
```

**请求体**

```json
{
    "name": "若风",
    "role": "admin",
    "mobile": "15521451556",
    "avatar": "http://qiuzi.cn/ruofeng.png"
}
```

**参数说明**

| Field  |  Type  | Not Null | Description |
| :----: | :----: | :------: | :---------: |
|  name  | String |    √     |    姓名     |
|  role  | String |    √     |    角色     |
| mobile | String |          |  电话号码   |
| avatar | String |          |  头像 URL   |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

## 删除一名管理员

**描述**

```
删除一名管理员
```

**请求协议**

```
Method: DELETE
URL: /api/v1/admin/:id
```

**返回值**

```json
{
    "code": 0,
    "message": "删除成功",
}
```


# 医生(doctor) 

## 登录

**描述**

```
医生 PC 端登录
```

**请求协议**

```
Method: Post
URL: /api/v1/doctor/login
Content-Type: application/json
```

**请求体**

```json
{
    "mobile(or email)": 15521451556,
    "password": qwert123,
}
```

**参数说明**

|      Field      |  Type  | Not Null | Description |
| :-------------: | :----: | :------: | :---------: |
| phone(or email) | String |    √     |  医生账号   |
|    password     | String |    √     |  账号密码   |

**返回值**

```json
{
    "data": { "token": "token" },
    "message": '登录成功',
    "code": 0,
}
```

##  登出

**描述**

```
医生 PC 端登出
```

**请求协议**

```
Method: Post
URL: /api/v1/doctor/logout
Content-Type: application/json
```

**请求体**

```json
{}
```

**参数说明**

| Field | Type | Not Null | Description |
| :---: | :--: | :------: | :---------: |
|       |      |          |             |

**返回值**

```json
{
    "message": "登出成功",
    "code": 0
}
```

## 返回所有或指定医生信息

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的医生信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/doctor
```
**参数说明**

|   Field    |  Type  | Not Null |    Description     |
| :--------: | :----: | :------: | :----------------: |
|    page    |  Int   |    √     |    分页当前页数    |
|   limit    |  Int   |    √     |    返回记录条数    |
|    name    | String |          |        姓名        |
|   gender   | String |          |        性别        |
| department | String |          |      科室名称      |
|  logined   |  Int   |          | 登录状态（待考虑） |

**注意： 以上字段可出现可不出现**



**返回值**
```json
{
    "data": {
        "total": 128,
        "doctors": [
            {
                "id": 1
                "doctorId": "000025",
                "name": "张三",
                "gender": "男",
                "birth": "1980-01-01",
                "mobile": "15521451558",
                "email": "2515632822@qq.com",
                "address": "广东省广州市海珠区广州塔顶层",
                "duty": "院长",
                "rank": "主任医师",
                "introduce": "这是一条无赖哈",
                "hospital": "秋子医院",
                "department": "小儿科",
                "departmentId": "0001",
                "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png",
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 doctorId 获取医生信息

**描述**

```
根据 doctorId 获取医生信息
```

**请求协议**

```
Method: Get
URL: /api/v1/doctor/:id
```

**返回值**


```json
{
    "data": {
       "id": 3,
        "doctorId": "00001",
        "name": "秋子",
        "mobile": 15521451556,
        "email": null,
        "address": "广东省广州市海珠区广州塔顶层",
        "rank": "主治医生",
        "introduce": "哈哈哈，秋子这个小丫头",
        "department": "小儿科",
        "avatar": "http://qiuzi-hospital.oss-cn-shenzhen.aliyuncs.com/doctor/avatar/qiuzi.png",
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 根据 token 获取医生信息

**描述**

```
根据 token 获取医生信息
```

**请求协议**

```
Method: Get
URL: /api/v1/doctor/info
```

**请求参数**

```json
{    
    "token": "token",
}
```

**参数说明**

| Field |  Type  | Not Null | Description |
| :---: | :----: | :------: | :---------: |
| token | String |    √     |    token    |

**返回值**

```json
{
    "data": {
        "id": 01,
        "doctorId": "00001",
        "name": "qiuzi",
        "mobile": "15521451556",
        "email": "2515632823@qq.com",
        "introduce": "哈哈哈，秋子这个小丫头",
        "avatar": "http://qiuzi.cn/image/avatar/admin/qiuzi.png",
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 更新医生信息

**描述**

```
更新医生的信息
```

**请求协议**

```
Method: Put
URL: /api/v1/doctor/:id
Content-Type: application/json
```

**请求体**

```json
{    
    "doctorName": "张三",
    "doctorId": "00001",
    "gender": "男",
    "birth": "1981-01-01",
    "address": "广东省广州市海珠区广州塔顶层",
    "duty": "医生",  （可选数据：院长，副院长，主任，副主任，医生，护士长，护士，检验师）
    "rank": "主治医师", （可选数据：主治医师，副主任医师，医师，主管护士，护士）
    "introduce": "这是一条无赖哈",
    "department": "小儿科",
    "departmentId": "0001",
    "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png",
}
```

**参数说明**

|    Field     |  Type  | Not Null | Description  |
| :----------: | :----: | :------: | :----------: |
|   doctorId   | String |    √     |   医生 id    |
|  doctorName  | String |    √     |   医生姓名   |
|    gender    | String |    √     |     性别     |
|    birth     | String |          |   出生日期   |
|   address    |  Int   |          |     地址     |
|     duty     | String |          |     职务     |
|     rank     | String |          |     职称     |
|  introduce   | String |          |   个人简介   |
|  department  | String |    √     |   科室名称   |
| departmentId | String |    √     |   科室 id    |
|    avatar    | String |          | 医生头像链接 |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```

## 增加一名医生

**描述**

```
添加一名医生
```

**请求协议**

```
Method: POST
URI: /api/v1/doctor
Content-Type: application/json
```

**请求体**

```json
{    
    "name": "张三",
    "doctorId": "00001",
    "gender": 1,
    "birth": "1981-01-01",
    "mobile": "15521451556",
    "address": "广东省广州市海珠区广州塔顶层",
    "duty": "医生",  （可选数据：院长，副院长，主任，副主任，医生，护士长，护士，检验师）
    "rank": "主治医师", （可选数据：主治医师，副主任医师，医师，主管护士，护士）
    "introduce": "这是一条无赖哈",
    "department": "小儿科",
    "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png",
}
```

**参数说明**

|    Field     |  Type  | Not Null | Description  |
| :----------: | :----: | :------: | :----------: |
|   doctorId   | String |    √     |   医生 id    |
|     name     | String |    √     |   医生姓名   |
|    gender    | String |    √     |     性别     |
|    birth     | String |          |   出生日期   |
|   address    |  Int   |          |     地址     |
|     duty     | String |          |     职务     |
|     rank     | String |          |     职称     |
|  introduce   | String |          |   个人简介   |
|  department  | String |    √     |   科室名称   |
| departmentId | String |    √     |   科室 id    |
|    avatar    | String |          | 医生头像链接 |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

## 删除一名医生

**描述**

```
删除一名医生
```

**请求协议**

```
Method: DELETE
URL: /api/v1/doctor/:id
```

**返回值**

```json
{
    "code": 0,
    "message": "删除成功",
}
```

# 病人(patient) 

## 返回所有或指定病人信息

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的病人信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**
```
Method: Get
URL: /api/v1/patient
```

**参数说明**

|      Field       |  Type  | Not Null | Description  |
| :--------------: | :----: | :------: | :----------: |
|       page       |  Int   |          | 分页当前页数 |
|      limit       |  Int   |          | 返回记录条数 |
|       name       | String |          |     姓名     |
|      gender      |  Int   |          |     性别     |
|    remindFlow    |  Int   |          |   缴费提醒   |
|   remindVisit    |  Int   |          |   就诊提醒   |
| remindMedication |  Int   |          |   吃药提醒   |
|     logined      |  Int   |          |   登录状态   |

**返回值**

```json
{
    "data": {
        "total": 128,
        "patients": [
            {
                "id": 80000000,
                "name": "张三",
                "gender": 1,
                "password": "123456",
                "birth": "1980-01-01",
                "mobile": "15521451558",
                "email": "2515632822@qq.com",
                "idCard": "440921199606192155",
                "address": "广东省广州市海珠区广州塔顶层",
                "remindFlow": 0,
                "remindMedication": 0,
                "remindVisit": 0,
                "logined": 1,
                "lastLoginTime": "2023-01-01"
                "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png"
            },
            {
                
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 token 获取病人信息

**描述**

```
根据 token 获取用户信息
```

**请求协议**

```
Method: Get
URL: /api/v1/patient/info
```

**请求参数**

```json
{    
    "token": "token",
}
```

**参数说明**

| Field |  Type  | Not Null | Description |
| :---: | :----: | :------: | :---------: |
| token | String |    √     |    token    |

**返回值**

```json
{
    "data": {
        "id": 80000000,
        "name": "张三",
        "idCard": "440921199606182152",
        "openId": "ob9SjwBENh2uw4zgQ1CD3cg5Ucgw"
        "address": "县三溪乡下浓村新田二组86号",
        "avatar": "http://qiuzi.cn/image/avatar/admin/qiuzi.png",
    },
    "message": "信息获取成功",
    "code": 0
}
```


## 根据 id 获取病人信息

**描述**

```
根据 id 获取医生信息
```

**请求协议**

```
Method: Get
URL: /api/v1/patient/:id
```

**返回值**

```json
{
    "data": {
        "id": 80000000,
        "name": "张三",
        "gender": 1,
        "password": "123456",
        "birth": "1980-01-01",
        "mobile": "15521451558",
        "email": "2515632822@qq.com",
        "idCard": "440921199606192155",
        "address": "广东省广州市海珠区广州塔顶层",
        "remindFlow": 0,
        "remindMedication": 0,
        "remindVisit": 0,
        "logined": 1,
        "lastLoginTime": "2023-01-01"
        "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png"
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 更新病人信息

**描述**

```
更新病人的信息
```

**请求协议**

```
Method: Put
URL: /api/v1/patient/:id
Content-Type: application/json
```

**请求体**


```json
{    
    "id": 80000000,
    "name": "张三",
    "gender": 1,
    "password": "123456",
    "birth": "1980-01-01",
    "mobile": "15521451558",
    "idCard": "440921199606192155",
    "address": "广东省广州市海珠区广州塔顶层",
    "remindFlow": 0,
    "remindMedication": 0,
    "remindVisit": 0,
    "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png"
}
```

**参数说明**

|  Field   |  Type  | Not Null | Description  |
| :------: | :----: | :------: | :----------: |
|    id    |  Int   |    √     |   就诊卡号   |
|   name   | String |          |     姓名     |
|  gender  |  Int   |    √     |     性别     |
| password | String |          |     密码     |
|  birth   | String |          |   出生日期   |
|  mobile  | String |          |   手机号码   |
|  email   | String |          |     邮箱     |
|  idCard  | String |          |  身份证号码  |
| address  | String |          |     地址     |
|  avatar  | String |          | 医生头像链接 |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```

## 增加一名病人

**描述**

```
添加一名病人
```

**请求协议**

```
Method: POST
URI: /api/v1/patient
Content-Type: application/json
```

**请求体**

```json
{   
    "name": "张三",
    "gender": 1,
    "birth": "1981-01-01",
    "mobile": "15521451556",
    "idCard": "440921199606192155",
    "address": "广东省广州市海珠区广州塔顶层",
    "avatar": "http://qiuzi.cn/image/avatar/admin/zhangsan.png",
}
```

**参数说明**

|  Field  |  Type  | Not Null | Description  |
| :-----: | :----: | :------: | :----------: |
|  name   | String |    √     |     姓名     |
| gender  |  Int   |    √     |     性别     |
|  birth  | String |          |   出生日期   |
| mobile  | String |          |   手机号码   |
| idCara  | String |          |  身份证号码  |
| address | String |          |     地址     |
| avatar  | String |          | 医生头像链接 |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

## 删除一名病人

**描述**

```
删除一名病人
```

**请求协议**

```
Method: DELETE
URL: /api/v1/patient/:id
```

**返回值**

```json
{
    "code": 0,
    "message": "删除成功",
}
```



## 登录

**描述**

```
病人移动端登录
```

**请求协议**

```
Method: Post
URL: /api/v1/patient/login
Content-Type: application/json
```

**请求体**

```json
{
    "mobile": 15521451556,
    "password(or captcha)": qwert123
}
```

**参数说明**

|        Field         |  Type  | Not Null |   Description    |
| :------------------: | :----: | :------: | :--------------: |
|        mobile        | String |    √     |    病人手机号    |
| password(or captcha) | String |    √     | 账号密码或验证码 |

**返回值**

```json
{
    "code": 0,
    "message": '登录成功',
    "data": { "token": "token" }
}
```

##  登出

**描述**

```
病人移动端登出
```

**请求协议**

```
Method: Post
URL: /api/v1/patient/logout
Content-Type: application/json
```

**请求体**

```json
{}
```

**参数说明**

| Field | Type | Not Null | Description |
| :---: | :--: | :------: | :---------: |
|       |      |          |             |

**返回值**

```json
{
    "message": "登出成功",
    "code": 0
}
```

# 病人指标(quota) 

## 返回所有或指定病人指标信息

**描述**

```
根据病人 id 或 指定时间，返回该病人所有指标信息。
```

**请求协议**
```
Method: Get
URL: /api/v1/patient/quota
```

**参数说明**

| Field |  Type  | Not Null | Description |
| :---: | :----: | :------: | :---------: |
|  id   |  Int   |          |   病人 id   |
| time  | String |          |  指标时间   |

**返回值**

```json
{
    "data": {
        "total": 3,
        "patients": [
            {
                "id": 1,
                "patientId": 80000000,
                "time": "2020-01-01",
                "systolicPressure": 12.0,
                "diastolicPressure": 12.0,
                "fastingBlood": 12.0,
                "randomBlood": 12.0,
                "weight": 60,
                "waist": 60,
                "hipline": 70,
                "temperature": 37
            },
            {
                
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```


## 增加一次病人指标记录

**描述**

```
添加一次病人指标记录
```

**请求协议**

```
Method: POST
URI: /api/v1/patient/quota
Content-Type: application/json
```

**请求体**

```json
{   
    "patientId": 8000000,
    "time": 2020-01-02,
    "systolicPressure": 12.0,
    "diastolicPressure": 12.0,
    "fastingBlood": 12.0,
    "randomBlood": 12.0,
    "weight": 60,
    "waist": 60,
    "hipline": 70,
    "temperature": 37
}
```

**参数说明**

|       Field       |  Type  | Not Null | Description |
| :---------------: | :----: | :------: | :---------: |
|     patientId     |  Int   |    √     |   病人 Id   |
|       time        | String |    √     |  添加时间   |
| systolicPressure  |  Int   |          | 血压收缩压  |
| diastolicPressure |  Int   |          | 血压舒张压  |
|   fastingBlood    |  Int   |          |  空腹血糖   |
|    randomBlood    |  Int   |          |  随机血糖   |
|      weight       |  Int   |          |    体重     |
|       waist       |  Int   |          |    腰围     |
|      hipline      |  Int   |          |    臂围     |
|    temperature    |  Int   |          |    体温     |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```


# 医生排班(workPlan)

## 获取医生排班列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的医生排班信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/work_plan
```

**参数说明**

|    Field     |  Type  | Not Null |         Description         |
| :----------: | :----: | :------: | :-------------------------: |
|     page     |  Int   |    √     |        分页当前页数         |
|    limit     |  Int   |    √     |        返回记录条数         |
|  doctorName  | String |          |          医生名称           |
| departmentId |  Int   |          |           科室 id           |
|     date     | String |          |          排班日期           |
|  remaining   |  Int   |          | 剩余号数(0:不可预约；1: 可) |

** 注意： 以上字段可出现可不出现 **

**返回值**

```json
{
    "data": {
        "total": 128,
        "workPlans": [
            {
                "id": 1,
                "date": "2020-02-11",
                "stopReason": "无",
                "temp": 0,
                "creater": 0000001,
                "house": "三楼304"
                "maxAppointmentNum": 50,
                "appointmentedNum": 0,
                "addNumCreater": 00000002,
                "type": "专家",
                "departmentId": 000001,
                "doctorId": 000001,
                "doctorName": "钟南山",
                "startTime": "2020-02-22 9:00",
                "endTime": "2020-02-22 10:00",
                "startNum": 0001,
                "nowNum": 0001,
                "stop": 0
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 更新医生排班信息

**描述**

```
通过 id 更新医生排班信息
```

**请求协议**

```
Method: Put
URL: /api/v1/work-plan/:id
Content-Type: application/json
```

**请求体**

```json
{   
    "date": "2020-02-11",
    "stopReason": "I don't know",
    "temp": 1,
    "creater": 00001,
    "house": "三楼304",
    "maxAppointmentNum": 50,
    "appointmentedNum": 20,
    "addNumCreater": 00001,
    "type": "专家",
    "departmentId": 000001,
    "doctorId": 000001,
    "doctorName": "钟南山",
    "startTime": "2020-02-22 9:00",
    "endTime": "2020-02-22 10:00",
    "startNum": 0001,
    "nowNum": 0001,
    "stop": 1
}
```

**参数说明**

|       Field       |  Type  | Not Null |  Description  |
| :---------------: | :----: | :------: | :-----------: |
|       date        | String |          |   排班日期    |
|    stopReason     | String |          |   停诊原因    |
|       temp        |  Int   |          | 是否临时出诊  |
|      creater      |  Int   |          | 创建管理员 id |
|       house       | String |          |   就诊房间    |
| maxAppointmentNum |  Int   |          | 最大预约号数  |
| appointmentedNum  |  Int   |          |   已预约数    |
|   addNumCreater   |  Int   |          | 加号管理员 id |
|       type        | String |          |   出诊类型    |
|   departmentId    |  Int   |          |   科室编号    |
|     doctorId      |  Int   |          |   医生编号    |
|    doctorName     | String |          |   医生姓名    |
|     startTime     | String |          |   开始时间    |
|      endTime      | String |          |   结束时间    |
|     startNum      |  Int   |          |  预约起启号   |
|      nowNum       |  Int   |          |    当前号     |
|       stop        |  Int   |          |   是否停诊    |

**返回值**

```json
{
    "code": 0,
    "message": "更新成功"
}
```


## 添加一次排班信息

**描述**

```
添加一次排班信息
```

**请求协议**

```
Method: POST
URI: /api/v1/work-plan
Content-Type: application/json
```

**请求体**

```json
{ 
    "date": "2020-02-11",
    "creater": 00001,
    "house": "三楼304"
    "maxAppointmentNum": 50,
    "type": "专家",
    "departmentId": 000001,
    "doctorId": 000001,
    "doctorName": "钟南山",
    "startTime": "2020-02-22 9:00",
    "endTime": "2020-02-22 10:00",
    "startNum": 0001
}
```

**参数说明**

|       Field       |  Type  | Not Null |  Description  |
| :---------------: | :----: | :------: | :-----------: |
|       date        | String |    √     |   排班日期    |
|      creater      |  Int   |    √     | 创建管理员 id |
|       house       | String |    √     |   就诊房间    |
| maxAppointmentNum |  Int   |          | 最大预约号数  |
|       type        | String |          |   出诊类型    |
|   departmentId    |  Int   |    √     |   科室编号    |
|     doctorId      |  Int   |    √     |   医生编号    |
|    doctorName     | String |    √     |   医生姓名    |
|     startTime     | String |    √     |   开始时间    |
|      endTime      | String |    √     |   结束时间    |
|     startNum      |  Int   |    √     |  预约起启号   |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

# 预约(appointment)

## 返回预约列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的预约信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/appointment
```

**参数说明**

|    Field     |  Type  | Not Null | Description  |
| :----------: | :----: | :------: | :----------: |
|     page     |  Int   |          | 分页当前页数 |
|    limit     |  Int   |          | 返回记录条数 |
|     date     | String |          |     日期     |
| departmentId |  Int   |          |   科室 id    |
|      id      |  Int   |          | 预约记录 id  |
|   doctorId   |  Int   |          |   医生 id    |
|    cardNo    |  Int   |          |   就诊卡号   |
| patientName  | String |          |   患者姓名   |
|    cancel    |  Int   |          |   是否取消   |
|    status    |  Int   |          |     状态     |



**返回值**

```json
{
    "data": {
        "total": 2,
        "appointments": [
            {
                "id": 1,
                "workPlanId": 5,
                "patientName": "张三",
                "cardNo": 80000000,
                "department": "小儿科",
                "departmentId": 1,
                "doctorId": 000001,
                "doctorName": "钟南山",
                "house": 504,
                "date": "2020-02-22",
                "startTime": "2020-02-22 9:00",
                "endTime": "2020-02-22 9:30",
                "cancel": 0,
                "cancelReason": "",
                "status": 0
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 id 获取预约信息

**描述**

```
根据 id 获取预约信息
```

**请求协议**

```
Method: Get
URL: /api/v1/appointment/:id
```

**返回值**

```json
{
    "data": {
        "id": 1,
        "workPlanId": 5,
        "patientName": "张三",
        "cardNo": 80000000,
        "department": "小儿科",
        "departmentId": 1,
        "doctorId": 000001,
        "doctorName": "钟南山",
        "house": 504,
        "date": "2020-02-22",
        "startTime": "2020-02-22 9:00",
        "endTime": "2020-02-22 9:30",
        "cancel": 0,
        "cancelReason": "",
        "status": 0
    },
    "message": "信息获取成功",
    "code": 0
}
```

## 添加预约信息

**描述**

```
添加一项预约信息
```

**请求协议**

```
Method: Get
URL: /api/v1/appointment
```

**请求体**

```json
{ 
    "workPlanId": 5,
    "patientName": "张三",
    "cardNo": 80000000,
    "department": "小儿科",
    "departmentId": 1,
    "doctorId": 000001,
    "doctorName": "钟南山",
    "house": 504,
    "date": "2020-02-22",
    "startTime": "2020-02-22 9:00",
    "endTime": "2020-02-22 9:30"
}
```

**参数说明**

|    Field     |  Type  | Not Null | Description |
| :----------: | :----: | :------: | :---------: |
|  workPlanId  |  Int   |    √     | 所属排班 id |
| patientName  | String |    √     |  病人姓名   |
|    cardNo    |  Int   |    √     |  就诊卡号   |
|  department  | String |    √     |  科室名字   |
| departmentId |  Int   |    √     |   科室 id   |
|  doctorName  | String |    √     |  医生姓名   |
|   doctorId   |  Int   |    √     |   医生 id   |
|    house     | String |    √     | 就诊房间号  |
|     date     | String |    √     |  就诊日期   |
|  startTime   | String |    √     |  开始时间   |
|   endTime    | String |    √     |  结束时间   |
| remainingNum |  Int   |    √     | 剩余预约数  |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```

# 就诊记录(Record)


## 返回记录列表

**描述**

```
根据参数不同，返回所有，或指定范围，或指定搜索的预约信息。
注：不填写任何参数，默认最多返回 15 条记录
```

**请求协议**

```
Method: Get
URL: /api/v1/record
```

**参数说明**

|    Field    |  Type  | Not Null | Description  |
| :---------: | :----: | :------: | :----------: |
|    page     |  Int   |          | 分页当前页数 |
|    limit    |  Int   |          | 返回记录条数 |
|    date     | String |          |     日期     |
| doctorName  | String |          |   医生姓名   |
|  doctorId   |  Int   |          |   医生 ID    |
| patientName | String |          |   病人姓名   |
|   cardNo    |  Int   |          | 病人就诊卡号 |
|   change    |  Int   |          |   是否转诊   |


**返回值**

```json
{
    "data": {
        "total": 2,
        "records": [
            {
                "id": 1,
                "department": "小儿科",
                "doctorId": 000001,
                "doctorName": "钟南山",
                "cardNo": 80000000,
                "patientName": "张三",
                "date": "2020-02-22",
                "time": "2020-02-22 9:00",
                "diseaseDescribe": "症状较轻",
                "result": "风热感冒",
                "selfTalk": "多喝热水",
                "doctorSuggestion": "远离网络",
                "change": 0,
                "changeReason": ""
            },
            ......
        ]
    },
    "message": "请求成功",
    "code": 0,
}
```

## 根据 id 获取就诊信息

**描述**

```
根据 id 获取就诊信息
```

**请求协议**

```
Method: Get
URL: /api/v1/record/:id
```

**返回值**

```json
{
    "data": {
        "id": 1,
        "department": "小儿科",
        "doctorId": 000001,
        "doctorName": "钟南山",
        "cardNo": 80000000,
        "patientName": "张三",
        "date": "2020-02-22",
        "time": "2020-02-22 9:00",
        "diseaseDescribe": "症状较轻",
        "result": "风热感冒",
        "selfTalk": "多喝热水",
        "doctorSuggestion": "远离网络",
        "change": 0,
        "changeReason": ""
    },
    "message": "信息获取成功",
    "code": 0
}
```


## 添加就诊记录

**描述**

```
添加一项就诊记录
```

**请求协议**

```
Method: Get
URL: /api/v1/record
```

**请求体**

```json
{ 
   "department": "小儿科",
    "doctorId": 000001,
    "doctorName": "钟南山",
    "cardNo": 80000000,
    "patientName": "张三",
    "date": "2020-02-22",
    "time": "2020-02-22 9:00",
    "diseaseDescribe": "症状较轻",
    "result": "风热感冒",
    "selfTalk": "多喝热水",
    "doctorSuggestion": "远离网络",
    "change": 0,
    "changeReason": ""
}
```

**参数说明**

|    Field    |  Type  | Not Null | Description |
| :---------: | :----: | :------: | :---------: |
| department  | String |    √     |  科室名字   |
|  doctorId   |  Int   |    √     |   医生 id   |
| doctorName  | String |    √     |  医生姓名   |
|   cardNo    |  Int   |    √     |  就诊卡号   |
| patientName | String |    √     |  病人姓名   |
|    date     | String |    √     |  就诊日期   |
|  startTime  | String |    √     |  就诊时间   |
|  diseaseDescribe  | String |       | 病情摘要 |
| result |  String  |    √     |   就诊结果   |
| selfTalk | String |          | 主诉 |
| doctorSuggestion | String |         | 医生建议 |
| change |  Int   |         | 是否转诊 |
| changeReason | String |  | 转诊理由 |

**返回值**

```json
{
    "code": 0,
    "message": "添加成功"
}
```