const $main_container = $('.main-container__all-lists');
const $add_new_list__add_btn = $('.add-new-list__add-btn');        
const $add_new_list__main_container__close_btn = $('.add-new-list__main-container .main-container__close-btn');
const $add_new_list__main_container__add_btn = $('.add-new-list__main-container .main-container__add-btn');
const $add_new_list__main_container = $('.add-new-list__main-container');   
var list_i = 0;  
var card_index = 0;  

$add_new_list__add_btn.click(function(){
    toggle($add_new_list__main_container);
    toggle($add_new_list__add_btn);
})

$add_new_list__main_container__close_btn.click(function(){          
    toggle($add_new_list__main_container);
    toggle($add_new_list__add_btn);
})

$add_new_list__main_container__add_btn.click(function(){
    list_i++;
    var list_index = 'list-'+list_i;
    var title = $('.main-container__title-input').val();
    $main_container.append('<div id="'+list_index+'" class="main-container__todo-list"></div>'); 
    load_template(list_index,title);
})


