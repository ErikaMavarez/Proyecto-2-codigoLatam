menuItems.forEach(function (item){
    item.addEventListener('click', function (e){
        const CurrentItem=document.querySelector('active');
        CurrentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

function Init () {
    let a= document.createElemtent("a");
    a.setAttribute("href", "https://erikamavarez.github.io/repomav/");
    let atexto= document.createTextNode("github");
    a.appenchild (atexto);
    document.body.appenchild(a);
}
    github.onload= init;
    
    
    function openImg() {
        let image= document.getElementById('image');
        let source= image.src;
    }
    
    function openImg() {
        let image1= document.getElementById('image1');
        let source= image1.src;
    }
   
   
    
    
 const $form= document.querySelector('#form');
 
 const $buttonMailto= document.querySelector('#opcion');
 
 $form.addEventListener('submit', handleSubmit);
 
 function handleSubmit(event){
     event.preventDefault();
 
 const form= new formData(this);
 console.log(form.get('name'));
 $buttonMailto.setAttribute('href', `mailto: erinir2013@gmail.com?subject= ${form.get('name')} ${form.get('email')}&body= ${form.get('message')}`);
 $buttonMailto.click();
 
 }
 
 
 
