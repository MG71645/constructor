$(document).ready(function () {
  
  $('.tree .mdi-eye').click(function(event) {
    event.target.parentElement.classList.toggle('-disabled');
  });
  
  $('.tree .item').click(function(event) {
    $('.tree .row').removeClass('-active');
    event.target.closest('.row').classList.add('-active');
    event.target.closest('.row').classList.toggle('-collapsed');
    console.log(event.target.parentElement);
  });
  
});