'use strict';

function handleClick(event) {
    event.preventDefault();

    // znajdujemy stary artykul i go chowamy
    const artykulStary = document.querySelector('.post.active');
    artykulStary.classList.remove('active');

    // znajdujemy nowy artykul i go pokazujemy
    const href = this.getAttribute('href');
    const artykulPasujacyDoLinku = document.querySelector(href);
    artykulPasujacyDoLinku.classList.add('active');

    //zabtanie klasy activ z aktualnego linku//
    const linkStary = document.querySelector(".titles a.active");
    linkStary.classList.remove('active');
    //dodanie klasy aktiw na link kliknięty//
    this.classList.add('active');
}



//usuwanie linków miejscowości//
function generateTitleLinks(customSelector = ''){
    const articles = document.querySelectorAll('.post'+customSelector);
    const linkList = document.querySelector('.titles')
    console.log(articles);
    linkList.innerHTML = ''
    for(let article of articles){
        const title = article.querySelector('.post-title').innerHTML;
        const id = article.getAttribute('id');
        const HTML = '<li><a href="#'+id+'">'+title+'</a></li>';
        linkList.innerHTML = linkList.innerHTML + HTML;

    }
    const links = document.querySelectorAll('.titles a');
    links[0].classList.add('active');

    for(let link of links) {
  link.addEventListener('click', handleClick);
}

}
generateTitleLinks()

//usuwanie tagów//


//znalezienie wrappera tagów//


function generateTags(){
  const allTags = {}
  /* find all articles */
const articles = document.querySelectorAll('.post');
  /* START LOOP: for every article: */
for(let article of articles){
  const TagsWrapper = article.querySelector(".post-tags .list");
  const articleTags = article.getAttribute('data-tags');
  const articleTagsArray = articleTags.split(' ');
  for(let tag of articleTagsArray){

    /* generate HTML of the link */
        const HTML = '<li><a href="#tag-'+tag+'">'+tag+'</a></li>';
        TagsWrapper.innerHTML = TagsWrapper.innerHTML + HTML;
    /* add generated code to html variable */
    if(!allTags[tag]){

      /* [NEW] add generated code to allTags array */
      allTags[tag]=1;
    }else{
      allTags[tag]=allTags[tag]+1
    }

  }
}

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */
    /* [NEW] check if this link is NOT already in allTags */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */

  const tagList = document.querySelector('.list.tags');
for(let Tag in allTags){
let className=''
  if(allTags[Tag]<4)className='small'
  else if (allTags[Tag]<8)className='medium'
  else className='big'

  tagList.innerHTML=tagList.innerHTML+'<li><a class="Tag-size-'+className+'" href="#tag-'+Tag+'">'+Tag+'</a> <span>('+allTags[Tag]+')</span></li>'
}
/* [NEW] add html from allTags to tagList */
}

generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */
event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
const tags = document.querySelectorAll('a.active[href^="#tag-"]')
  /* START LOOP: for each active tag link */
for (let tag of tags){
  tag.classList.remove('active');
}
    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
const links = document.querySelectorAll('a[href="'+href+'"]');
  /* START LOOP: for each found tag link */
for (let link of links){
  link.classList.add('active');
}
    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
const links = document.querySelectorAll('a[href^="#tag-"]');
  /* START LOOP: for each link */
for (let link of links){
  link.addEventListener('click', tagClickHandler);

}
    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();

function generateOsrodki(){
  const articles = document.querySelectorAll('.post');
  const list = document.querySelector('.osrodek')
  for(let article of articles){
    const location = article.getAttribute('data-location')
    const HTML = '<li><a href="#'+location+'">'+location+'</a></li>';
    list.innerHTML = list.innerHTML + HTML
  }
}
function addClickListenersToOsrodki(){
const links = document.querySelectorAll('.osrodek a');
for (let link of links){
  link.addEventListener('click', osrodekClickHandler);

}
}
function osrodekClickHandler(){
const location = this.getAttribute('href').replace('#','');
generateTitleLinks('[data-location="'+location+'"]')
}
generateOsrodki()
addClickListenersToOsrodki()
