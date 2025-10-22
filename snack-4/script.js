const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

//Using for
const authors = []

for (let i = 0; i < posts.length; i++) {
  const author = posts[i].author;
  authors.push(author)
}
console.log(authors);

//Using forEach
const authorsEach = []

posts.forEach((post) => {
  authorsEach.push(post.author)
})
console.log(authorsEach);


// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']