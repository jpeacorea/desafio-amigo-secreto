let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, inserte un nombre');
        return;
    } else {
        amigos.push(amigo);

        let listaAmigos = document.getElementById('listaAmigos');
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
        
        document.getElementById('amigo').value = '';
        console.log(amigos);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos un amigo');
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = amigoSorteado;

        let listaAmigos = document.getElementById('listaAmigos');
        let items = listaAmigos.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === amigoSorteado) {
                items[i].style.color = 'red';
            } else {
                items[i].style.color = 'black';
            }
        }

        console.log(amigos);
    }
}