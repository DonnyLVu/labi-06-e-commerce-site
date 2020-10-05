// IMPORT MODULES under test here:
 import { renderBook } from '../utils.js';

// id: 'callOfFive',
// title: 'Call of Five',
// author: 'Donya Donson',
// cover: 'Call of 5.png',
// price: 99,

const test = QUnit.test;

test('Renders call of five', (expect) => {
    // arrange
    const book1 = {
        id: 'callOfFive',
        title: 'Call of Five',
        author: 'Donya Donson',
        cover: 'Call of 5.png',
        price: 99,
        category : 'Action',
        description: 'Extreme Counting to Five',
    };
    const expected = `<li class="book"><p class="title">Call of Five</p><p class="author">Donya Donson</p><img class="cover" src="../assets/Call of 5.png"><p class="price">$99.00</p><p class="description">Extreme Counting to Five</p><p class="category">Action</p><button>Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBook(book1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});