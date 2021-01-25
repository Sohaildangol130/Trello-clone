function load_template(list_index,title){
    $('#'+list_index).loadTemplate('todo-lists.html',{},{
        success: function(data){
            var parent_list = $('#'+list_index).find('.todo-list');
            
            var list_title = parent_list.find('.todo-list__title p');
            var $todo_list__add_single_todo__add_btn = parent_list.find('.add-single-todo__add-btn');
            var $todo_list__all_todos = parent_list.find('.todo-list__all-todos');
            var $add_single_todo__main_container = $('.add-single-todo__main-container');
            var $add_single_todo__main_container__add_btn = parent_list.find('.main-container__add-btn');
            var $add_single_todo__main_container__close_btn = parent_list.find('.main-container__close-btn');
            var $description = parent_list.find($('.main-container__description'));
    
            list_title.text(title);
    
            $todo_list__add_single_todo__add_btn.click(function(){
                find_toggle(this, $add_single_todo__main_container);
                find_toggle(this, $todo_list__add_single_todo__add_btn);
            })
    
            $add_single_todo__main_container__close_btn.click(function(){
                find_toggle(this, $add_single_todo__main_container);
                find_toggle(this, $todo_list__add_single_todo__add_btn);
            })
    
            $add_single_todo__main_container__add_btn.click(function(){
                card_index++
                card_id = 'card-'+card_index;
                parent_list.find($todo_list__all_todos).append('<div id='+card_id+' class="all-todos__single-todo border-2 rounded-md border-white shadow-2xl px-4 py-2 bg-white mb-4 cursor-pointer"><p></p></div>');
                parent_list.find('#'+card_id+' p').text($description.val())
                $description.val("")        
            })
    
            const sortable = new Draggable.Sortable(document.querySelectorAll('#'+list_index+' .todo-list__all-todos'), {
                draggable: '.all-todos__single-todo'
            });
        }
    });
}