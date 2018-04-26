

 https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6

现在，你决定要修补问题追踪系统上的 #53 问题。顺带说明下，Git 并不同任何特定的问题追踪系统打交道。这里为了说明要解决的问题，才把新建的分支取名为 iss53。要新建并切换到该分支，运行 git checkout 并加上 -b 参数：
```s
$ git checkout -b iss53
Switched to a new branch 'iss53'
```
这相当于执行下面这两条命令：
```s
$ git branch iss53
$ git checkout iss53
```
--- 

图 3-11. 创建了一个新分支的指针
接着你开始尝试修复问题，在提交了若干次更新后，iss53 分支的指针也会随着向前推进，因为它就是当前分支（换句话说，当前的 HEAD 指针正指向 iss53，见图 3-12）：

```s
$ vim index.html
$ git commit -a -m 'added a new footer [issue 53]'
```
---

图 3-12. iss53 分支随工作进展向前推进
现在你就接到了那个网站问题的紧急电话，需要马上修补。有了 Git ，我们就不需要同时发布这个补丁和 iss53 里作出的修改，也不需要在创建和发布该补丁到服务器之前花费大力气来复原这些修改。唯一需要的仅仅是切换回 master 分支。

不过在此之前，留心你的暂存区或者工作目录里，那些还没有提交的修改，它会和你即将检出的分支产生冲突从而阻止 Git 为你切换分支。切换分支的时候最好保持一个清洁的工作区域。稍后会介绍几个绕过这种问题的办法（分别叫做 stashing 和 commit amending）。目前已经提交了所有的修改，所以接下来可以正常转换到 master 分支：
```s
$ git checkout master
Switched to branch 'master'
```

查看远程分支
$ git branch -a

查看本地分支
$ git branch

切换分支到test
$git checkout test