let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau."
    },
    {
        title:"Pizza Hut",
        description:"Pizza Hut adalah restoran berantai dan waralaba makanan internasional yang mengkhususkan dalam piza."
    },
    {
        title:"Nasi goreng",
        description:"Nasi goreng adalah sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya, seperti telur, ayam, dan kerupuk."
    },
    {
        title:"Teh manis",
        description:"Teh manis adalah minuman yang terbuat dari larutan teh yang diberi pemanis, biasanya gula tebu, sebelum minuman ini siap disajikan."
    },
    {
        title:"Jus Alpukat",
        description:"Jus Alpukat adalah air buah alpukat yang diambil dari buah alpukat yang diblender."
    },
    ]
    
    class todoList{
        item = document.getElementById('todo-list')
        content = document.getElementById('todo-description')
    
        listItem = ()=>{
           for(let x in todo){
           this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
           }
        }
    }
    
    const todoList = new TodoList()