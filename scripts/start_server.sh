SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

if [ $# -eq 0 ]; then
  echo "missing environment"
  echo "sample usage: sh start_server.sh local"
  exit
fi

cd $SCRIPT_DIR/../build/$1
docker-compose up --build
