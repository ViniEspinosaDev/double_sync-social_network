@echo off

cd server

npm install express
npm install @types/express -D
npm install ts-node -D
npm install typescript -D
npx tsc --init
npm install knex
npm install sqlite3
npm install cors
npm install @types/cors

cd ..

cd web

npm install react-icons
npm install react-router-dom
npm install @types/react-router-dom
npm install axios

echo press enter to exit
pause >nul
exit


