const booksByCategory =[
    {
    category: 'riqueza',
    books:[
        {
            title: 'os segredos da mente milionária ',
            author: 't.harv eker',},
        {
            title: 'o homem mais rico da babilonia',
            author:'geoger s. classon',},
        {
            title:'pai rico,pai pobre',
            author:'robert t. kiyosaki e sharon l. lechter',},

        
     ]

     
    },
    {
        category:'inteligencia emocional',
        books:[
            {
                title:'voce é insubstituivel',
                author:'augusto cury',
            },
            {
                title:'ansiedade-como enfrentar o mal do século',
                author:'augusto cury',
            },
            {
                title:'os 7 habitos de pessoas altamente eficazes',
                author:'stephen'
            }
        ]
    },
    
    
   
];


const totalCategories = booksByCategory.length
console.log(`o total de categorias é ${totalCategories}`)

for( let category of booksByCategory){
    console.log('o total de livros da categoria', category.category)
    console.log(category.books.length)
}


function countyAuthors(){
    let authors = [];

    for(let category of booksByCategory){// vai pegar as duas categorias

        for(let book of category.books){//vai pegar os livros da categoria
            if(authors.indexOf(book.author) ==-1){ //se for igual a -1 significa que o autor nao existe e ira adicionar
                authors.push(book.author)
            }
        }
        
    }

    console.log(`o total de autores é ${authors.length}`)
    
}

countyAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){// vai pegar as duas categorias

        for(let book of category.books){//vai pegar os livros da categoria
            if(book.author === author){ //se for igual a -1 significa que o autor nao existe e ira adicionar
                books.push(book.title)
            }
        }
        
    }

    console.log(`livros do autor ${author} :${books.join(', ')}`)
    
}

booksOfAuthor('augusto cury')


    