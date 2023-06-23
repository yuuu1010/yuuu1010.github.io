'use strict'
{
  alert('メディアクエリ未対応！！');
  document.querySelector('.Form-Btn').addEventListener('click', () => {
    // alert(document.querySelector('textarea').value = '現在、メンテナンス中です！');
    alert('現在メンテナンス中です！');
    // document.querySelector('textarea').value = '';
    // document.querySelector('input').value = '';
    const textareas = document.querySelectorAll('textarea');
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    
    textareas.forEach(textarea => textarea.value = '');
    inputs.forEach(input => input.value = '');
   

});
}
