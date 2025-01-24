document.addEventListener("DOMContentLoaded", function(){
        
    let elInput = document.querySelector('.post');
    let elSubmit = document.querySelector('.submitPost');
    let message = document.querySelector('.message');

    // 1.
    let value = '';

    function eventInput(event) {
        
       
    }

    elInput.addEventListener('input', eventInput);

    // 2.
    function onClick(event) {
        const numberOfPosts = parseInt(elInput.value);

        const posts = [];
        for (let i = 1; i <= numberOfPosts; i++) {

            fetchPosts(i).then((value) => posts.push(value.title))
            
        }

        message.innerHTML = '';
        const liste = document.createElement('ul');
       
        console.log(posts)
        
        
        posts.forEach((element) => {
          const item = document.createElement('li');
          item.textContent = element; 
          liste.appendChild(item); 
        })

        message.appendChild(liste);

      
    }

    elSubmit.addEventListener('click', onClick);


    async function fetchPosts(number) {
        const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`);
        const list = await url.json();
        return list
    }


})