
const allLinks = document.querySelectorAll('.links')

function getart(event) {
    event.preventDefault()
 const   clicked = this
    const activeL = document.querySelectorAll('.active')
for(let lin of activeL){
    lin.classList.remove('active')
}
clicked.classList.add('.active')
const allArr = document.querySelectorAll('articles')
    allArr.classList.remove('.active')
    const href=clicked.getAttribute(href)
    const match = allArr('.href')
    match.classList.add('.active')

}



    for(let link of allLinks){
        link.addEventListener('click', getart)
    }
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
   function generateTitleLinks(){
    /* remove contents of titleList */
    /* for each article */
      /* get the article id */
      /* find the title element */
      /* get the title from the title element */
      /* create HTML of the link */
      /* insert link into titleList */
   }
   generateTitleLinks();