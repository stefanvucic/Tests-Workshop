export const user = {
  id: 1,
  name: 'Igor Djukic',
  email: 'igor@email.com',
  address: {
    city: 'Belgrade',
    geo: {
      lat: '12',
      lng: '-14',
    },
  },
  company: {
    name: 'Neotech Solutions',
  },
}

export const users = [
  { ...user },
  {
    id: 2,
    name: 'Djordje Komazec',
    email: 'djordje@email.com',
    address: {
      city: 'Novi Sad',
      geo: {
        lat: '12',
        lng: '-14',
      },
    },
    company: {
      name: 'Neotech Solutions',
    },
  },
]
