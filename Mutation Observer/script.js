const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
});

const parentElem = document.querySelector('#parent');

// mutationObserver.observe(parentElem, { childList: true });
// mutationObserver.disconnect();

// mutationObserver.observe(parentElem, 
//     { attributes: true,
//       attributeOldValue: true,
//       attributeFilter: ['id']
//     });

// parentElem.children[0].remove();
// parentElem.appendChild(document.createElement('div'));
// parentElem.id = 'New id';

// mutationObserver.observe(parentElem.children[0].childNodes[0], { 
//     characterData: true,
//     characterDataOldValue: true
// });

// observe everything inside element with subtree option
mutationObserver.observe(parentElem, {
    subtree: true, 
    characterData: true,
    characterDataOldValue: true
});