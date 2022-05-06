import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('Should run the testsuite', ()=>{

});

test ('render app succesfully in test', ()=>{
    //assemble
    render (
    <Router>
        <App />
    </Router>
    );
    
})

// test ('addContact function should add new Contact to Contacts array using setState', ()=>{
//     //assemble
//     render (
//         <Router>
//             <App />
//         </Router>
//         );
    
//         const newContact = {
//             name: 'Michiel',
//             phone: 'prive',
//             email: 'zegikniet@email.com'
//           }

//         const expectedResult = [{
//             name: 'Michiel',
//             phone: 'prive',
//             email: 'zegikniet@email.com'
//           }]
//           //act
          
         
// })