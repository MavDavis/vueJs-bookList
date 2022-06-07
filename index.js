const app = Vue.createApp({
    data() {
        return {
            books: [
                { title: "Josh Comes home", author: "Brad Traversy", isFav: true },
                { title: "Bring back hero", author: "Brad Traversy", isFav: false },
                { title: "Train with wheels", author: "Curfewrg", isFav: true },
                { title: "Distance(physics)", author: "Newton Isaac", isFav: false },
            ],
            showBook: true,
        };
    },
    methods: {
        showBooks() {
            this.showBook = !this.showBook;
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav;
        },
    },
    computed: {},
});
app.mount("#app");