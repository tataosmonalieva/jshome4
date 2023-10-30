// строка проверить строку на наличие . и после нее на com или ru 

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4  

// строка поменять букву каждого четного индекса на E можно решить через map

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале


// строка проверить строку на наличие . и после нее на com или ru
//function myFunction(str,res) {
    //if (str.includes('.')) {
      //return str.replace('.',res)
    //} else {
         // return `в строке нет точки`
       //}
 //}
//console.log(myFunction('Softech.','.ru'))
//console.log(myFunction('Softech','com'))

//function myFunction(a) {
 // if(a.length%2===0 && a.length>=4 && a.length<=8){
    //return `${a} четное`
 // }else{
   // return 'не меньше 4 и не больше 8'
  //}
//}
//console.log(myFunction('kunduz'))
//console.log(myFunction('aidin'))

//function myFunction(str) {
  //return str.map((item,idx)) => {
     //if (idx % 2 === 0) {

     //} else {
      //return item
     
 //}

//}

  //console.log(myFunction(['p','h','s','r','k','l']))

  //function myFunction(str1,str2) {
    //if(str1 === str2 && str1.trim() && str2.trim()) {
      //return 'welcome'
    //} else {
      //return'error'
   // }
  //}
  //console.log(myFunction('lorem ','lorem '))
  //console.log(myFunction('lorem'))




// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3] 
// ['lorem', 'ipsum', 'dolor'] => [1,2,3] 
// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']
// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR'] 

//let arr = ['lorem', 'ipsum', 'dolor', 'sit']
//console.log(arr.filter(item => item.length).map(item => item.length))

//function myFunction(arr) { 
  //return arr.map((el,idx) => idx + 1)
//}
//console.log(myFunction(['lorem','ipsum','dolor']))

//function myFunction(arr) {
  //return arr.map(el =>{
   // return el.includes('l','d')?el.charAt(0).toUpperCase()+el.slice(1):el
  //})

//}
//console.log(myFunction(['lorem','ipsum','dolor']))

 //let arr = ['lorem', 'ipsum','dolor']
 //console.log(arr.map(arr => arr.toUpperCase()))



 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet' 
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet' 
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet' 
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit'] 
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet'] 
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'] 
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// ['null', undefined, 0, false, true, ''] => [0, false, true]
// ['null', undefined, 0, false, true, ''] => [0, false, true, 'null', undefined, '']

 //let str =  ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] 
 //console.log(str.join('-'))

  //let str = ['lorem', 'ipsum','dolor','sit','amet'] 
 //console.log(str.join('/'))

 //let str =  ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] 
 //console.log(str.join(' '))

 //let arr =  ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
 //console.log(arr.filter((el,id) => id % 2))

//let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//console.log(arr.filter((el,id)=>id % 2 ===0))

//let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//let str2 = ['consectetur','adipiscing','elit']
//let str3 = str.concat(str2)
//console.log(str3)

//function myFunction(arr){
  
       //return arr.filter(el=>el!=='22')
   //}
   //console.log(myFunction([123,33,444,'22',55,66,77,88,99]))

   
   //function myFunction(arr,newStr){
         //return arr.filter(el=>el!=='22').concat(newStr)
     //}
     //console.log(myFunction([123,33,444,'22',55,66,77,88,99],[22]))

     //function myFunction(arr){
           //return arr.filter((el=>el!=='null'&&el!==undefined && el!==''))
       //}
       //console.log(myFunction(['null', undefined, 0, false, true, '']))

       //function myFunction(arr){
            // return arr.sort((el,sr)=>el-sr)
         //}
         //console.log(myFunction(['null', undefined, 0, false, true, '']))

// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// [null, undefined] => [null, undefined, null, undefined]
// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
         

       //function myFunction(arr,arr1){
         //return arr.concat(arr1)
  //}
      //console.log(myFunction([1123, 'qwe'],[1123, 'qwe'] ))


      //function myFunction(arr,arr1){
       // return arr.concat(arr1)
  //}
    //console.log(myFunction([null, undefined],[null, undefined] ))


    //function myFunction(arr){
     //return  arr.filter((item,idx)=>idx%2===0).join(' ')
 //}
    //console.log(myFunction(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))
         
    
        
    

 



