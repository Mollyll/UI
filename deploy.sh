# 链接远程仓库
git remote add origin https://github.com/Mollyll/UI.git
# git init
git add -A
# 将更改的文件提交到仓库暂存区
git commit -m 'molly'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Mollyll/Mollyll.github.io.git master
# git push git@github.com:Mollyll/UI.git --delete gh-pages
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 代码上传到 master 分支
git push -f git@github.com:Mollyll/UI.git master

# 将目录通过subtree上传到gh-pages分支
git subtree push --prefix dist git@github.com:Mollyll/UI.git gh-pages 

# 拉取远程代码 git pull
git pull --rebase origin master 
