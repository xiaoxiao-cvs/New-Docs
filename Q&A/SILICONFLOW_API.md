# 硅基流动API 接入指南

本文档将指导您完成硅基流动API的账号注册、API Key申请及接口调用流程。

---

## 目录
1. [注册账号](#1-注册账号)
2. [申请API Key](#2-申请api-key)
3. [API调用](#3-api调用)

---

## 1. 注册账号

### 步骤说明
1. 访问 **硅基流动开发者平台** [https://cloud.siliconflow.cn/models](https://cloud.siliconflow.cn/models)
2. 点击右上角 **「注册」** 按钮
3. 填写注册信息
4. 登录后在右上角进行实名认证



## 2. 申请API Key

### 步骤说明
1. 登录后进入 **「控制台」** 左侧边栏的 **「API密钥」**
2. 点击 **「新建Api密钥」**
   - 填写应用名称（如：MaiBot）
3. 生成API Key：
   - 成功创建应用后，系统自动生成 `API Key` 
   - 可在「密钥管理」中查看或重置密钥

## 3. 配置Key

1. 在Bot根目录的env.prod中，把Key添加进里面👇

```
SILICONFLOW_KEY=sk-asjkdflljdlfkjalskdjfalkajsdf
```

