export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Mocroservices',
                author: 'Susan J. Fower',
                price: 2300,
                coverImage: "https://covers.oreillystatic.com/images/0636920053675/lrg.jpg"
            },
            {
                id: 2,
                title: 'Relise It!' ,
                author: 'Michael T. Nygard',
                price: 2400,
                coverImage: "https://mxsmirnov.files.wordpress.com/2016/08/releaseit.jpg"
            }
        ];
    }
}
