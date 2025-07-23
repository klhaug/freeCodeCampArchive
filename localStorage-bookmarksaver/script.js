const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBtn = document.getElementById("add-bookmark-button");
const categoryDropDown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const closeBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");

const addNewBookmarkBtn = document.getElementById("add-bookmark-button-form");
const formName = document.getElementById("name");
const formUrl = document.getElementById("url");
const bookMarkListSection = document.getElementById("bookmark-list-section");
const categoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const deleteBookMarkBtn = document.getElementById("delete-bookmark-button");



const bookMarks = [
  {
    name: "Daily Wire",
    category: "news",
    url: "dailywire.com"
  },
  {
    name: "YouTube",
    category: "entertainment",
    url: "youtube.com"
  },
  {
    name: "Notion",
    category: "work",
    url: "notion.com"
  },
]

localStorage.setItem("bookmarks", JSON.stringify(bookMarks));




const getBookmarks = () => {
  const bookmarks = localStorage.getItem("bookmarks");

  if(!bookmarks || bookmarks.length === 0) {
    return [];
  } 

  const bookmarksArr = JSON.parse(bookmarks)

 const isValidObj = bookmarksArr.every((item) =>  
  typeof item === 'object' &&
  'name' in item &&
  'url' in item &&
  'category' in item 
 )

  console.log(isValidObj);

  if(isValidObj) {
    return bookmarksArr
  } else {
    return [];
  }

}





const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

addBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropDown.value;
  displayOrCloseForm();
})

closeBtn.addEventListener("click", () => {
  displayOrCloseForm();
})

closeListBtn.addEventListener("click", () => {
  bookMarkListSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
})

addNewBookmarkBtn.addEventListener("click", () => {
  const newBookmark = {
    name: formName.value.toLowerCase(),
    url: formUrl.value.toLowerCase(),
    category: categoryDropDown.value.toLowerCase()
  }

  bookMarks.push(newBookmark)
  localStorage.setItem("bookmarks", JSON.stringify(bookMarks));

  formName.value = "";
  formUrl.value = "";

  displayOrCloseForm();
})

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookMarkListSection.classList.toggle("hidden");
}

categoryBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropDown.value;
  console.log(categoryName.innerText);

  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  if (bookmarks.findIndex((item) => item.category === categoryDropDown.value) === -1) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`
  } else {
    const filteredBookmarks = bookmarks.filter((item) => item.category === categoryDropDown.value)
    console.log(filteredBookmarks)
    categoryList.innerHTML = `${filteredBookmarks.map((item) => {
      return `
      <input type="radio" id="${item.name}" value="${item.name}" name="bookmark">
        <label for="${item.name}"><a href="${item.url}">${item.name}</a></label>

        
        `
    })}`
  }

  displayOrHideCategory()

})

deleteBookMarkBtn.addEventListener("click", () => {
  console.log(categoryList)
})




