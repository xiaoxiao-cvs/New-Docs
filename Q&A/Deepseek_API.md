在env.prod中配置key


以下是参考代码，不使用回复模型3，图像和嵌入交给硅基

```
#下面的模型若使用硅基流动则不需要更改，使用ds官方则改成.env.prod自定义的宏，使用自定义模型则选择定位相似的模型自己填写

#推理模型：

[model.llm_reasoning] #回复模型1 主要回复模型
name = "deepseek-reasoner"
provider = "DEEP_SEEK"
pri_in = 0 #模型的输入价格（非必填，可以记录消耗）
pri_out = 0 #模型的输出价格（非必填，可以记录消耗）


[model.llm_reasoning_minor] #回复模型3 次要回复模型
name = "deepseek-reasoner"
provider = "DEEP_SEEK"

#非推理模型

[model.llm_normal] #V3 回复模型2 次要回复模型
name = "deepseek-chat"
provider = "DEEP_SEEK"

[model.llm_normal_minor] #V2.5
name = "deepseek-chat"
provider = "DEEP_SEEK"

[model.llm_emotion_judge] #主题判断 0.7/m
name = "deepseek-chat"
provider = "DEEP_SEEK"

[model.llm_topic_judge] #主题判断：建议使用qwen2.5 7b
name = "deepseek-chat"
provider = "DEEP_SEEK"

[model.llm_summary_by_topic] #建议使用qwen2.5 32b 及以上
name = "deepseek-chat"
provider = "DEEP_SEEK"
pri_in = 0
pri_out = 0

[model.moderation] #内容审核 未启用
name = ""
provider = "SILICONFLOW"
pri_in = 0
pri_out = 0

# 识图模型

[model.vlm] #图像识别 0.35/m
name = "Qwen/Qwen2-VL-72B-Instruct"
provider = "SILICONFLOW"

#嵌入模型

[model.embedding] #嵌入
name = "Pro/BAAI/bge-m3"
provider = "SILICONFLOW"
```