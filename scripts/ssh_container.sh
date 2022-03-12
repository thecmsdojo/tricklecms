containerID=$(docker ps  | grep $1 | awk '{print $1}')
docker exec -it $containerID /bin/bash
