const loadSearch = () => {
    const loadInput = document.getElementById('loadInput');
    const loadText = loadInput.value;
    // console.log(loadText);
    loadInput.value = ' ';

    // error-handel 
    //if (loadText === )

    fetch(`http://openlibrary.org/search.json?q=${loadText} `)
        .then(response => response.json())
        .then(data => displayInput(data.docs));

}
loadSearch()

const displayInput = (docs) => {
    // console.log(docs);
    const cardInput = document.getElementById('search-result');
    docs.forEach(doc => {
        // console.log(doc);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${doc. }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${doc.title}</h5>
            <h6>author_name: ${doc.author_name}</h6>
            <h6>publish_date: ${doc.publish_date}</h6>

        </div>
        `;
        cardInput.appendChild(div);
    });
}