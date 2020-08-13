#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# yarn build :build

# 进入生成的文件夹
# cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Mollyll/Mollyll.github.io.git master
# git push origin --delete branch
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 记得先配置git公私钥
git push -f git@github.com:Mollyll/UI.git master:gh-pages
# # 链接远程仓库
git remote add origin https://github.com/Mollyll/UI.git
# # 拉取远程仓库的文件
git pull --rebase origin master  
# # 同步更新代码
# git push -u origin master
# cd -