## 目录
- [MongoDB 如何备份？](#mongodb-如何备份)
  - [MongoDB 官方提供了两种主要的备份工具：**mongodump/mongorestore** 和 **文件系统快照**](#mongodb-官方提供了两种主要的备份工具mongodumpmongorestore-和-文件系统快照)
  - [使用 `mongodump` 备份数据](#使用-mongodump-备份数据)
    - [基本备份命令](#基本备份命令)
  - [](#)
  - [使用 `mongorestore` 恢复数据](#使用-mongorestore-恢复数据)
---
# MongoDB 如何备份？



MongoDB 官方提供了两种主要的备份工具：**mongodump/mongorestore** 和 **文件系统快照**
---
官方备份工具下载：[点此下载](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.11.0.zip)，或者使用wiki内的网盘：[123网盘](https://www.123912.com/s/xM17Vv-viZNd)

下载后解压
![输入图片说明](https://foruda.gitee.com/images/1742027470320791644/c712a5a6_12794036.png "屏幕截图")

把解压后的文件找一个你喜欢的地方放，然后复制到bin的绝对路径

![输入图片说明](https://foruda.gitee.com/images/1742027523150725296/d41e62d0_12794036.png "屏幕截图")

然后添加进系统path变量里面

![输入图片说明](https://foruda.gitee.com/images/1742027559587150064/98009d06_12794036.png "屏幕截图")

## 使用 `mongodump` 备份数据  
`mongodump` 是 MongoDB 官方提供的命令行备份工具，可以将数据导出为 BSON/JSON 格式。  
### 基本备份命令  
```bash
mongodump --uri "mongodb://localhost:27017" --out ./backup
```
这里的mongodb://localhost:27017是指你数据库的地址，可以在compass复制  
![输入图片说明](https://foruda.gitee.com/images/1742027642460536367/66f01ceb_12794036.png "屏幕截图")  
执行完后，会在你调出控制台的地方创建一个backup文件夹，你的数据就在这里  
![输入图片说明](https://foruda.gitee.com/images/1742027728705092185/3f8792f2_12794036.png "屏幕截图")
---
## 使用 `mongorestore` 恢复数据  
备份后可用 `mongorestore` 恢复数据：
你需要在上一步的backup文件同目录打开控制台输入此命令，即可
```bash
mongorestore --uri "mongodb://localhost:27017/" --dir ./backup
```
---
结果：

我的服务器：
![输入图片说明](https://foruda.gitee.com/images/1742027858811149596/03e8cb29_12794036.png "屏幕截图")
虚拟机
![输入图片说明](https://foruda.gitee.com/images/1742027887877224568/138ea411_12794036.png "屏幕截图")