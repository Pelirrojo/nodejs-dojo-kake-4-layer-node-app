#!/usr/bin/env bash

# Shell script to check dependencies before install the project
node --version >/dev/null 2>&1 || { echo "I require node.js but it's not installed.  Aborting." >&2; exit 1; }
npm list --depth 1 --global http-server > /dev/null 2>&1 || { echo "I require node:http-server but globally installed it's not installed.  Aborting." >&2; exit 1; }

docker --version >/dev/null 2>&1 || { echo "I require docker but it's not installed.  Aborting." >&2; exit 1; }
docker pull smebberson/alpine-nginx

npm install -g http-server
npm i
