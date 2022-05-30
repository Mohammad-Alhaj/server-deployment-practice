'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server',()=>{

test('data from /',async ()=>{
 const res = await request.get('/');
 expect(res.status).toEqual(200);
 expect(res.text).toEqual('hello');

});
test('data from /data',async ()=>{
    const res = await request.get('/data');
    expect(res.status).toEqual(200);
    expect(typeof res.body).toEqual('object');

});
it('handle server internal errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
})

});