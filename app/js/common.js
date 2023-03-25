$(function() {

  // Select2
  $('.select2').select2({
    minimumResultsForSearch: 5
  });

  // js-dropdown
  $('.js-dropdown').each(function() {
    $(this).find('.dropdown-menu li').on('click', function() {
      let text = $(this).text();
      $(this).closest('.dropdown').find('.dropdown-link').text(text);
    });
  });


  // gsel-select
  $('.gsel-btn').each(function() {
    let parent = $(this).closest('.gsel')
    $(this).on('click', function() {
      if (!parent.hasClass('opened')) {
        $('.gsel').removeClass('opened');
        parent.addClass('opened');
      } else {
        parent.removeClass('opened');
      }
    });
  });

  // gsel-select hide on click outside
  $(document).mouseup(function(e) {
    const container = $(".gsel");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass('opened');
    }
  });


  // gsel-cab
  $('.gsel-cab .gsel-item').on('click', function() {
    $(this).closest('.gsel-cab').find('.gsel-item').removeClass('choosed');
    $(this).addClass('choosed');
    let cab = $(this).html();
    $(this).closest('.gsel-cab').find('.gsel-select__cab').html(cab);
    $(this).closest('.gsel-cab').removeClass('opened');
  });


  // Datepicker
  $('input[name="daterange"]').daterangepicker({
    opens: "right",
    locale: {
      format: "DD.MM.YYYY",
      separator: " - ",
      applyLabel: "Применить",
      cancelLabel: "Отмена",
      fromLabel: "От",
      toLabel: "До",
      customRangeLabel: "Custom",
      weekLabel: "Н",
      daysOfWeek: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
      monthNames: [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
      ],
      firstDay: 0
    },
    startDate: "14.03.2023",
    endDate: "25.03.2023",
    buttonClasses: "btn btn-sm",
    cancelClass: "btn-light btn-sm"
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


// mobileSort
const mobileSortBtn = document.querySelector('.js-mobileSort')
const mobileSortItem = document.querySelectorAll('.mobile_sort-list li a')
const mobileSortClose = document.querySelector('#mobileSort .btn-close')
if ( document.querySelector('#mobileSort') ) {
  mobileSortBtn.addEventListener('click', () => {
    document.querySelector('#mobileSort').classList.toggle('opened')
  })
  mobileSortClose.addEventListener('click', () => {
    document.querySelector('#mobileSort').classList.remove('opened')
  })
  mobileSortItem.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      mobileSortItem.forEach(i => i.classList.remove('active'))
      el.classList.add('active')
    })
  })
}




