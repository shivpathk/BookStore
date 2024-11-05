import express from 'express'
import usersignup from '../Controllers/usersignup.js';
import books from '../Controllers/books.js';
import userlogin from '../Controllers/userlogin.js';
import userprofile from '../Controllers/userprofile.js';
import deleteprofile from '../Controllers/deleteprofile.js';
import editprofile from '../Controllers/editprofile.js';
import deleteBook from '../Controllers/deleteBook.js';
import editBook from '../Controllers/editBook.js';
import addBook from '../Controllers/addBook.js';
import getBook from '../Controllers/getBook.js';

const router = express.Router();

router.post('/user/signup',usersignup)
router.post('/user/login',userlogin)
router.get('/user/profile/:id',userprofile)
router.delete('/user/profile/:id',deleteprofile)
router.put('/user/profile/:id',editprofile)

router.get('/books',books)
router.post('/book',addBook)
router.get('/book/:id',getBook)
router.put('/book/:id',editBook)
router.delete('/book/:id',deleteBook)

export default router