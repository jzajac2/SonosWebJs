import './index.css';

import {getUsers, deleteUser} from './api/userApi';
//mport {getSayIt} from './api/baseApi';


// getSayIt().then(result => {
//   global.document.getElementById('sayItBtn').onclick();
//   console.log(result)
// })


/* function Get(callback,baseUrl,req) {
  var sayWhat = document.getElementById('sayitInputTb').value;
  var xobj = new XMLHttpRequest();
                // true parameter denotes asynchronous
  xobj.open('GET', baseUrl + "/" + req,true);
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // This marks that the response has been successfully retrieved from the server
          // Utilize callback
          callback(xobj.responseText);
        }
  };
  xobj.send(null);
  } */

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
