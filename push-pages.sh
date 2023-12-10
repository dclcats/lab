#!/bin/bash

yarn build

cd dist

git init

git add .

git commit -m "pages"

git remote add origin git@gitee.com:dclcats/sub-lab.git

git branch -m master gh-pages

git push -f origin "gh-pages"
