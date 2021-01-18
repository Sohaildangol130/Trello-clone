const $main_container = $('.main-container');

const $add_new_list__add_btn = $('.add-new-list__add-btn');        
const $add_new_list__main_container__close_btn = $('.add-new-list__main-container .main-container__close-btn');
const $add_new_list__main_container__add_btn = $('.add-new-list__main-container .main-container__add-btn');
const $add_new_list__main_container = $('.add-new-list__main-container');     

$add_new_list__add_btn.click(function(){
    toggle($add_new_list__main_container);
    toggle($add_new_list__add_btn);
})

$add_new_list__main_container__close_btn.click(function(){          
    toggle($add_new_list__main_container);
    toggle($add_new_list__add_btn);
})


