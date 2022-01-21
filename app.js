
const fivver_order = document.querySelector('#fivver_order');
const counter = document.querySelector('.counter');



fivver_order.addEventListener('submit',function(e){
    e.preventDefault();

   let date = this.querySelector('input[type="date"]').value;
   let time = this.querySelector('input[type="time"]').value;

  setInterval(function(){

    
  let start_time = new Date();
  let end_time = new Date(date + ' ' + time);

  let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));


  let total_sec = Math.floor(time_diff/1000);
  let total_min = Math.floor(total_sec/60);
  let total_hours = Math.floor(total_min/60);
  let total_day = Math.floor(total_hours/24);



  let hours = total_hours - (total_day*24);
  let min   = total_min - (total_day*24*60) - (hours*60);
  let sec = total_sec - (total_day*24*60*60) - (hours*60*60);


  counter.innerHTML = `${total_day} : ${hours} : ${min} : ${sec}`



  }, 1000);

  


});








// <======================== to do app===============================>


const todo_app = document.querySelector('#todo_app');
const list = document.querySelector('#list');


todo_app.addEventListener('submit',function(e){

  e.preventDefault();


  


  let do_name = this.querySelector('input[name="do_name"]').value;
  let opt = this.querySelector('select[name="opt"]').value;


  if(do_name == '' || opt == ''){

    alert('all fields are required');





  }else{

    let li = document.createElement('li');
    li.className = 'list-group-item';

  let closebtn = document.createElement('button');
  closebtn.innerHTML = `&times;`;
  closebtn.className = 'close';



  let dotext = document.createTextNode(do_name);








  li.appendChild(closebtn);
  li.insertBefore(dotext , closebtn);
  list.appendChild(li);


  this.querySelector('input[name="do_name"]').value = '';


     closebtn.addEventListener('click',function(){

      this.parentElement.remove();








     })




  }

  




});





//<===================== product price==============================>

const buttonid = document.querySelector('#buttonid');
const product_box = document.querySelector('.product_box');
const sess = document.querySelector('#sess');



buttonid.addEventListener('click',function(){
 

  product_box.style.display = 'block';
});


sess.addEventListener('click',function(){

  product_box.style.display = 'none';







});






//<======================= product-tshirt===========================>

 const plist = document.querySelector('#plist');



const products = [
  {

    Sku : 11,
    name : 't-shirt item 1',
    Regular_price : 250,
    sale_price : 200,
    photo : 'images (1).jfif'

  },
  {

    Sku : 22,
    name : 't-shirt item 2',
    Regular_price : 230,
    sale_price : 200,
    photo : 'images.jfif'
    
  },
  {

    Sku : 33,
    name : 't-shirt item 3',
    Regular_price : 250,
    sale_price : 200,
    photo : 'images (1).jfif'
    
  },
  {

    Sku :44,
    name : 't-shirt item 4',
    Regular_price : 250,
    sale_price : 200,
    photo : 'images.jfif'
    
  },



];




let allProducts = JSON.stringify(products);
localStorage.setItem('products',allProducts);



let pri = localStorage.getItem('products');
let ans = JSON.parse(pri);



ans.map(data =>{



 plist.innerHTML += `


 <div class="col-lg-3">
 <div class="card shadow productcard">
     <div class="card-header">
         <h3>${data.name}</h3>
     </div>
     <div class="card-body">
         <img src="${data.photo}" alt="something is wrong">
         <h2>T-shirt product</h2>
         <p>Regular price <span>$250</span> ${data.sale_price} </p>
         <button class="btn btn-primary">Add to cart</button>
        
     </div>
 </div>
</div>
 
 
 
 
 
 
 `


    




});










          // <==================Team - member=====================>


          const teambox = document.querySelector('#teambox');



          const   team = [
            {
              id       : 01,
              nameof     : 'Jon Doe',
              Skill    : 'Mearn-stack',
              location : 'Hajigong',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet.</p>'
            },
            {
              id       : 02,
              nameof     : 'Json',
              Skill    : 'Wordpress Developer',
              location : 'Canada',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet.</p>'
            },
            {
              id       : 03,
              nameof     : 'Smith srey',
              Skill    : 'Laravel Developer',
              location : 'London',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet.</p>'
            },
            {
              id       : 04,
              nameof     : 'Sreya ',
              Skill    : 'Django',
              location : 'America',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet.</p>'
            },
            {
              id       : 05,
              nameof     : 'Dipti san',
              Skill    : 'Python',
              location : 'Qatar',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet.</p>'
            },
            {
              id       : 06,
              nameof     : 'Maliha sahi',
              Skill    : 'GoLang',
              location : 'Canada',
              image    : 'Team-memeber-5.png',
              Address  : '<p>Lorem, ipsum dolor sit amet. </p>'
            },
          ];



          let teamMember = JSON.stringify( team);
          localStorage.setItem('Team-Member',teamMember);



          let teamget =  localStorage.getItem('Team-Member');
          let teamint = JSON.parse(teamget);


          teamint.map(data => {


            teambox.innerHTML += `   <div class="col-lg-4">
            <div class="card amrcard">
                <div class="card-header">
                    <h2>Team member</h2>
                </div>
                <div class="card-body">
                     <h2>${data.id}</h2>
                    <img width="250px" src="${data.image}" alt="">
                    <h3>${data.nameof}</h3>
                    <h4>${data.Skill} </h4>
                    <p>${data.location}</p>
                   <p>${data.Address}</p>
                </div>
            </div>
        </div>`



          });







          //<=================== age-calculator=======================>



          const age_check = document.querySelector('#age_check');
          const age_counter = document.querySelector('.age_counter');

          age_check.addEventListener('submit',function(e){
            e.preventDefault();

            let agedate = this.querySelector('input[type="date"]').value;
            let agetime = this.querySelector('input[type="time"]').value;



          


              
            


            let start_agetime = new Date();
            let end_agetime = new Date(agedate + ' ' + agetime);

            let agetime_diff = Math.floor(Math.abs(end_agetime.getTime() - start_agetime.getTime()));


            let total_agesec = Math.floor(agetime_diff/1000);
            let total_agemin = Math.floor(total_agesec/60);
            let total_agehours = Math.floor(total_agemin /60);
            let total_ageday = Math.floor(total_agehours/24);
            let total_ageweak = Math.floor(total_ageday/7);
            let total_month = Math.floor(total_ageday/30);
            let total_year = Math.floor(total_month/12);




            
            let month = total_month - (total_year * 12 );
            let motDay = total_ageday - (total_year * 12 * 30) - (month * 30);
           







            age_counter.innerHTML = ` ${total_year}year : ${month} month : ${motDay} day <br>  ${total_ageweak}weak <br>  ${total_agehours} hours <br> ${total_agemin} minit <br> ${total_agesec} seceond`;

            






          















          })













