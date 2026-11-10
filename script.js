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

        // img.classList.add("box")
        // img.classList.remove("box")
        img.classList.toggle("box")        
        img.classList.toggle("box")