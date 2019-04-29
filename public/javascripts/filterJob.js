//lists of cards currently shown and hidden, filtered by type
let shownTypeList, hiddenTypeList;

$(document).ready(function () {
    shownTypeList = Array.from(document.getElementsByClassName("filter-card"));
    hiddenTypeList = [];
});

/**
 * Starting from the list of cards to filter, shows the cards of the selected type and hides the others
 */
function filterByType() {
    let selectTypeInput = $('#filter-type').val();
    let allList = Array.from(document.getElementsByClassName("filter-card"));

    if(selectTypeInput === 'ALL') {
        shownTypeList = allList;
        hiddenTypeList = [];
    } else {
        shownTypeList = Array.from(document.getElementsByClassName(selectTypeInput));
        hiddenTypeList = allList.filter(elm => !shownTypeList.includes(elm));
    }

    hiddenTypeList.forEach(elm => elm.style.display = "none");

    filterByText();
}

/**
 * Starting from the list of cards currently shown (filtered by type),
 * shows the cards containing the search input in the title or the customer and hides the others
 */
function filterByText() {
    let searchInput = $('#filter-search').val().toLowerCase();

    shownTypeList.forEach(card => {
        let textToFilter = '';
        Array.from(card.getElementsByClassName('filter-text'))
            .forEach(text => textToFilter += text.textContent);

        if(textToFilter.toLowerCase().indexOf(searchInput) !== -1) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}