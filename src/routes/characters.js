import { Router } from 'express'

export const charactersRouter = Router()

charactersRouter.get('/', async (req, res) => {
  try {
    const characters = await getCharacters()
    res.status(200).json(characters)
  } catch (error) {
    res.status(404).send(error)
  }
})
