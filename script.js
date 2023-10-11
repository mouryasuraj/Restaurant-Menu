//MenuItems Details

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
  ];


// MenuList
const menuList = document.querySelector('.menu-list');

// window DOMContenLoaded
window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuItems(menu);
    displayCategoryBtn();
})


//   Fetching categories
function displayCategoryBtn(){
    const categories = menu.reduce((values, item)=>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values;
    },["all"])
    
    // Taking buttonsContainer and assigning filterButtons
    const buttonContainer = document.querySelector('.buttons-container');
    const menuCategory = categories.map((item)=>{
        return(
            `
            <button class="filter-button" data-id=${item}>${item}</button>
            `
        )
    }).join('');
    buttonContainer.innerHTML = menuCategory;
    showMenuCategoryWise();
}

// Variable for Loading Time
const loadingTime = 400;


// function to show, menuItems cateogory wise
function showMenuCategoryWise(){
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            const catgry = e.currentTarget.dataset.id;
            const menuFilter = menu.filter((menuItems)=>{
                if(menuItems.category === catgry){
                    return menuItems;
                }
            })
            console.log(menuFilter);
            // Condition for 'all' category
            if(catgry === 'all'){
                showLoader()
                setTimeout(() => {
                    displayMenuItems(menu)
                }, loadingTime);
            }else{
                showLoader()
                setTimeout(() => {   
                    displayMenuItems(menuFilter)
                }, loadingTime);
            }
        })
    })
}

// Function to show loader
function showLoader(){
    const loader = document.querySelector('.load');
    loader.style.display = 'block'
    setTimeout(() => {
        loader.style.display = 'none'
    }, loadingTime);
}


// function to display Menu ITems
function displayMenuItems(items){
    const menuItems = items.map((item)=>{
        return(
            `
            <div class="menu-item">
                <div class="photo">
                    <img src=${item.img} alt="">
                </div>
                <div class="item-info">
                    <div class="item-header">
                        <p>${item.title}</p>
                        <p class="price">$${item.price}</p>
                    </div>
                    <div class="item-text">
                        ${item.desc}
                    </div>
                </div>
            </div>
            `
        )
    }).join('')
    menuList.innerHTML = menuItems;
}

