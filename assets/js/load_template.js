$add_new_list__main_container__add_btn.click(function(){
    $main_container.prepend('<div class="main-container__todo-list"></div>');
    $('.main-container__todo-list').loadTemplate('./todo-lists.html', {}, {
        success: function(data){
            var title = $('.main-container__title-input').val();
            $('.todo-list__title p').text(title);
            const $todo_list__add_single_todo__add_btn = $('.add-single-todo__add-btn');

            const $add_single_todo__main_container = $('.add-single-todo__main-container');
            const $add_single_todo__main_container__add_btn = $('.add-single-todo__main-container .main-container__add-btn');
            const $add_single_todo__main_container__close_btn = $('.add-single-todo__main-container .main-container__close-btn');
            const $todo_list__all_todos = $('.todo-list__all-todos');

            $todo_list__add_single_todo__add_btn.click(function(){
                find_toggle(this, $add_single_todo__main_container);
                find_toggle(this, $todo_list__add_single_todo__add_btn);
            })

            $add_single_todo__main_container__close_btn.click(function(){
                find_toggle(this, $add_single_todo__main_container);
                find_toggle(this, $todo_list__add_single_todo__add_btn);
            })

            $add_single_todo__main_container__add_btn.click(function(){
                $(this).closest('.todo-list').find($todo_list__all_todos).prepend('<div class="all-todos__single-todo border-2 rounded-md border-white shadow-2xl px-4 py-2 bg-white mb-4 cursor-pointer"><p></p></div>');
                var a = $(this).closest('.todo-list').find($('.add-single-todo__main-container .main-container__description')).val();
                $(this).closest('.todo-list').find($('.all-todos__single-todo p')).text(a);
            })
            const sortable = new Draggable.Sortable(document.querySelectorAll('.todo-list__all-todos'), {
                draggable: '.all-todos__single-todo'
            });
        }
    })
})