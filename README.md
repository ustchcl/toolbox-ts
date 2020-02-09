
### 需要实现的操作
#### 1. 网络请求
- [x] get post
- [x] http

```typesript
let response = await network.mkRequest(
    ["POST_FORM", 'http://nodejs.cn/upload', {msg: 'hello world'}]
);
```
#### 2. 文件操作
**文件读取**
- [x] 读取为行的数组
- [x] 读取为string

**文件写入**
- [x] 文件多次写入

**文件检测**
- [x] watch(path)返回一个事件流


- [x] 文件重命名
- [x] 文件夹遍历


#### 3.调用系统进程，并打印输出
- [x] exec(cmd)


[TODO]
#### 4. xml 处理

[TODO]
#### 5. excel处理



ROADMAP
1. 写出ts版本
2. 写出gulp版本
3. 写出rust版本
