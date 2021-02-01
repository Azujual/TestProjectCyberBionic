let biblioteka = [
    {avtor: "Пушкин А.С.", kniga: "Лукоморье", janr: "Поэзия"},
    {avtor: "Бианки В.В.", kniga: "Кувырк", janr: "Рассказы"},
    {avtor: "Робертс Ч.Д.", kniga: "Рыжий Лис", janr: "Повесть"},
    {avtor: "Толстой Л.Н.", kniga: "Война и мир", janr: "Роман"}
];

let ishodniiSpisokAvtorov = [
  {id: "4f698c299add", familia: "Пушкин", imea: "Александр", otcestvo: "Сергеевич", datarojdenia: "06/06/1799", knigvbaze: "1" },
  {id: "80b1480184ba", familia: "Бианки", imea: "Виталий", otcestvo: "Валентинович", datarojdenia: "30/01/1894", knigvbaze: "1" },
  {id: "198565e8b4e2", familia: "Робертс", imea: "Чарльз", otcestvo: "Дуглас", datarojdenia: "10/01/1860", knigvbaze: "1" },
  {id: "895289418a29", familia: "Толстой", imea: "Лев", otcestvo: "Николаевич", datarojdenia: "09/09/1828", knigvbaze: "1" }
];

let ishodniiSpisokКnig = [
  {id: "6b39881fb3c9", nazvanie: "Лукоморье", kolicstranits: "150", janr: "Поэзия", avtor: "Пушкин А.С." },
  {id: "391ff94fbca5", nazvanie: "Кувырк", kolicstranits: "120", janr: "Рассказы", avtor: "Бианки В.В." },
  {id: "83803b73a052", nazvanie: "Рыжий Лис", kolicstranits: "130", janr: "Повесть", avtor: "Робертс Ч.Д." },
  {id: "2beaa1218cec", nazvanie: "Война и мир", kolicstranits: "140", janr: "Роман", avtor: "Толстой Л.Н." }
];

let ishodniiSpisokJanrov = [
  {id: "fcc6df92b3c3", janr: "Поэзия", kolcicknig: "1" },
  {id: "5421431fa7ce", janr: "Рассказы", kolcicknig: "1" },
  {id: "823c45edb7cc", janr: "Повесть", kolcicknig: "1"},
  {id: "7ec53065ba40", janr: "Роман", kolcicknig: "1" }
];

class Author {
  id;
  familia;
  imea;
  otcestvo;
  datarojdenia;
  knigvbaze;
  constructor(inFamilia, inImea, inOtcestvo, inDatarojdenia){
        this.id = this.uuidv4();
         this.familia=inFamilia;
         this.imea=inImea;
         this.otcestvo=inOtcestvo;
         this.datarojdenia=inDatarojdenia;
         this.knigvbaze = 0;
  }

  uuidv4() {
    return 'xxxxxxxxyxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

class Knigi {
  id;
  nazvanie;
  kolicstranits;
  janr;
  avtor;
  constructor(inNazvanie, inKolicstranits, inJanr, inAvtor){
    this.id = this.uuidv4();
    this.nazvanie=inNazvanie;
         this.kolicstranits=inKolicstranits;
         this.janr=inJanr;
         this.avtor=inAvtor;
  }
  uuidv4() {
    return 'xxxxxxxxyxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

class Janr {
  id;
  janr;
  kolcicknig;
  constructor(inJanr, inKolcicknig) {
    this.id = this.uuidv4();
    this.janr = inJanr;
    this.kolcicknig = inKolcicknig;
  }
  uuidv4() {
    return 'xxxxxxxxyxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}





let current;
let resultParse;
let currentAuth;
let resultParseAuth;
let currentBook;
let resultParseBook;
let currentJanr;
let resultParseJanr;
let arrayJanr = [];
let janrvalue;
let imeaavtoralue;
let familiaavtoralue;
let otcestvoavtoralue;
let datarojavtoralue;
let arrayAvtor = [];
let nazvanieknigivalue;
let arrayBook = [];
let countpagesvalue;
let selectjanrbook;
let inputAuthorValue;

let linki = `<td><a onclick="editData(this.parentNode.parentNode.id)" class="" aria-current="page" href="#">Редактировать</a>
<a onclick="removeData(this.parentNode.parentNode.id)" class="" aria-current="page" href="#">Удалить</a></td>
</tr>`;

let removeData = function(inputId) {
  let targetId = inputId;
  if (document.getElementById('authors').classList.length == 2) {
    removeDataAuthor(targetId);
    displayAvtors();
  } else if (document.getElementById('geners').classList.length == 2) {
    removeDataGener(targetId);
    displayJanr();
  } else if (document.getElementById('books').classList.length == 2) {
    removeDataBook(targetId);
    displayBooks();
  }
}

let removeDataAuthor = function(inputId) {
  for (let i = 0; i<resultParseAuth.length; i++){
   if (resultParseAuth[i].id == inputId) {
     resultParseAuth.splice(i,1);
     localStorage.setItem('currentAuthList',JSON.stringify(resultParseAuth));
   }
  }
  
}

let removeDataGener = function(inputId) {
  for (let i = 0; i<resultParseJanr.length; i++){
   if (resultParseJanr[i].id == inputId) {
    resultParseJanr.splice(i,1);
     localStorage.setItem('currentJanrList',JSON.stringify(resultParseJanr));
   }
  }
  
}

let removeDataBook = function(inputId) {
  for (let i = 0; i<resultParseBook.length; i++){
   if (resultParseBook[i].id == inputId) {
    resultParseBook.splice(i,1);
     localStorage.setItem('currentBookList',JSON.stringify(resultParseBook));
   }
  }
  
}

let prepend = `<table class="table">
 <thead>
   <tr>
     <th scope="col">Автор</th>
     <th scope="col">Книга</th>
     <th scope="col">Жанр</th>
     <th></th>
   </tr>
 </thead>
 <tbody>`;

 let prependAuth = `
 <table class="table">
    <thead>
      <tr>
        <th scope="col">Фамилия</th>
        <th scope="col">Имя</th>
        <th scope="col">Отчество</th>
        <th scope="col">Дата рождения</th>
        <th scope="col">Книг в базе</th>
      </tr>
    </thead>
    <tbody>
 `;

 let prependBook = `
 <table class="table">
    <thead>
      <tr>
        
        <th scope="col">Название</th>
        <th scope="col">Кол-во стр</th>
        <th scope="col">Жанр</th>
        <th scope="col">Автор</th>
      </tr>
    </thead>
    <tbody>
 `;

 let prependJanr = `
 <table class="table">
    <thead>
      <tr>
        <th scope="col">Жанр</th>
        <th scope="col">Кол-во книг</th>
      </tr>
    </thead>
    <tbody>
 `;

 let buttonAddAuth =`<button onclick="displayFormAuth()" class="btn btn-primary" type="button" id="button-addon2">Добавить автора</button>`;

 let buttonAddBook =`<button onclick="displayFormBook()" class="btn btn-primary" type="button" id="button-addon2">Добавить книгу</button>`;

 let buttonAddJanr =`<button onclick="displayFormJanr()" class="btn btn-primary" type="button" id="button-addon2">Добавить жанр</button>`;

let editData = function(inputId) {
  let targetId = inputId;
  if (document.getElementById('authors').classList.length == 2) {
    editDataAuthor(targetId);
  } else if (document.getElementById('geners').classList.length == 2) {
    editDataJanr(targetId);
  } else if (document.getElementById('books').classList.length == 2) {
    editDataBook(targetId);
  }

}

let editDataAuthor = function(inputId) {
  let editResultParseAuth;

  for (let i = 0; i < resultParseAuth.length; i++) {
   if(resultParseAuth[i].id === inputId ){
     editResultParseAuth = resultParseAuth[i];
   }
  }
  let myform = `<form id="myFormAvtor" class="row mt-3">
   <div class="mb-3 col-sm-8">
     <label for="authName">Имя Автора*</label>
     <input type="text" class="form-control" id="authName" value="${editResultParseAuth.familia}" required>
     <input type="text" class="form-control" id="authLastName" value="${editResultParseAuth.imea}" required>
     <input type="text" class="form-control" id="authDadName" value="${editResultParseAuth.otcestvo}">
     <input type="data" class="form-control" id="authDataBirth" value="${editResultParseAuth.datarojdenia}" required>
     <input type="data" class="form-control" id="knigInBase" value="${editResultParseAuth.knigvbaze}" required>
     <button onclick="saveEditedAuthor(this.parentNode.parentNode.id);" type="submit" class="btn btn-success mb-3">Сохранить</button>
   </div>
 </form>`;
  document.getElementById(inputId).innerHTML = myform;
  // document.getElementById(inputId).innerHTML = `<td><input value="${editResultParseAuth.familia}"></td>
  //                                             <td><input value="${editResultParseAuth.imea}"></td>
  //                                             <td><input value="${editResultParseAuth.otcestvo}"></td>
  //                                             <td><input value="${editResultParseAuth.datarojdenia}"></td>
  //                                             <td><input value="${editResultParseAuth.knigvbaze}"></td>
  //                                             <td><a class="nav-link active " aria-current="page" href="#">Сохранить</a></td>`;
  authFormEvents();
  document.getElementById('knigInBase').onchange = function() {
    knigvbaze =  document.getElementById('knigInBase').value;
    console.log ('Knigi v base izmeneni: ' + knigvbaze);
  }
}

let knigvbaze;

let saveEditedAuthor = function(targetId) {
  console.log('target ID: ' + targetId);
  console.log('save Author was clicked');
  let targetIndex;

  for (let i = 0; i < resultParseAuth.length; i++) {
   if(resultParseAuth[i].id === targetId ){
    targetIndex = i;
    console.log('Target Index: ' + i);
   }
  }

  
  resultParseAuth[targetIndex].familia = imeaavtoralue;
  resultParseAuth[targetIndex].imea = familiaavtoralue;
  resultParseAuth[targetIndex].otcestvo = otcestvoavtoralue;
  resultParseAuth[targetIndex].datarojdenia = datarojavtoralue;
  resultParseAuth[targetIndex].knigvbaze = knigvbaze;

  resultParseAuth[targetIndex];
  localStorage.setItem('currentAuthList', JSON.stringify(resultParseAuth));
  displayAvtors();
}

let editedCount;

let editDataJanr = function(inputId) {
  console.log(inputId);
  let editResultParseJanr;

  for (let i = 0; i < resultParseJanr.length; i++) {
   if(resultParseJanr[i].id === inputId ){
    editResultParseJanr = resultParseJanr[i];
   }
  }
  let myform = `<form id="myEditJanrForm" class="row g-3">
      <div class="mb-3"> 
        <input type="text" class="form-control" id="editJanr" value="${editResultParseJanr.janr}" required>
        <input type="text" class="form-control" id="editCount" value="${editResultParseJanr.kolcicknig}" disabled>
      </div>
      <div class="col-auto">
        <button id="saveEditedJanr" type="submit" class="btn btn-success mb-3" onclick="saveUpdatedJanr(this.parentNode.parentNode.id);">Сохранить</button>
      </div>
    </form>`;
  document.getElementById(inputId).innerHTML = myform;

  document.getElementById('editJanr').onchange = function() {
    janrvalue = document.getElementById('editJanr').value;
    editedCount = document.getElementById('editCount').value;
    console.log ("Janr was edited +++: " + janrvalue);
  }

}

let saveUpdatedJanr = function(targetId) {
  console.log('target ID: ' + targetId);
  console.log('save was clicked');
  let targetIndex;

  for (let i = 0; i < resultParseJanr.length; i++) {
   if(resultParseJanr[i].id === targetId ){
    targetIndex = i;
    console.log('Target Index: ' + i);
   }
  }
  resultParseJanr[targetIndex].janr = janrvalue;

  localStorage.setItem('currentJanrList', JSON.stringify(resultParseJanr));
  displayJanr();
}

let editDataBook = function(inputId) {
  let editResultParseBook;
  for (let i = 0; i < resultParseBook.length; i++) {
    if(resultParseBook[i].id === inputId ){
      editResultParseBook = resultParseBook[i];
    }
  }
  document.getElementById(inputId).innerHTML = `<form id="myFormBook" class="row g-3">
      <div class="mb-3">
        <input type="text" class="form-control" id="nameBook" value="${editResultParseBook.nazvanie}" required>
        <input type="number" class="form-control" id="countpages" value="${editResultParseBook.kolicstranits}" required>
        <select  id="selectJanr" class="form-select" aria-label="Default select example">
          <option selected>Выберите жанр</option> ${selectFokrmBook()} </select>
        <input type="text" class="form-control" id="author" value="${editResultParseBook.avtor}">
      </div>
      <div class="col-auto">
        <button onclick="saveEditedBook(this.parentNode.parentNode.id);" type="submit" class="btn btn-success mb-3">Сохранить</button>
      </div>
    </form>`;
  bookFormEvents();
}

let saveEditedBook = function(targetId) {
  console.log('target ID: ' + targetId);
  console.log("Save book was clicked!");
  let targetIndex;

  for (let i = 0; i < resultParseBook.length; i++) {
   if(resultParseBook[i].id === targetId ){
    targetIndex = i;
    console.log('Target Index: ' + i);
   }
  }
  //nazvanieknigivalue,countpagesvalue,selectjanrbook,inputAuthorValue
//nazvanie: "Лукоморье", kolicstranits: "150", janr: "Поэзия", avtor: "Пушкин А.С."
  resultParseBook[targetIndex].nazvanie = nazvanieknigivalue;
  resultParseBook[targetIndex].kolicstranits = countpagesvalue;
  resultParseBook[targetIndex].janr = selectjanrbook;
  resultParseBook[targetIndex].avtor = inputAuthorValue;

  localStorage.setItem('currentBookList', JSON.stringify(resultParseBook));
  displayBooks();
}

 let displayFormAuth = function() {
   let formresult ="";
   let myform = `<form id="myFormAvtor" class="row mt-3">
   <div class="mb-3 col-sm-8">
     <label for="authName">Имя Автора*</label>
     <input type="text" class="form-control" id="authName" placeholder="Имя автора" required> <br>
     <input type="text" class="form-control" id="authLastName" placeholder="Фамилия автора" required><br>
     <input type="text" class="form-control" id="authDadName" placeholder="Отчество автора"><br>
     <input type="data" class="form-control" id="authDataBirth" placeholder="Дата рождения автора" required><br>
     <button onclick="saveFormAuth();" type="submit" class="btn btn-success mb-3">Сохранить</button>
   </div>
 </form>`;
  document.getElementById('localdiv').innerHTML = formresult + myform;
  authFormEvents();
 };

let authFormEvents = function() {
  document.getElementById('authName').onchange = function() {
    imeaavtoralue =  document.getElementById('authName').value;
    console.log (imeaavtoralue);
  }
  document.getElementById('authLastName').onchange = function() {
    familiaavtoralue =  document.getElementById('authLastName').value;
    console.log (familiaavtoralue);
  }
  document.getElementById('authDadName').onchange = function() {
    otcestvoavtoralue =  document.getElementById('authDadName').value;
    console.log (otcestvoavtoralue);
  }
  document.getElementById('authDataBirth').onchange = function() {
    datarojavtoralue =  document.getElementById('authDataBirth').value;
    console.log (datarojavtoralue);
  }

  
}

let saveFormAuth = function() {
  document.getElementById("myFormAvtor").onsubmit = function (e) {
    let authObject = new Author(imeaavtoralue,familiaavtoralue,otcestvoavtoralue,datarojavtoralue);
    resultParseAuth.push(authObject);
    localStorage.setItem('currentAuthList', JSON.stringify(resultParseAuth));
    displayAvtors();
  }
  
}

let selectFokrmBook = function(){
  return arrayJanr.map(item => `<option value="${item}">${item}</option>`).join('');
}

 let displayFormBook = function() {
  let myform = `<form id="myFormBook" class="row g-3">
  <div class="mb-3"> 
    <input type="text" class="form-control" id="nameBook" placeholder="Введите название книги" required> <br>
    <input type="number" class="form-control" id="countpages" placeholder="Введите количество страниц" required><br>
    <select  id="selectJanr" class="form-select" aria-label="Default select example">
            <option selected>Выберите жанр</option> ${selectFokrmBook()} </select>
    <input type="text" class="form-control" id="author" placeholder="Введите Автора" required><br>
  </div>
  <div class="col-auto">
      <button onclick="saveFormBook()" type="submit" class="btn btn-success mb-3">Сохранить</button>
  </div>
  </form>`;

  document.getElementById('localdiv').innerHTML = myform;
  bookFormEvents();
 };

 let bookFormEvents = function() { 
  document.getElementById('nameBook').onchange = function() {
    nazvanieknigivalue =  document.getElementById('nameBook').value;
    console.log (nazvanieknigivalue); }

  document.getElementById('countpages').onchange = function() {
    countpagesvalue =  document.getElementById('countpages').value;
    console.log (countpagesvalue);
  }

  document.getElementById('selectJanr').onchange = function() {
    selectjanrbook =  document.getElementById('selectJanr').value;
    console.log (selectjanrbook);
  }

  document.getElementById('author').onchange = function() {
    inputAuthorValue =  document.getElementById('author').value;
    console.log (inputAuthorValue);
  }

  document.getElementById("myFormBook").onsubmit = function (e) {
    let knigiObject = new Knigi(nazvanieknigivalue,countpagesvalue,selectjanrbook,inputAuthorValue);
    console.log('Новый объет: ' + JSON.stringify(knigiObject));
    resultParseBook.push(knigiObject);
    localStorage.setItem('currentBookList', JSON.stringify(resultParseBook));
    currentBook = localStorage.getItem('currentBookList');
    // displayBooks();
  }
}

let saveFormBook = function() {
  console.log('saveFormClick');
  // document.getElementById("myFormBook").onsubmit = function (e) {
  //   let knigiObject = new Knigi(nazvanieknigivalue,countpagesvalue,selectjanrbook,inputAuthorValue);
  //   console.log('Новый объет: ' + JSON.stringify(knigiObject));
  //   resultParseBook.push(knigiObject);
  //   localStorage.setItem('currentBookList', JSON.stringify(resultParseBook));
  //   currentBook = localStorage.getItem('currentBookList');
  //   // displayBooks();
  // }
  
}

let displayFormJanr = function() {
  let myform = `<form id="myForm" class="row g-3">
      <div class="mb-3"> 
        <input type="text" class="form-control" id="inputjanr" placeholder="Введите новый жанр" required> <br>
      </div>
      <div class="col-auto">
        <button id="buttonjanr" type="submit" class="btn btn-success mb-3">Сохранить</button>
      </div>
    </form>`;
  document.getElementById('localdiv').innerHTML = myform;
  saveFormJanr();
};

let saveFormJanr = function() {
  document.getElementById('inputjanr').onchange = function() {
    janrvalue =  document.getElementById('inputjanr').value;
    console.log ("vveli novii janr");
  }

  document.getElementById("myForm").onsubmit = function (e) {
      let janrObject = new Janr(janrvalue, 0);
      resultParseJanr.push(janrObject);
      localStorage.setItem("currentJanrList",JSON.stringify(resultParseJanr));
      displayJanr();
  }
}

let outputObject = function() {
    let resultAvtor = "";
    for ( let i = 0; i < resultParse.length; i++ ) {
        resultAvtor = resultAvtor + "<tr><td>" +  resultParse[i].avtor + "</td><td>" + resultParse[i].kniga + " </td><td>" + resultParse[i].janr +"</td>";
    }
    return prepend + resultAvtor + "</tbody> </table>" ;   
}

let displayAvtors = function() {
  document.getElementById('authors').classList.add('link-danger');
  document.getElementById('geners').classList.remove('link-danger');
  document.getElementById('books').classList.remove('link-danger');

  let resultAvtor = "";    
    for ( let i = 0; i < resultParseAuth.length; i++ ) {
        resultAvtor = resultAvtor + "<tr id='" + resultParseAuth[i].id + "'><td>" +  resultParseAuth[i].familia + "</td><td>" + 
                                                  resultParseAuth[i].imea + "</td><td>" + 
                                                  resultParseAuth[i].otcestvo + "</td><td>" + 
                                                  resultParseAuth[i].datarojdenia + "</td><td>" +
                                                  resultParseAuth[i].knigvbaze + "</td><td>" + 
                                                  linki;
    }
    document.getElementById('localspan').innerHTML = prependAuth + resultAvtor + "</tbody> </table>";
    document.getElementById('localdiv').innerHTML = buttonAddAuth;
};

let displayBooks = function() {
  document.getElementById('authors').classList.remove('link-danger');
  document.getElementById('geners').classList.remove('link-danger');
  document.getElementById('books').classList.add('link-danger');

  let resultBook = "";   
    for ( let i = 0; i < resultParseBook.length; i++ ) {
      resultBook = resultBook + `<tr id="${resultParseBook[i].id}"><td>  ${resultParseBook[i].nazvanie}</td><td> 
                                                ${resultParseBook[i].kolicstranits}</td><td> 
                                                ${resultParseBook[i].janr}</td><td>
                                                ${resultParseBook[i].avtor}</td><td>
                                                ${linki}`;
  }
  document.getElementById('localspan').innerHTML = prependBook + resultBook + "</tbody> </table>";
  document.getElementById('localdiv').innerHTML = buttonAddBook;
};

let displayJanr = function() {
  document.getElementById('authors').classList.remove('link-danger');
  document.getElementById('geners').classList.add('link-danger');
  document.getElementById('books').classList.remove('link-danger');
  let resultJanr = "";   
  
  for ( let i = 0; i < resultParseJanr.length; i++ ) {
    resultJanr = resultJanr + `<tr id="${resultParseJanr[i].id}"><td>${resultParseJanr[i].janr}</td><td> 
                                                ${resultParseJanr[i].kolcicknig}</td><td> 
                                                ${linki}`;
  }
  document.getElementById('localspan').innerHTML = prependJanr + resultJanr + "</tbody> </table>";
  document.getElementById('localdiv').innerHTML = buttonAddJanr;
};

let onSearch = function() {
  let keyWord = document.getElementById('searchWord').value.toLowerCase();
  console.log(keyWord);
  let keyWordArray =[];
  for (let i = 0; i < resultParseBook.length; i++) {
    if (resultParseBook[i].nazvanie.toLowerCase() == keyWord) {
      keyWordArray.push(resultParseBook[i]);
    }
  }
  console.log(keyWordArray);
  let resultBook = "";   
    for ( let i = 0; i < keyWordArray.length; i++ ) {
      resultBook = resultBook + `<tr id="${keyWordArray[i].id}"><td>  ${keyWordArray[i].nazvanie}</td><td> 
                                                ${keyWordArray[i].kolicstranits}</td><td> 
                                                ${keyWordArray[i].janr}</td><td>
                                                ${keyWordArray[i].avtor}</td><td>
                                               `;
  }
  document.getElementById('localspan').innerHTML = prependBook + resultBook + "</tbody> </table>";
}


window.onload = function () {
    localStorage.setItem("initBase",JSON.stringify(biblioteka));
    current = localStorage.getItem('initBase');
    
    if(localStorage.getItem('currentAuthList') != null){
      currentAuth = localStorage.getItem('currentAuthList');
      console.log('asadasdas');
    } else {
      localStorage.setItem("initAuthList",JSON.stringify(ishodniiSpisokAvtorov));
      currentAuth = localStorage.getItem('initAuthList');
    }

    if (localStorage.getItem('currentBookList') != null) {
      currentBook = localStorage.getItem('currentBookList');
    } else {
      localStorage.setItem("initBooksList",JSON.stringify(ishodniiSpisokКnig));
      currentBook = localStorage.getItem('initBooksList');
   }

    if (localStorage.getItem('currentJanrList') != null){
      currentJanr = localStorage.getItem('currentJanrList');
    } else {
      localStorage.setItem("initJanrList",JSON.stringify(ishodniiSpisokJanrov));
      currentJanr = localStorage.getItem('initJanrList');
    }
    

    
    resultParse = JSON.parse(current);
    resultParseAuth = JSON.parse(currentAuth);
    resultParseBook = JSON.parse(currentBook);
    resultParseJanr = JSON.parse(currentJanr);

    for ( let i = 0; i < resultParseJanr.length; i++ ) {
      arrayJanr.push(resultParseJanr[i].janr);
    }
    

   
    
    
    document.getElementById('localspan').innerHTML = outputObject();
}
