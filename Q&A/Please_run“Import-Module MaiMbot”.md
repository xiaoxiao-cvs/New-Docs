## 目录
- [目录](#目录)
- [问题描述](#问题描述)
  - [如何排查？](#如何排查)
  - [如何解决？](#如何解决)

## 问题描述

如果你出现了此报错，大概率是你的Python没有成功安装/添加进Path/环境变量混乱/本地文件没有删干净
```
PS E:\各种下载\浏览器下载\MaiBot-0.5.15-alpha\MaiBot-0.5.15-alpha> MaiMbot\\Scripts\\activate
MaiMbot\\Scripts\\activate : 无法加载模块“MaiMbot”。有关详细信息，请运行“Import-Module MaiMbot”。
所在位置 行:1 字符: 1
+ MaiMbot\\Scripts\\activate
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (MaiMbot\\Scripts\\activate:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CouldNotAutoLoadModule

PS E:\各种下载\浏览器下载\MaiBot-0.5.15-alpha\MaiBot-0.5.15-alpha>

```
### 如何排查？

随便找个地方唤出控制台，输入
```
python --version
```
按道理是会返回py版本号，如果你没有任何反应就是你配置出问题了
```
PS C:\Users\筱> python --version
Python 3.13.1
PS C:\Users\筱>
```
---
### 如何解决？
最简单的是把你电脑的python删干净重新安装！

去你的控制面板或者Windows设置里的应用，搜索python全部卸载

随后打开文件夹去找个路径检查残留文件（用户名记得改）
```
C:\Users\筱\AppData\Local\Programs\Python
```
如果还有文件夹就删掉，去高级系统设置/环境变量/用户变量（系统变量）PATH里检查是否还剩下有Python残留，有就删掉~

删完重启一下电脑（无意义），万一文件占用呢（？

运行Python安装包，确保勾选左下角的将Python 3.9添加进PATH即可（版本号因人而异，建议3.9.9）