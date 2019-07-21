

import  Auth from './auth.js';
import {makeRequest} from './authHelpers.js';

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

let a = new Auth();

let b1 = document.getElementById("b1");
    b1.addEventListener("click",function(){
        a.login()
    });