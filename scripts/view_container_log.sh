#!/usr/bin/env bash

# Usage: sh view_container.sh [container image name]

containerID=$(docker ps  | grep $1 | awk '{print $1}')
docker logs --follow $containerID
