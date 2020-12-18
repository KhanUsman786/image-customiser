let img = document.getElementById('img');
let button = document.getElementById('button')

button.addEventListener('change',function(){
    if(this.files[0].type != 'image/jpeg' &&this.files[0].type != 'image/png' && this.files[0].type != 'image/gif'&&this.files[0].type != 'image/jpg'){
        alert('Please Upload a image with extension of jpeg, jpg, gif or png only')
    }else{
        img.style.display='block'
        img.src=URL.createObjectURL(this.files[0])
    }
})