const { createApp } = Vue; 

const app = createApp({
   data(){
    return{ 
       bookList: [],
       formFilled: true,
       bkTitle: "",
       bkContent: "" 
    }
   },
    methods: { 
        addNewBook(){ 
           this.bookList.push({ 
           title: this.bkTitle,
           content: this.bkContent, 
           isactive: false
           }); 
           this.bkTitle = "";
           this.bkContent = "";
           this.updateBtn();
        },
        delBook(target, event){ 
                    
                    this.bookList.splice(target, 1);  
        },
        updateBtn(){ 
            this.formFilled = this.bkTitle.length > 0 & this.bkContent.length > 0 ? false : true;
        }
    } 
}).mount("#app");

/*
 {
            title: "Book 1",
            content: "This is a content of the first book", 
            isactive: false
        }*/