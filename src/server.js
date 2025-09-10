// src/server.js
import 'dotenv/config';
import path from 'path';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

// إعداد:
  const PORT = process.env.PORT ?? 3000;  // المنفذ
  const app = express();  // إنشاء تطبيق Express
  app.use(express.json());  // لدعم JSON في الطلبات
  app.use(express.urlencoded({ extended: true }));  // خدمة الملفات الثابتة (مثل HTML, CSS, JS)
  // app.use(express.static(path.join(__dirname, '../public')));  // خدمة الملفات الثابتة (مثل HTML, CSS, JS)
  const server = http.createServer(app);  // إنشاء سيرفر HTTP عادي لربطه مع Socket.IO
  const io = new Server(server);  // تهيئة Socket.IO

// 🚩 Routing (مسارات HTTP)
  app.get('/', (req, res) => {
    res.send('Hello World! 🚀');
    // مستقبلاً ممكن تستخدم:
    // res.sendFile(path.join(__dirname, '../public/index.html'));
  });


// 🚩 Socket.IO Events
  io.on('connection', (socket) => {
    console.log('🔥 WebSocket connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('❌ WebSocket disconnected:', socket.id);
    });
  });

// 🚩 تشغيل السيرفر
  server.listen(PORT, () =>
    console.log(`✅ Server running on http://localhost:${PORT}`)
  );
