//classic way
// const bd = document.getElementById("bd")
// const allinp = document.getElementsByTagName('input')
// const ph = document.getElementsByClassName('ph')

// console.log(bd);
// console.log(allinp);
// console.log(ph)

//Modern Way
const bd = document.querySelector('#bd')
const img = document.querySelector('#img')
const ph = document.querySelectorAll('.ph')
const allInp = document.querySelectorAll('input')
console.log(bd);
console.log(ph)
console.log(allInp);

 //Modify Content or text content
console.log(bd.textContent);
console.log(bd.innerHTML);
console.log(bd.innerText);

 // bd.textContent = "Hi! Dhaka"
bd.innerHTML = "<h6>Hi! Bangladesh</h6>"
// bd.innerText = "Hi! Bangladesh"

 //Modify Content Attribute
// console.log(img.getAttribute("src"));
// img.setAttribute("src", "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg?w=1280&h=720&crop=1&resize=1024%2C576")
// img.removeAttribute("src")
// console.log(img.hasAttribute("alt"));
img.src = "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg?w=1280&h=720&crop=1&resize=1024%2C576"
img.alt = "This is image"

//style modify
// img.style.height = "500px"
// img.style.width = "800px"

img.classList.add("box")
// img.classList.remove("box")
// img.classList.toggle("box")       
// img.classList.toggle("box")


//Event Listener
const clickBtn = document.getElementById("click-btn");
console.log(clickBtn);

//document.addEventListener(evntTime, fn) syntax
clickBtn.addEventListener("mouseenter" , ()=> {
  // alert("btn-clicked");
  img.src = "https://img.magnific.com/free-photo/smiling-young-woman-holding-retro-camera_329181-142.jpg"
})

const myInp = document.getElementById("my-inp")

myInp.addEventListener("keypress" , (e)=>{
  console.log("input tiggered");
  // console.log(myInp.value);
  console.log(e.target);
  e.target.style.color = "red"
  // console.log(e.type);

  //local storage save
  const inputValue = e.target.value 
  localStorage.setItem("inputValue" , inputValue)
  document.getElementById("massage").innerText = `Input Value : ${inputValue}`
})

// console.log('Hello');

// console.log(location);
// console.log(history);
// console.log(innerWidth)

const reload = document.querySelector("#reload")

reload.addEventListener("click", ()=> {
  console.log("reload");
  location.reload()
})

//Browser stor
// localStorage.setItem("location" , "Noakhali")
// localStorage.setItem("age" , "25")
// sessionStorage.setItem("street" , "870")


const getLocationData = localStorage.getItem("location")
const getAgeDats = localStorage.getItem("age")
const getStreetDhaka = sessionStorage.getItem("street")

// console.log(getLocationData);
// console.log(getAgeDats);
// console.log(getStreetDhaka);

const myLocation = document.getElementById("location")
const age = document.getElementById("age")
const street = document.getElementById("street")

myLocation.innerText = `Location : ${getLocationData}`
age.innerText = `age : ${getAgeDats}`
street.innerText = `Street : ${getStreetDhaka}`

localStorage.removeItem("age")

const inputValue = localStorage.getItem("inputValue")
document.getElementById("massage").innerText = `Input Value : ${inputValue}`

//promise and fetch API
const promise = new Promise((resolve, reject) => {
  let success = false
  if(success){
    resolve("promise resolve successfully")
  } else{
    reject("promise rejected")
  }
})

// promise.then(result => {
//   console.log(result);
// }).catch(err=> {
//   console.log(err)
// })

const fetchUser = ()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err)
  });
};

fetchUser();