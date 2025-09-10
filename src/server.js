import 'dotenv/config';
import express from 'express';

express().listen(process.env.PORT ?? 3000, () =>
  console.log(`✅ Server running on http://localhost:${process.env.PORT ?? 3000}`)
);
