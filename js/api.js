const loadSearch = () => {
    const loadInput = document.getElementById('loadInput');
    const loadText = loadInput.value;
    const errorDiv = document.getElementById('error');
    loadInput.value = ' ';

    // error-handel

    fetch(`http://openlibrary.org/search.json?q=${loadText} `)
        .then(response => response.json())
        .then(data => displayInput(data.docs));


}
loadSearch()
// document.getElementById("number-found").innerText = `Total Found${docs.length}`;

const displayInput = (docs) => {
    const cardInput = document.getElementById('search-result');
    cardInput.textContent = ' ';
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${doc.title}</h5>
            <h6>publisher: ${doc.publisher}</h6>
            <h6>author_name: ${doc.author_name[0]}</h6>
            <h6>publish_year: ${doc.first_publish_year}</h6 >

        </div >
        `;
        cardInput.appendChild(div);
    });
}
