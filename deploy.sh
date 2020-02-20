#! /bin/sh

# if you like to keep the gitlab origin, and use github in addition
# then you should run once (change the user and project name):
#
# git remote add github git@github.com:loopmode/cairo-workshop-app.git
#
# this added a new remote with the name "github"
# now you can use this script and pass the -r remote to gh-pages
# we dynamically evaluate the remote by asking the git config to read it for us

yarn build
yarn gh-pages -d build -r $(git config --get remote.github.url)