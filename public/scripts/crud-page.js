
document.querySelectorAll(".delete-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    let div = event.target.closest('div.container')
    let userID = div.querySelector('#username').innerText
    fetch('/user/' + userID, { method: 'DELETE' })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        event.target.closest('div.card').remove()
    })
  });
});


document.querySelectorAll(".update-btn").forEach((item) => {
    item.addEventListener('click', (event) => {
        let div = event.target.closest('div.container')
        let userID = div.querySelector('#username').innerText
        let firstName = div.querySelector('.firstName').value
        let lastName = div.querySelector('.lastName').value
        let email = div.querySelector('.email').value
        let password = div.querySelector('.password').value
        fetch('/user/' + userID, { 
            method: 'PATCH',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(json => {
            let msg = document.createElement('p');
            msg.innerText = "User Updated!"
            msg.style.color = 'blue'
            msg.style.textAlign = 'center'
            div.querySelector('.btn-container').after(msg)
            setTimeout(() => {
                msg.innerText = ''
            }, 2500)
        })      
    })  
})

document.querySelectorAll(".create-btn").forEach((item) => {
    item.addEventListener('click', (event) => {
        let div = event.target.closest('div.container')
        let userID = div.querySelector('.userID').value
        let firstName = div.querySelector('.firstName').value
        let lastName = div.querySelector('.lastName').value
        let email = div.querySelector('.email').value
        let password = div.querySelector('.password').value
        fetch('/User', { 
            method: 'POST',
            body: JSON.stringify({
                userID: userID,
                firstName,
                lastName,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => {
            if (json.message === 'invalid request') {
                let msg = document.createElement('p');
                msg.innerText = "Invalid Request!"
                msg.style.color = 'blue'
                msg.style.textAlign = 'center'
                div.querySelector('.btn-container').after(msg)
                setTimeout(() => {
                    msg.innerText = ''
                }, 2500)
            }
            else {
                location.reload()
            }
        })      
    })  
})