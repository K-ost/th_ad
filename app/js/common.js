$(function() {

  // Select2
  $('.js-select2').select2({
    minimumResultsForSearch: 5
  });

  // js-dropdown
  $('.js-dropdown').each(function() {
    $(this).find('.dropdown-menu li').on('click', function() {
      let text = $(this).text();
      $(this).closest('.dropdown').find('.dropdown-link').text(text);
    });
  });

  // datepicker
  $('#datepicker').datepicker({
    format: "dd.mm.yyyy",
    language: "ru",
    todayHighlight: true,
    templates: {
      leftArrow: '<span class="datepicker-prev"></span>',
      rightArrow: '<span class="datepicker-next"></span>'
    }
  });

});


// js-choose-legal
document.querySelector('.js-choose-legal').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('#uh-page1').classList.remove('show')
  document.querySelector('#uh-page2').classList.add('show')
})

const backs = document.querySelectorAll('.js-choose-back')
backs.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('#uh-page1').classList.add('show')
    document.querySelector('#uh-page2').classList.remove('show')
  })
})

// Show calendar
document.querySelectorAll('.js-calendar').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('#calendar1').classList.add('opened')
  })
})
document.querySelectorAll('.js-calendar-dismiss').forEach(el => {
  el.addEventListener('click', e => {
    e.target.closest('.calendar').classList.remove('opened')
  })
})
