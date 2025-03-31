## Q: 安装 MongoDB 时显示 "Service 'MongoDB Server(MongoDB) failed to start. verify that you have sufficient privileges to start system services."

### 问题描述

安装 MongoDB 时，出现以下错误提示：

```
Service 'MongoDB Server(MongoDB) failed to start. verify that you have sufficient privileges to start system services.
```

### 解决方法

#### 1. 账户权限问题

1.  **停止安装界面：** 首先，停止 MongoDB 的安装界面，不要关闭。
2.  **打开服务管理器：** 按下 `Win + R` 组合键，打开运行窗口，输入 `services.msc` 命令，然后点击“确定”按钮，打开服务管理器。
3.  **找到 MongoDB 服务：** 在服务列表中，找到名为 "MongoDB" 的服务。
4.  **修改登录账户：** 右键点击 "MongoDB" 服务，选择“属性”。在属性窗口中，切换到“登录”选项卡。
5.  **选择本地系统账户：** 将默认的“此账户”单选框更改为“本地系统账户”。
6.  **启动服务：** 切换回“常规”选项卡，在服务状态中点击“启动”按钮。
7.  **保存设置：** 点击“应用”和“确定”按钮，保存更改。
8.  **重试安装：** 返回 MongoDB 安装软件，点击 "Retry" 按钮，完成安装。
