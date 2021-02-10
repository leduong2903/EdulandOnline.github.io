// FORM SEARCH
function openSearchCourse(){
     let iconSearch=document.querySelector('#header .headers-search')
     let inputSearch=document.querySelector('#header .input-search')
     // let nextResult=document.querySelector('#header .input-search .input-reseult')
     iconSearch.onclick=function(){
          if(inputSearch.style.display=='none'||inputSearch.style.display==''){
               inputSearch.style.display='block'
          }else{
               inputSearch.style.display='none'
          }
     }
     
}
openSearchCourse()

// MENU MOBILE
function menuMobile(){
     let iconMenu=document.querySelector('#header .sub-menu')
     let menuMobile=document.querySelector('#header .subnav-menu .subnav-menu')
     let subMenu=document.querySelector('#header .subnav-menu-sublist')
     let listMenu=document.querySelectorAll('#header .subnav-menu__list')
     iconMenu.onclick=function(){
          if(menuMobile.style.display=='block'||menuMobile.style.display==''){
               menuMobile.style.display='none'
          }else{
               menuMobile.style.display='block'
          }
     }
     listMenu.forEach((list,index)=>{
          list.onclick=function(){
               if(list[1]==index[1]){
                    if(subMenu.style.display=='block'||subMenu.style.display==''){
                         subMenu.style.display='none'
                    }else{
                         subMenu.style.display='block'
                    }
               }
          }
     })
     
}
menuMobile()