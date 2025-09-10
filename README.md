# Express Starter Project 🚀

<dev align="center" dir="ltr">
  <p>
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
    <img src="https://img.shields.io/badge/Node.js-%23404d59.svg?style=for-the-badge&logo=node.js&logoColor=%2361DAFB" alt="Node.js" />
  </p>

  <p>
    قالب بسيط ونظيف لمشاريع الـ **Back-End** باستخدام **Express.js**، **ES Modules**، و**Dotenv**.
  </p>

  <p>
    <code>#backend</code>
    <code>#nodejs</code>
    <code>#express</code>
    <code>#starter</code>
    <code>#template</code>
  </p>
</dev>
---

### نظرة عامة على المشروع 📝

هذا المشروع يمثل نقطة انطلاق مثالية لتطبيقات الـ **Back-End** المبنية على **Express.js**. يتميز بهيكله البسيط والمجهز للنمو، حيث يتبع أفضل الممارسات من حيث **تنظيم الكود** و**الأمان**، مما يجعله مناسبًا للمشاريع الصغيرة والمتوسطة.

### الميزات 🌟

* **هيكل مبسط:** جاهز للبدء فورًا.
* **إدارة البيئة:** استخدام `dotenv` لإدارة متغيرات البيئة.
* **أمان مدمج:** يتضمن **middlewares** أساسية للحماية مثل **Helmet**, **CORS**, و **Rate Limiting**.
* **ES Modules:** الكود مكتوب بـ `type: "module"` للحداثة والمرونة.

---

### 📂 هيكل المشروع
```
server(Node/Express)/
|── node_modules/
|── public/
|── src/
|    └── server.ts
|── .editorconfig
|── .env.example
|── .env
|── package.json
└── README.md
```

---

### ⚙️ تثبيت الحزم و تشغيل السيرفر <!-- التسبيت -->
```js
// 1- استنسخ المستودع إلى دليل مشاريعك:
git clone `https://github.com/Bomba004/testExpressSocket`

// 2- انتقل إلى مجلد التطبيقات:
cd testExpressSocket

// 3- افتحه في محرر الأكواد، ثم افتحه باستخدام الخادم المباشر:
code .

// 4- ثبّت التبعيات داخل مجلد المشروع:
yarn install && yarn start
// ⚡ أو إذا كنت تستخدم npm:
npm install && npm start
```

📝 ملف البيئة .env:

قم بإنشاء ملف .env في جذر المشروع وأضف المتغيرات مثل:
```
PORT=4000
```

📜 الكود الأساسي (server.js)
```js
import 'dotenv/config';
import express from 'express';
express().listen(process.env.PORT ?? 3000, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT ?? 3000}`)
);
```

🔒 تحسينات أمان مقترحة

للاستخدام في الإنتاج يفضل إضافة بعض الـ middlewares:
```js
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet()); // حماية الـ headers
app.use(cors());   // تفعيل CORS بشكل صحيح
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // منع هجمات brute-force
```

---

## 📌 ملاحظات

- الكود الحالي مناسب للبدايات والمشاريع الصغيرة.

- للمشاريع الكبيرة، يُنصح بعمل بنية ملفات منظمة (app.js, routes, middlewares, config).

- يفضل إضافة logger مثل winston أو pino بدل console.log للإنتاج.

---


## Description 📝

<pre style="
  font-size:70%;
  font-weight:700;
  color: #fff;
  background-color: #393;
  padding: 0.5em;
  border-radius: 0.5em;
  box-shadow: inset 0 0 0.25em #fff;
  overflow: auto;
" dir="rtl">
</pre>

<!-- ## Author                            الإستخدام -->
<!-- [Hussein Abdo](https://bomba004.github.io/CV-Hussein/)
<a href="https://bomba004.github.io/CV-Hussein/" target="_blank">Hussein Abdo</a>
 -->

<!-- ## Usage 💻                         الإستخدام -->
<!-- ## Contributing 🤝                  المساهمة -->

## License ©️ <!-- الرخصة -->

The License ([BOMBA](https://bomba004.github.io/BomBa/))

Copyright (c) 2021 [Hussein Abdo](https://bomba004.github.io/CV-Hussein/)