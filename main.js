


const ElFitureLinks=document.querySelectorAll('.fiture__link');
const ElFitureItems=document.querySelectorAll('.fiture__item');
const ElFaqItemInfos=document.querySelectorAll('.faq__item-info');


// ElFaqItemInfos.forEach((ElFaqItemInfo)=>{
//     ElFaqItemInfo.addEventListener(('click'),()=>{
        
//         const activeItem=document.querySelector('.faq__item-info.active');
//         if(activeItem&& activeItem !== ElFaqItemInfo) {
//         activeItem.nextElementSibling.style.maxHeight=null;
//         }
//         ElFaqItemInfo.classList.toggle('active');
//         const answer= ElFaqItemInfo.nextSibling;
//         console.log(answer);
        
//         if(ElFaqItemInfo.classList.contains('active')) {
//             answer.style.maxHeight=answer.scrollHeight;
//         }
//     });
    
// });




document.addEventListener('DOMContentLoaded', () => {
    ElFitureLinks.forEach((ElFitureLink)=>{
        ElFitureLink.addEventListener('click' ,e =>{
        e.preventDefault();
        ElFitureItems.forEach((ElFitureItem)=>{
            ElFitureItem.classList.remove('active');
        });
        ElFitureLink.parentElement.classList.add('active');
        });
    });
    const faqItemInfos = document.querySelectorAll('.faq__item-info');
  
    faqItemInfos.forEach((itemInfo) => {
      itemInfo.addEventListener('click', () => {
        const activeItem = document.querySelector('.faq__item-info.active');
  
        // Avvalgi ochilgan accordionni yopish
        if (activeItem && activeItem !== itemInfo) {
          activeItem.classList.remove('active');
          activeItem.nextElementSibling.style.maxHeight = null;
        }
  
        // Tanlangan accordionni toggle qilish
        const answer = itemInfo.nextElementSibling;
  
        if (itemInfo.classList.contains('active')) {
          itemInfo.classList.remove('active');
          answer.style.maxHeight = null; // Accordionni yopish
        } else {
          itemInfo.classList.add('active');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
    });
  });
  