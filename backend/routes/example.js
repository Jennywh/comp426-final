import express from "express";
import axios from 'axios';

export const router = express.Router();
export const prefix = '/example';

router.get('/hello', function (req, res) {
  res.send({ message: "Hello from example!" })
});

const pubRoot = new axios.create({
  baseURL: "http://localhost:3000/account/create"
});

async function createAcocunt({ name = 'jenn', pass = 'password', data = '' }) {
  return await pubRoot.post(`/users/`, {
    name: '',
    pass: '',
    data: {
      "role": 2,
      "description": "Lazy..."
    }
  })
}

async function getAllAuthors() {
  return await pubRoot.get('/users');
}
