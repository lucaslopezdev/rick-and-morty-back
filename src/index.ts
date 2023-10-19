import express, { json } from 'express'

export const createApp = ({ characterModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
}