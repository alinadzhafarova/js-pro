const $form = $('#search-form');
const $list = $('#book-list');
const $currentBook = $('#current-book')
let books = [];

$currentBook.hide();
console.log("$currentBook", $currentBook);

const createContent = (data) => {
    $list.empty()
    books = data;


    data.forEach((item) => {
        $('<li>')
            .append(
                $('<a href="">').text(item.volumeInfo.title)
            )
            .attr('data-id', item.id)
            .addClass('list-group-item')
            .appendTo($list)
    });
};

const getBooks = (text) => {
    $.get('https://www.googleapis.com/books/v1/volumes', {q: text})
        .done((response) => createContent(response.items))
        .fail((error) => console.log("error", error));
};

$form.on('submit', (event) => {
    event.preventDefault();
    const text = $('input').val()
    if (text.trim()) {
        getBooks(text);
    }
});

$list.on('click', '[data-id]', function (event) {
    event.preventDefault();
    const bookId = $(this).data('id');
    const {volumeInfo} = books.find((item) => item.id === bookId)
    $currentBook.fadeIn()
    $currentBook
        .find('.book-title')
        .text(`${volumeInfo.title} | ${volumeInfo.authors.join(", ")} (${volumeInfo.publishedDate})`)

    const $bookBody = $currentBook.find('.book-body')
    $bookBody.empty();

    $('<img>').attr('src', volumeInfo.imageLinks.thumbnail)
        .appendTo($bookBody);

    $('<p>').text(volumeInfo.description)
        .appendTo($bookBody);

    $('<a>').attr('href', volumeInfo.previewLink)
        .attr('target', '_blank')
        .text('Read more ...')
        .addClass('float-right')
        .appendTo($bookBody);
})







