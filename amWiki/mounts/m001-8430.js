if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"001-总体格式.md","path":"001-常用/001-Markdown/001-总体格式.md","content":"# Markdown总体格式\r\n## <font color=\"#FF4500\">[标题]</font><br /> \r\n在行首插入1到6个#，对应1到6阶标题\r\n\r\n```markdown\r\n# 这是 H1\r\n## 这是 H2\r\n### 这是 H3\r\n#### 这是 H4\r\n##### 这是 H5\r\n###### 这是 H6\r\n```\r\n\r\n## <font color=\"#FF4500\">[引用]</font><br /> \r\n\r\n```markdown\r\n>这里是一段引用\r\n```\r\n\r\n>这里是一段引用\r\n\r\n\r\n## <font color=\"#FF4500\">[分割线]</font><br />\r\n只需要三个 - 号\r\n\r\n```markdown\r\n---\r\n```\r\n\r\n---\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","timestamp":1572061175867},{"name":"002-内容格式.md","path":"001-常用/001-Markdown/002-内容格式.md","content":"## <font color=\"#FF4500\">[换行]</font><br />\r\n只需要两个以上的空格然后回车\r\n\r\n```markdown\r\n我是首行  \r\n我换行了\r\n```\r\n\r\n我是首行  \r\n我换行了\r\n\r\n## <font color=\"#FF4500\">[删除线]</font><br />\r\n```markdown\r\n~~要删掉的内容~~\r\n```\r\n\r\n~~要删掉的内容~~","timestamp":1572061175867},{"name":"003-字体.md","path":"001-常用/001-Markdown/003-字体.md","content":"## <font color=\"#FF4500\">[字体格式和颜色]</font><br /> \r\n\r\n```markdown\r\n**加粗**\r\n__加粗__\r\n*斜体*\r\n_斜体_\r\n```\r\n\r\n**加粗**\r\n__加粗__\r\n*斜体*\r\n_斜体_\r\n\r\n&#61;&#61;直接飘红文字&#61;&#61;\r\n```markdown\r\n<font color=\"#dd0000\">浅红色文字</font><br /> \r\n<font color=\"#660000\">深红色文字</font><br /> \r\n<font color=\"#00dd00\">浅绿色文字</font><br /> \r\n<font color=\"#006600\">深绿色文字</font><br /> \r\n<font color=\"#0000dd\">浅蓝色文字</font><br /> \r\n<font color=\"#000066\">深蓝色文字</font><br /> \r\n<font color=\"#dddd00\">浅黄色文字</font><br /> \r\n<font color=\"#666600\">深黄色文字</font><br /> \r\n<font color=\"#00dddd\">浅青色文字</font><br /> \r\n<font color=\"#006666\">深青色文字</font><br /> \r\n<font color=\"#dd00dd\">浅紫色文字</font><br /> \r\n<font color=\"#660066\">深紫色文字</font><br /> \r\n```\r\n\r\n==直接飘红文字==\r\n<font color=\"#dd0000\">浅红色文字</font><br /> \r\n<font color=\"#660000\">深红色文字</font><br /> \r\n<font color=\"#00dd00\">浅绿色文字</font><br /> \r\n<font color=\"#006600\">深绿色文字</font><br /> \r\n<font color=\"#0000dd\">浅蓝色文字</font><br /> \r\n<font color=\"#000066\">深蓝色文字</font><br /> \r\n<font color=\"#dddd00\">浅黄色文字</font><br /> \r\n<font color=\"#666600\">深黄色文字</font><br /> \r\n<font color=\"#00dddd\">浅青色文字</font><br /> \r\n<font color=\"#006666\">深青色文字</font><br /> \r\n<font color=\"#dd00dd\">浅紫色文字</font><br /> \r\n<font color=\"#660066\">深紫色文字</font><br /> \r\n更多颜色查询：http://www.114la.com/other/rgb.htm\r\n","timestamp":1572061175867},{"name":"004-列表.md","path":"001-常用/001-Markdown/004-列表.md","content":"## <font color=\"#FF4500\">[列表]</font><br />\r\n#### 无序列表\r\n使用 * + - 来做为列表的项目标记\r\n\r\n```markdown\r\n* Candy.\r\n* Gum.\r\n+ Booze.\r\n- Booze.\r\n  + 嵌套\r\n  * 嵌套\r\n```\r\n\r\n* Candy.\r\n* Gum.\r\n+ Booze.\r\n- Booze.\r\n  + 嵌套\r\n  * 嵌套\r\n\r\n#### 有序列表\r\n一般的数字接着一个英文句点作为项目标记，效果与数字无关只与顺序有关\r\n\r\n```markdown\r\n1. Red\r\n2.  Green\r\n3.    Blue\r\n```\r\n\r\n1. Red\r\n2.  Green\r\n3.    Blue","timestamp":1572061175867},{"name":"005-超链接.md","path":"001-常用/001-Markdown/005-超链接.md","content":"## <font color=\"#FF4500\">[超链接]</font><br />\r\n超链接和引用\r\n\r\n### 文档间\r\n\r\n```markdown\r\n[脚注的使用方法](?file=001-常用/001-Markdown/008-引用#&#91;引用&#93;)\r\n```\r\n\r\n[脚注的使用方法](?file=001-常用/001-Markdown/008-引用#&#91;引用&#93;)\r\n\r\n### 网址\r\n在方括号后面用圆括号接上链接\r\n\r\n```markdown\r\n这是一个[链接显示文本](http://www.google.com \"链接title文本\")\r\n这是一个直接链接http://www.google.com\r\n这是一个直接链接<http://www.google.com>，这种写法防止过度引用\r\n```\r\n\r\n这是一个[链接显示文本](http://www.google.com \"链接title文本\")  \r\n这是一个直接链接http://www.google.com  \r\n这是一个直接链接<http://www.google.com>，这种写法防止过度引用\r\n\r\n重复多次使用一个链接可以直接定义引用  \r\n\r\n```markdown\r\n这是一个[重复使用链接]\r\n[重复使用链接]: http://www.google.com \"链接title文本\"\r\n```\r\n\r\n这是一个[重复使用链接]  \r\n[重复使用链接]: http://www.google.com \"链接title文本\"\r\n### 图片\r\n\r\n```markdown\r\n![alt文本](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3caBRRBaDBug3hDSSgLFtlu5QkAE_dsc366ScpKc4ZvhilCbMDg \"小狗狗\")\r\n![乱写的](https://哈哈 \"小狗狗\")\r\n```\r\n\r\n![alt文本](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3caBRRBaDBug3hDSSgLFtlu5QkAE_dsc366ScpKc4ZvhilCbMDg \"小狗狗\")  \r\n![乱写的](https://哈哈 \"小狗狗\")","timestamp":1572061175867},{"name":"006-表格.md","path":"001-常用/001-Markdown/006-表格.md","content":"## <font color=\"#FF4500\">[表格]</font><br />\r\n\r\n使用竖线分割内容，且同时使用“---”与“:”指定对齐方式\r\n\r\n```markdown\r\n| Header01 | Header02 | Header03\r\n| -------- | :------: | ---:\r\n| 默认 | 居中 | 右\r\n```\r\n\r\n| Header01 | Header02 | Header03\r\n| -------- | :------: | ---:\r\n| 默认 | 居中 | 右\r\n\r\n先用Excel制作表格，再复制到http://www.tablesgenerator.com/markdown_tables ，直接产生Markdown表格\r\n","timestamp":1572061175867},{"name":"007-代码.md","path":"001-常用/001-Markdown/007-代码.md","content":"## <font color=\"#FF4500\">[代码]</font><br />\r\n\r\n### 单个语法\r\n\r\n使用反引号 ` 来标记代码区段\r\n\r\n```markdown\r\n我是`code`，`<div>division</div>`\r\n```\r\n\r\n我是`code`，`<div>division</div>`\r\n\r\n### 代码段\r\n\r\n使用两组每组三个反引号分单独两行将代码包围起来，并在第一组反引号后写上语言类型markdown,python即可使用语法高亮\r\n\r\n````\r\n```markdown\r\ncode\r\n```\r\n````\r\n\r\n![](assets/001/001/007-1571807362366.png=-50)\r\n\r\n```markdown\r\n我是`code`，`<div>division</div>` <!--哈哈我是注释，不会在浏览器中显示。-->\r\n```\r\n\r\n![](assets/001/001/007-1571807178321.png=-50)\r\n\r\n```python\r\nprint(\"Hello,world\")\r\nfor i in range(10): //#循环\r\n    print(i)\r\n```\r\n\r\namWiki 对 javascript 代码片段做了再次增强，可以点击 代码块右上角按钮 隐藏/显示注释\r\n当注释处于隐藏状态时不会被复制，用//注释","timestamp":1572061175867},{"name":"008-引用.md","path":"001-常用/001-Markdown/008-引用.md","content":"## <font color=\"#FF4500\">[引用]</font><br />\r\n\r\n>脚注[\\^1]是附在文章页面的最底端的，对某些东西加以说明的注文  \r\n>[\\^1]: 脚注内容 第一条\r\n\r\n脚注[^1]是附在文章页面的最底端的，对某些东西加以说明的注文  \r\n\r\n[^1]: 脚注内容 第一条\r\n\r\n","timestamp":1572061175867},{"name":"009-复选框.md","path":"001-常用/001-Markdown/009-复选框.md","content":"## <font color=\"#FF4500\">[复选框]</font><br />\r\n\r\n>\\[x\\] A  \r\n\\[ \\] B  \r\n\\- \\[x\\] 已选中  \r\n\\- \\[ \\] 未选中  \r\n\r\n[x] A\r\n[ ] B\r\n- [x] 已选中\r\n- [ ] 未选中","timestamp":1572061175867},{"name":"010-转义.md","path":"001-常用/001-Markdown/010-转义.md","content":"## <font color=\"#FF4500\">[转义]</font><br />\r\n\r\nMarkdown中如\\\\,^不能直接打出的时候，需要转义字符\\\r\n\r\n>\\\\\\\\ 反斜杠  \r\n\\\\^ 幂\r\n\r\n\\\\ 反斜杠  \r\n\\^ 幂","timestamp":1572061175867},{"name":"011-图片.md","path":"001-常用/001-Markdown/011-图片.md","content":"## <font color=\"#FF4500\">[图片]</font><br />\r\n\r\n### 截图\r\n在使用amwiki时，`ctrl+alt+shift+v`得到剪切板中的图片\r\n\r\n```markdown\r\n![](assets/001/001/011-1571810158804.png)\r\n```\r\n\r\n![](assets/001/001/011-1571810158804.png)\r\n\r\n### 图片大小\r\n\r\n```markdown\r\n![](assets/001/001/011-1571810158804.png=100-100 \"设置宽高\")\r\n![](assets/001/001/011-1571810158804.png=100- \"设置宽，高按比例缩放\")\r\n![](assets/001/001/011-1571810158804.png=-100 \"设置高，宽按比例缩放\")\r\n```\r\n\r\n![](assets/001/001/011-1571810158804.png=100×100 \"设置宽高\")  \r\n![](assets/001/001/011-1571810158804.png=100- \"设置宽，高按比例缩放\")  \r\n![](assets/001/001/011-1571810158804.png=-100 \"设置高，宽按比例缩放\")  \r\n\r\n### 对齐方式\r\n\r\n```markdown\r\n![](assets/001/001/011-1571810158804.png=--l \"左对齐\")\r\n![](assets/001/001/011-1571810158804.png=--r \"右对齐\")\r\n![](assets/001/001/011-1571810158804.png=--c \"居中\")\r\n```\r\n心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库![](assets/001/001/011-1571810158804.png=--c \"居中\")心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的![](assets/001/001/011-1571810158804.png=--l \"左对齐\")知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库![](assets/001/001/011-1571810158804.png=--r \"右对齐\")心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库心雨的知识库","timestamp":1572061175867},{"name":"012-公式.md","path":"001-常用/001-Markdown/012-公式.md","content":"## <font color=\"#FF4500\">[公式]</font><br />\r\n\r\n很遗憾原生态的markdown不支持LaTeX公式，在github上也不支持，jupyter notebook上支持是有工具来转换LaTeX指令。  \r\n一个解决方案是用[在线LaTeX网站](http://latex.codecogs.com/)转化为图片再引用\r\n\r\n![](assets/001/001/012-1571905583644.png=-30)  \r\n![](<http://latex.codecogs.com/gif.latex?\\\\frac{\\\\partial J}{\\\\partial \\\\theta_k^{\\(j\\)}}>)\r\n\r\n>==注意==使用\'\\\\\\\\\'和\'<>\',原因查看[转义](?file=001-常用/001-Markdown/010-转义#&#91;转义&#93;)\r\n\r\n自己看可以下载拓展，不过GitHub上会显示不了  \r\n![](assets/001/001/012-1571922161254.png=-30)  \r\n$\\\\frac{\\\\partial J}{\\\\partial \\\\theta_k^{\\(j\\)}}$","timestamp":1572061175867}]