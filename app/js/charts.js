
// chart of gender and age
const genderAgeChart = document.querySelector('#genderAgeChart')
const genderAgeChartSettings = {
  borderWidth: 3,
  borderColor: 'transparent',
  borderRadius: 12
}
if (genderAgeChart) {
  new Chart(genderAgeChart, {
    type: 'bar',
    data: {
      labels: ['до 18', '18-21', '21-24', '24-27', '27-30', '30-35', '35-40', '40-45', '45-50', '50-55'],
      datasets: [
        {
          label: 'Женщины',
          data: [7, 9, 8, 7, 6, 4, 4, 3, 4, 2],
          backgroundColor: '#F22F52',
          ...genderAgeChartSettings
        },
        {
          label: 'Мужчины',
          data: [12, 14, 13, 12, 15, 9, 8, 4, 8, 3],
          backgroundColor: '#226EE0',
          ...genderAgeChartSettings
        },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  })
}

// Line chart of time activity
const activityChart = document.querySelector('#activityChart')
if (activityChart) {
  new Chart(activityChart, {
    type: 'line',
    data: {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      datasets: [
        {
          label: 'Просмотры',
          data: [1, 5, 10, 20, 5, 13, 26, 6, 9, 7, 11, 14, 20, 19, 3, 10, 12, 15, 30, 31, 21, 18, 19, 20],
          borderColor: '#226EE0',
          backgroundColor: '#226EE0',
        },
        {
          label: 'Лайки',
          data: [5, 1, 20, 3, 15, 23, 16, 17, 19, 17, 1, 4, 12, 9, 3, 12, 8, 23, 11, 21, 11, 12, 10, 10],
          borderColor: '#F22F52',
          backgroundColor: '#F22F52',
        },
        {
          label: 'Репосты',
          data: [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 19, 17, 15, 13, 11, 9, 7, 5, 3, 10, 22],
          borderColor: '#0A9422',
          backgroundColor: '#0A9422',
        },
        {
          label: 'Комментарии',
          data: [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 22, 24, 0, 6, 15, 13, 20, 2],
          borderColor: '#1A5EC4',
          backgroundColor: '#1A5EC4',
        },
        {
          label: 'Переходы',
          data: [9, 19, 18, 14, 21, 2, 14, 23, 22, 21, 20, 19, 18, 17, 16, 15, 22, 24, 0, 6, 15, 13, 20, 2],
          borderColor: '#48505B',
          backgroundColor: '#48505B',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          ticks: {
            stepSize: 8
          }
        }
      }
    },
  })
}
