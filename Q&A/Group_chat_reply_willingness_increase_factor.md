# 群聊回复意愿提高系数 (0.6.0 snapshot-2)
## 由麦麦5群 @明月几时有 提供 
（未经验证，仅修改结构 @筱喵~）
最后一次修改时间 2025年3月30日0点48分

## 目录

*   [打开你正在使用的bot\_config.toml文件](#打开你正在使用的bot_configtoml文件)
*   [打开你正在使用的mode\_xxxx.py文件](#打开你正在使用的mode_xxxxpy文件)
*   [打开config.py](#打开configpy)

## 打开你正在使用的bot\_config.toml文件

**路径：** `E:\bot\config\`

### 添加到降低系数下方

```toml
up_frequency_rate = 3 # 提高回复频率的群组回复意愿提高系数 乘法
```

### 添加到`[groups]`组

```toml
talk_frequency_up = [
    xxxxxxxx,
    ]  # 提高回复频率的群
```

## 打开你正在使用的mode\_xxxx.py文件

**路径：** `E:\bot\src\plugins\willing\`

### 添加到检查群组权限功能中（注意对齐）

```python
elif chat_stream.group_info.group_id in config.talk_frequency_up_groups:
    reply_probability = reply_probability * global_config.up_frequency_rate
```

## 打开config.py

**路径：** `E:\bot\ssrc\plugins\chat`

**善用`Ctrl+F`搜索**

### 添加到`class BotConfig`中的`group`处

```python
talk_frequency_up_groups = set()
```

### 添加到`class BotConfig`中的`willing`处

```python
up_frequency_rate: float = 3  # 提高回复频率的群组回复意愿提高系数
```

### 添加到这行代码的下方`config.down_frequency_rate = willing_config.get("down_frequency_rate", config.down_frequency_rate)`

```python
config.up_frequency_rate = willing_config.get("up_frequency_rate", config.up_frequency_rate)
```

### 添加到这行代码的下方`config.down_frequency_rate = msg_config.get("down_frequency_rate", config.down_frequency_rate)`

```python
config.up_frequency_rate = msg_config.get("up_frequency_rate", config.up_frequency_rate)
```

### 添加到这行代码的下方`config.talk_frequency_down_groups = set(groups_config.get("talk_frequency_down", []))`

```python
config.talk_frequency_up_groups = set(groups_config.get("talk_frequency_up", []))

