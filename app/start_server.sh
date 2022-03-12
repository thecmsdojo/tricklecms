cd /app
if [ "$APP_ENV" = "local" ]; then
  npm run start_hotreload
else
  npm run start
fi
