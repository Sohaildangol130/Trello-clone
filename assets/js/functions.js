find_toggle = ($this,$val) => {
    $($this).closest('.todo-list__add-single-todo').find($val).toggleClass('hidden');
}
toggle = ($val) => {
    $($val).toggleClass('hidden');
}