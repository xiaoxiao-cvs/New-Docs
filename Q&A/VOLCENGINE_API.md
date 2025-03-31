# 此教程需你部署完麦麦Bot本体后，运行一次生成cfg

## 目录
- [此教程需你部署完麦麦Bot本体后，运行一次生成cfg](#此教程需你部署完麦麦bot本体后运行一次生成cfg)
  - [目录](#目录)
  - [第一步，注册并登录火山引擎](#第一步注册并登录火山引擎)
    - [官网 → https://www.volcengine.com/](#官网--httpswwwvolcenginecom)
      - [右上角注册并登录，移到头像上有个实名，戳他实名](#右上角注册并登录移到头像上有个实名戳他实名)
    - [右上角API接入](#右上角api接入)
    - [点击自定义推理接入点，下面创建](#点击自定义推理接入点下面创建)
    - [打开bot根目录的env.prod文件](#打开bot根目录的envprod文件)
    - [这样api配置就完成了，去bot/config里的bot\_cofig，在主推理模型填写分配给你的模型名](#这样api配置就完成了去botconfig里的bot_cofig在主推理模型填写分配给你的模型名)

## 第一步，注册并登录火山引擎

### 官网 → https://www.volcengine.com/

#### 右上角注册并登录，移到头像上有个实名，戳他实名
![输入图片说明](https://foruda.gitee.com/images/1741841570006846506/d9a502d7_12794036.png "屏幕截图")

 **实名后返回主页，点击左手边的deepseek** 

![输入图片说明](https://foruda.gitee.com/images/1741842241794146516/fd880162_12794036.png "屏幕截图")

 **点击立即体验** 

![输入图片说明](https://foruda.gitee.com/images/1741842279070955863/553c481c_12794036.png "屏幕截图")

### 右上角API接入

![输入图片说明](https://foruda.gitee.com/images/1741842312145307164/336b7c3c_12794036.png "屏幕截图")

 **创建api key** 

![输入图片说明](https://foruda.gitee.com/images/1741842360565743058/f7a5ebcf_12794036.png "屏幕截图")

 **创建完可以直接关掉，点击右上角的控制台，左边找到在线推理点进去** 
![](https://foruda.gitee.com/images/1741842498119567302/6396855d_12794036.png "屏幕截图")

### 点击自定义推理接入点，下面创建

![输入图片说明](https://foruda.gitee.com/images/1741842682831382657/03e35b95_12794036.png "屏幕截图")

 **进入后，名称随意，选择确认接入即可** 

![输入图片说明](https://foruda.gitee.com/images/1741842569664177572/d5be1fa1_12794036.png "屏幕截图")


### 打开bot根目录的env.prod文件

 **按照我这样新建一个api以及key（VOLCENGINE_BASE_URL 和 VOLCENGINE_KEY）** 

![输入图片说明](https://foruda.gitee.com/images/1741842838784867639/2ca3612b_12794036.png "屏幕截图")

 **在VOLCENGINE_BASE_URL的等号后面输入**  

```
https://ark.cn-beijing.volces.com/api/v3
```


 **在VOLCENGINE_KEY的等号后面输入你的KEY ，在火山方舟控制台下面倒数第二个** 

![输入图片说明](https://foruda.gitee.com/images/1741842972870739678/2517b138_12794036.png "屏幕截图")

### 这样api配置就完成了，去bot/config里的bot_cofig，在主推理模型填写分配给你的模型名

![输入图片说明](https://foruda.gitee.com/images/1741843085241006648/e009cb6a_12794036.png "屏幕截图")

![输入图片说明](https://foruda.gitee.com/images/1741850289617465844/1b78834b_12794036.png "屏幕截图")

provider = "VOLCENGINE" 即可