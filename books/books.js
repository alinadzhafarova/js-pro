const $form = $('#search-form');

const getBooks = ( text ) => {
    $.get('https://www.googleapis.com/books/v1/volumes',{ q: text })
        .done((response) => console.log("response",response.items))
        .fail((error) => console.log("error",error));
}

$form.on('submit',(event) => {
    event.preventDefault();
    const text = $('input').val()
    if(text.trim()) {
        getBooks(text)
    }
});