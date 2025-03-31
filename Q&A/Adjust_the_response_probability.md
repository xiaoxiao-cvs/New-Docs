# 概率调整方法(0.6.0 snapshot-2)
## 由麦麦5群 @明月几时有 提供 
（未经验证，仅修改结构 @筱喵~）
最后一次修改时间 2025年3月30日01点11分

## 目录

- [概率调整方法(0.6.0 snapshot-2)](#概率调整方法060-snapshot-2)
  - [由麦麦5群 @明月几时有 提供](#由麦麦5群-明月几时有-提供)
  - [目录](#目录)
  - [简介](#简介)
  - [线性映射](#线性映射)
  - [分段映射](#分段映射)
  - [非线性映射](#非线性映射)

## 简介

本文件描述了如何通过用户关系值调整回复概率。以下方法可以添加到你的 `mode_xxxx.py` 文件中。

**路径：** `E:\bot\src\plugins\willing`

**添加到文件头部：**

```python
from ..chat.relationship_manager import relationship_manager
```

## 线性映射

```python
# 线性映射
        if relationship and hasattr(relationship, "relationship_value"):
            rel_value = relationship.relationship_value
            rel_boost = 1 + rel_value / 3000
            reply_probability *= rel_boost
            logger.debug(f"关系值加成: {rel_boost:.2f}, 当前概率: {reply_probability}")
        else:
            logger.debug("未找到用户关系值，使用默认加成")
```

## 分段映射

```python
# 分段映射
        if relationship and hasattr(relationship, "relationship_value"):
            if relationship.relationship_value >= 500:
                reply_probability *= 1.1  # 高关系值额外提升10%
                logger.debug(f"关系值加成: {1.1}, 当前概率: {reply_probability}")
            elif relationship.relationship_value <= -500:
                reply_probability *= 0.7  # 低关系值降低30%
                logger.debug(f"关系值加成: {0.7}, 当前概率: {reply_probability}")
            else:
                logger.debug("使用默认加成")
```

## 非线性映射

(这里可以添加非线性映射的描述和代码，如果需要)

**选择方法：**

选择上述线性或分段映射方法，或者自定义非线性映射，将其添加到以下代码段之前：

```python
return reply_probability
```
