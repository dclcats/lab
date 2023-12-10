#!/bin/bash

cmd="yarn build"

echo $cmd
eval $cmd

echo "--------------"

cd dist

git init

git add .

git commit -m "pages"

git remote add origin git@gitee.com:dclcats/xdsun.git

git branch -m master gh-pages

git push -f origin "gh-pages"
