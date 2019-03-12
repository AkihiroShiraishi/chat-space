$(function(){
  function buildUpdatingHTML(message){

    var image = (message.image.url)? `<div class="image-a">
      <image src = "${ message.image.url}" class ="lower-message__image">
      </div>` : ``;

    var html = `
      <div class="message-wrapper" data-id = ${message.id}>
        <p class = "wrapper__main__body__chat_comment_name">
        ${message.user_name}
        </p>
        <p class ="wrapper__main__body__chat_comment_time">
        ${message.created_at}
        </p>
        <p class = "wrapper__main__body__chat_comment_text">
         ${message.content}
         </p>
        ${image}`
        return html;
  }
var updating = function(){
 var message_id = $('.message-wrapper:last').data('id');
 $.ajax({
  url: location.href,
  type: 'GET',
  data:{id:message_id},
  dataType: 'json',
  })
 .done(function(new_messages){
   new_messages.forEach(function(value){
     var html = buildUpdatingHTML(value);
     $(`.wrapper__main__body__chat`).append(html)
   })
  })
 .fail(function(){
      alert('error');
 })
 }
  setInterval(updating, 5000);
})
