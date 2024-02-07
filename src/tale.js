const kolobok = name => {
  switch (name) {
    case 'дедушка':
      return 'Я от дедушки ушёл'
    case 'заяц':
      return 'Я от зайца ушел'
    case 'лиса':
      return 'Меня съели'
    default:
      return 'Такой персонаж не встречался'
  }
}

const newYear = name => {
    return `${name}! `.repeat(3).trim()
}
