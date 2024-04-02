import './style.css'

function toMinute(dateValue: number): number {
  return (dateValue / 60000) | 0
}

const time = document.querySelector('time') as HTMLElement
let lastMinute = toMinute(Date.now()) - 1
let thisMinute

function setTime() {
  const now = new Date()
  thisMinute = toMinute(now.valueOf())

  if (thisMinute > lastMinute) {
    lastMinute = thisMinute
    const hour = now.getHours()
    const minute = String(now.getMinutes()).padStart(2, '0')

    time.setAttribute('datetime', `${String(hour).padStart(2, '0')}:${minute}`)
    time.innerText = new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
    }).format(now)
  }
}

setTime()

setInterval(setTime, 1000)
