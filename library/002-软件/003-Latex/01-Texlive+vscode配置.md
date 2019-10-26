# 为什么要用Texlive和vscode组合
VSCode写代码太方便，高亮文本很舒服，比以前用的CTeX舒服，CTeX毕竟太老了，然后就换成Texlive了

# 关于CTeX
## CTeX 套装
CTeX 套装是科学院吴凌云研究员的个人作品。在 CTeX 套装刚刚问世之时，因其解决了繁琐的中文字体安装工作，所以广受欢迎。但是，一方面 CTeX 套装已经很久不更新，内里的宏包、工具陈旧；另一方面，随着 XeLaTeX 的发展，以及 xeCJK 等技术的成熟，上述这些繁琐的工作已经没有必要而失去意义；因此，现在不推荐使用 CTeX 套装。
>不要安装和使用 CTeX 套装！

## CTeX 宏集
虽然它的名字也是「CTeX」，但是 CTeX 宏集和 CTeX 套装是两个不同的东西。CTeX 宏集是集成了中文支持、操作系统判定、字体选择、版式预设为一体的一组宏包和文档类的合集。我们推荐在任何情况下，优先使用 CTeX 宏集处理中文。
>请在任何情况下优先使用 CTeX 宏集在 LaTeX 中处理中文！

# 搭建步骤
## 1.安装TeX Live和VSCode

你可以从官方站点下载它们的安装包然后安装，安装没有什么特定配置，直接默认安装就好。点击[TeX Live下载链接](http://mirror.ctan.org/systems/texlive/Images/texlive2019.iso)，将会「自动选择」距离你最近的镜像下载。下载的同时[安装VScode](?file=002-软件/001-VScode/001-安装和配置# VSCode安装和配置)

## 2.VSCode配置

VSCode 安装完成之后，在扩展商店(打开`Ctrl+Shift+X`或者点击![](assets/002/001/001-1571841411663.png=-30))安装 LaTeX Workshop 插件。  
![](assets/002/003/01-1572056689537.png=-300)

## 3.编译Tex文件
新建文件夹，如`latex学习`，
