#!/usr/bin/env bash

echo "starting database"
docker run

echo "Starting frontend"
hs ./frontend/ &

echo "Starting auth-proxy"
node ./auth-proxy/server.js &

echo "Starting load-balancer"
node ./load-balancer/server.js &

echo "Starting backend-api #1"
PORT=9000 node ./backend/server.js &

echo "Starting backend-api #2"
PORT=9001 node ./backend/server.js &
