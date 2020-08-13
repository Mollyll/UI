#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
# yarn build :build

# 进入生成的文件夹
# cd blog/.vuepress/dist

# # 链接远程仓库
git remote add origin https://github.com/Mollyll/UI.git
# git init
# git add -A
# 拉取远程代码 git pull
git pull --rebase origin master 
# 查看变更文件
git status
git add -A
# 将更改的文件提交到仓库暂存区
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Mollyll/Mollyll.github.io.git master
# git push git@github.com:Mollyll/UI.git --delete gh-pages
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 记得先配置git公私钥
git push -f git@github.com:Mollyll/UI.git master

# 将目录通过subtree上传到gh-pages分支
git subtree push --prefix dist git@github.com:Mollyll/UI.git gh-pages 
# # 同步更新代码
# git push -u origin master
# cd -