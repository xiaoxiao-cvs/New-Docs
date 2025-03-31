# Windows 找不到 `mongodb\bin\mongod.exe` 解决方案
# 此文档正在fix，暂时请勿参考

## 目录
- [Windows 找不到 `mongodb\bin\mongod.exe` 解决方案](#windows-找不到-mongodbbinmongodexe-解决方案)
- [此文档正在fix，暂时请勿参考](#此文档正在fix暂时请勿参考)
  - [目录](#目录)
  - [问题原因](#问题原因)
  - [安装步骤](#安装步骤)
    - [选择操作系统](#选择操作系统)
    - [Windows 安装方法](#windows-安装方法)
      - [方法一：通过 MSI 安装](#方法一通过-msi-安装)
      - [方法二：通过 ZIP 安装](#方法二通过-zip-安装)
  - [注意事项](#注意事项)
  - [后续步骤](#后续步骤)

## 问题原因
从 MongoDB 6.0 版本开始，MongoDB 不再默认安装 Shell 工具。因此，需要单独安装一个名为 **mongosh** 的工具（MongoDB Shell）。

前往 [mongoshell 下载页面](https://www.mongodb.com/try/download/shell) 下载并解压到指定目录，然后将解压后的目录添加到系统的环境变量中，即可使用 `mongosh` 连接 MongoDB。

---

## 安装步骤

### 选择操作系统
根据您的操作系统选择合适的安装方式：
- **Windows**
- **~~macOS~~**
- **~~Linux~~**

---

### Windows 安装方法

#### 方法一：通过 MSI 安装
1. 打开 [MongoDB Shell 下载页面](https://www.mongodb.com/try/download/shell)。
2. 在 **Platform** 下拉菜单中，选择 **Windows 64-bit (8.1+) (MSI)**。
3. 点击 **Download** 按钮下载安装包。
4. 双击下载的安装程序文件，按照提示完成安装。

#### 方法二：通过 ZIP 安装
1. 打开 [MongoDB Shell 下载页面](https://www.mongodb.com/try/download/shell)。
2. 下载适用于操作系统的 ZIP 安装包。
3. 解压文件：
   ```bash
   tar -xf mongosh-2.4.0-win32-x64.zip
   ```
   解压后会生成一个 bin 文件夹，其中包含以下两个文件：

   bin/
   ├── mongosh.exe
   └── mongosh_crypt_v1.dll

4. 将 mongosh 的 bin 目录路径添加到系统的 PATH 环境变量中：

   打开 控制面板 → 系统和安全 → 系统。
   点击 高级系统设置 → 环境变量。
   在 系统变量 部分，找到并选择 Path，点击 编辑。
   点击 新建，添加 mongosh 的 bin 目录路径。
   点击 确定 保存更改。
   验证安装是否成功： 打开命令提示符，运行以下命令：

   mongosh --help

## 注意事项
在 Windows 上，mongosh 的首选项和配置文件存储在以下路径：
```
%APPDATA%/mongodb/mongosh
```

## 后续步骤
成功安装 mongosh 后，请参考官方文档学习如何连接到 MongoDB 部署：

[MongoDB 链接指南](https://www.mongodb.com/zh-cn/docs/mongodb-shell/connect/)
