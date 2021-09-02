
const loadSearch = () => {
    const loadInput = document.getElementById('loadInput');
    const loadText = loadInput.value;
    loadInput.value = ' ';

    // error-handel 
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = ' ';
    if (loadText === ' ') {

        error.innerHTML = ` <p class="text-center p-5 bg-danger rounded">Please, Type Book name First</p>`;

    }
    else {

        fetch(`http://openlibrary.org/search.json?q=${loadText} `)
            .then(response => response.json())
            .then(data => displayInput(data.docs));

    }
}

loadSearch()


const displayInput = (docs) => {
    const cardInput = document.getElementById('search-result');
    cardInput.textContent = ' ';

    // number-found 
    const totalBooks = document.getElementById('number-found');
    totalBooks.innerText = `Total Found: ${docs.length}`;
    totalBooks.style.textAlign = 'center'
    totalBooks.style.paddingBottom = '20px'

    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> Book Name: ${doc.title}</h5>
            <h6>Publisher: ${doc.publisher}</h6>
            <h6>author_name: ${doc.author_name}</h6>
            <h6>First Published: ${doc.first_publish_year}</h6 >

        </div >
        `;
        cardInput.appendChild(div);


    });
}

