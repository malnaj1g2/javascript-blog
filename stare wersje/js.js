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
function generateTitleLinks(){
    const articles = document.querySelectorAll('.post');
    const linkList = document.querySelector('.titles')
    console.log(articles);
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

function generateTags(){
  /* find all articles */

  /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();
