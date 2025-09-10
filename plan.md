/* 
** 📁 plan.md
** lastUpdatedAt:[{ "date": "10/09/2025", "by": ["BomBa"], "comment": "إنشاء تطبيق دردشة في الوقت الفعلي باستخدام (Node.js, Express  nodejs, Socket.io" }, video: ["https://youtu.be/pdOhh8IVs-I"]]
*/


/app
  server(Node/Express)/
    src/
      config/
      modules/
        auth/
        users/
        conversations/
        messages/
        uploads/
        realtime/
      middlewares/
      utils/
      app.ts
      server.ts
    prisma/ أو models/
  client(Next.js)/
    src/
      app/ أو pages/
      components/
      hooks/
      lib/
      store/
      styles/
  /infra (IaC, docker, scripts)



# جدول بسيط يوضح الأوامر المطلوبة :
| المهمة                                          | Linux (Bash)         | Windows (CMD)                | Windows (PowerShell)                            |
| ----------------------------------------------- | -------------------- | ---------------------------- | ----------------------------------------------- |
| **حذف جميع المجلدات والملفات في المجلد الحالي** | `rm -rf *`           | `del /q *.* & rmdir /s /q *` | `Remove-Item * -Recurse -Force`                 |
| **إنشاء مجلد**                                  | `mkdir foldername`   | `mkdir foldername`           | `New-Item -ItemType Directory -Name foldername` |
| **إنشاء ملف**                                   | `touch filename.txt` | `echo. > filename.txt`       | `New-Item -ItemType File -Name filename.txt`    |
| _______________________________________________ | ____________________ | ____________________________ | _______________________________________________ |

yarn upgrade // -> تحديث الحزم إلى آخر إصدار مسموح به داخل package.json

# سنقوم اولاً بالعمل علي السيرفر (SERVER:Express)

``` terminal
step 1:
  yarn init -y
  yarn add express socket.io moment         // moment -> مكتبة تخص التاريخ و الوقت
  yarn add -D nodemon

step 2:
  mkdir public src

step 3:
touch src/server.js 
yarn dev
```

