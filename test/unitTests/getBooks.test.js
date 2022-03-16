// create a programm that fetch a API and return dataObject

const { fetchBooks } = require('../../getBooks/getBooks')

describe('Book fetch API', () => {
  test('Pass a isbn of book and return code status', async () => {
    const response = await fetchBooks('9780307806796')
    expect(response.status).toBe(200)
  })
  test('Pass a isbn of book that not exist and return code status', async () => {
    const response = await fetchBooks('')
    expect(response.status).toBe(400)
  })
  test('Pass a isbn of book and return info', async () => {
    const response = await fetchBooks('9780307806796')
    expect(response.data).toMatchObject({})
  })
  test('Pass a name of book and return info', async () => {
    const response = await fetchBooks('La sombra del viento')
    expect(response.data).toMatchObject({})
  })
  test('Pass a name of book and return the same title', async () => {
    const response = await fetchBooks('La Sombra del Viento')
    expect(response.data.items[0].volumeInfo.title).toBe('La Sombra del Viento')
  })
  test('Pass a name of book and return isbn', async () => {
    const response = await fetchBooks('La Sombra del Viento')
    expect(response.data.items[0].volumeInfo.industryIdentifiers).toMatchObject({})
  })
  test('Pass a name of book and return author name', async () => {
    const response = await fetchBooks('La Sombra del Viento')
    expect(response.data.items[0].volumeInfo.authors).toMatchObject({})
  })
})
