
const btn = document.getElementById('search-btn');
btn.addEventListener('click', function () {
    const loadInput = document.getElementById('loadInput');
    const loadText = loadInput.value;
    loadInput.value = '';

    //previous result clean
    document.getElementById('error').textContent = '';
    document.getElementById('number-found').textContent = '';
    document.getElementById('search-result').textContent = '';

    // error-handel 
    if (loadText === '') {
        document.getElementById('not-found').textContent = '';
        const errorDiv = document.getElementById('error');
        // errorDiv.textContent = '';
        // console.log(120);
        errorDiv.innerHTML = ` <p class="text-center p-5 bg-danger rounded">Please, Type Book name First</p>`;

    }
    else {

        fetch(`https://openlibrary.org/search.json?q=${loadText} `)
            .then(response => response.json())
            .then(data => displayInput(data.docs));
    }
})


const displayInput = (docu) => {
    const cardInput = document.getElementById('search-result');
    cardInput.textContent = '';
    if (docu.length === 0) {
        const msg = document.getElementById('not-found');
        msg.innerHTML = ` <p>not found</p>`
    }
    else {
        document.getElementById('not-found').textContent = '';
        const cardAdded = document.getElementById('search-result');
        docu.forEach(doc => {

            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
            <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> Book Name: ${doc.title}</h5>
                <h6>Publisher: ${doc.publisher}</h6>
                <h6 id ="title">author_name: ${doc.author_name}</h6>
                <h6>First Published: ${doc.first_publish_year}</h6 >
    
            </div >
            `;
            cardAdded.appendChild(div);

        });
    }

    // number-found 
    const totalBooks = document.getElementById('number-found');
    totalBooks.innerText = `Total Found: ${docu.length}`;
    totalBooks.style.textAlign = 'center'
    totalBooks.style.paddingBottom = '20px'


}

