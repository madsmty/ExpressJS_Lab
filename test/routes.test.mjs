// test/routes.test.js
import {expect} from 'chai';
import request from 'supertest';
import express from 'express';
import indexRouter from '../routes/index.js';
import userRouter from '../routes/users.js';
import shipmentRouter from '../routes/shipments.js';

describe('Express App', () => {
  const app = express();
  app.set('view engine', 'jade');
  app.use('/', indexRouter);
  app.use('/users', userRouter);
  app.use('/shipments', shipmentRouter);

  it('GET localhost/ should respond with a greeting message', async () => {
    const response = await request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.contain('Welcome to Express');
  });

  it('GET localhost/users should respond with a 200', async () => {
    const response = await request(app).get('/users');
    expect(response.status).to.equal(200);
  });

  it('GET localhost/shipments should respond with a 200', async () => {
    const response = await request(app).get('/shipments');
    expect(response.status).to.equal(200);
  });
  
});

