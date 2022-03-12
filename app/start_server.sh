cd /app
if [ "$APP_ENV" = "local" ]; then
  npm install -g nodemon
  npm run start_hotreload
else
  npm run start
fi
