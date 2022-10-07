const loginCredencial = [
    {
        username: "a",
        password: 1
    },
    
    {
        username: "nasir2001",
        password: 123456789
    }
]

const btn = document.getElementById('mybtn')
const modal = document.getElementById('mymodal')
const span = document.getElementById('close')

btn.addEventListener('click',showModal)

span.addEventListener('click',closeModal)

function showModal(){
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
            for ( i=0; i<loginCredencial.length; i++){
            if(username==loginCredencial[i].username && password == loginCredencial[i].password){
                modal.style.display = 'block'
    
            }
                
        }
}


function closeModal( ) {
    modal.style.display = 'none'

}

// setTimeout(showModal,2000)







