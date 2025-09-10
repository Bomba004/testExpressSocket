<div dir="rtl">

  <h1 dir="ltr">🚀 Express Starter Project</h1>

  <p align="center">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
    <img src="https://img.shields.io/badge/Node.js-%23404d59.svg?style=for-the-badge&logo=node.js&logoColor=%2361DAFB" alt="Node.js" />
  </p>
  <p align="center">
    قالب بسيط ونظيف لمشاريع <b>Back-End</b> باستخدام <b>Express.js</b>، <b>ES Modules</b>، و<b>Dotenv</b>.
  </p>
  <p align="center">
    <code>#backend</code>
    <code>#nodejs</code>
    <code>#express</code>
    <code>#starter</code>
    <code>#template</code>
  </p>

  <hr />

  <h3>📝 نظرة عامة على المشروع</h3>
  <p>
    هذا المشروع يمثل نقطة انطلاق مثالية لتطبيقات الـ <b>Back-End</b> المبنية على <b>Express.js</b>.
    يتميز بهيكله البسيط والمجهز للنمو، حيث يتبع أفضل الممارسات من حيث <b>تنظيم الكود</b> و<b>الأمان</b>،
    مما يجعله مناسبًا للمشاريع الصغيرة والمتوسطة.
  </p>

  <h3>🌟 الميزات</h3>
  <ul>
    <li><b>هيكل مبسط:</b> جاهز للبدء فورًا.</li>
    <li><b>إدارة البيئة:</b> استخدام <code>dotenv</code> لإدارة متغيرات البيئة.</li>
    <li><b>أمان مدمج:</b> يتضمن <b>middlewares</b> أساسية للحماية مثل <b>Helmet</b>, <b>CORS</b>, و <b>Rate Limiting</b>.</li>
    <li><b>ES Modules:</b> الكود مكتوب بـ <code>type: "module"</code> للحداثة والمرونة.</li>
  </ul>

  <hr />

  <h3>📂 هيكل المشروع</h3>
  <pre align="left">
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
  </pre>

  <hr />

  <h3>⚙️ تثبيت الحزم و تشغيل السيرفر</h3>
<pre align="left">
// 1- استنسخ المستودع إلى دليل مشاريعك:
git clone https://github.com/Bomba004/testExpressSocket

// 2- انتقل إلى مجلد التطبيقات:
cd testExpressSocket

// 3- افتحه في محرر الأكواد:
code .

// 4- ثبّت التبعيات وشغّل السيرفر:
yarn install && yarn start
// ⚡ أو إذا كنت تستخدم npm:
npm install && npm start
  </pre>

  <h3>📝 ملف البيئة .env</h3>
  <pre align="left">
PORT=4000
  </pre>

  <h3>📜 الكود الأساسي (server.js)</h3>
  <pre align="left">
import 'dotenv/config';
import express from 'express';

express().listen(process.env.PORT ?? 3000, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT ?? 3000}`)
);
  </pre>

  <h3>🔒 تحسينات أمان مقترحة</h3>
  <pre align="left">
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet()); // حماية الـ headers
app.use(cors());   // تفعيل CORS بشكل صحيح
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // منع هجمات brute-force
  </pre>

  <hr />

  <h3>📌 ملاحظات</h3>
  <ul>
    <li>الكود الحالي مناسب للبدايات والمشاريع الصغيرة.</li>
    <li>للمشاريع الكبيرة، يُنصح بعمل بنية ملفات منظمة (<code>app.js</code>, <code>routes</code>, <code>middlewares</code>, <code>config</code>).</li>
    <li>يفضل إضافة <b>logger</b> مثل <code>winston</code> أو <code>pino</code> بدل <code>console.log</code> للإنتاج.</li>
  </ul>

  <br />
  <hr />

  <h3 align="left">📄 License</h3>
  <p align="left">
    The License (<a href="https://bomba004.github.io/BomBa/" target="_blank">BOMBA</a>)<br />
    Copyright (c) 2021 
    <a href="https://bomba004.github.io/CV-Hussein/" target="_blank">Hussein Abdo</a>
  </p>

</div>
