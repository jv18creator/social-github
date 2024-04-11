import express from 'express'
import { getUserProfileAndRepos } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/profile/:username', getUserProfileAndRepos)
//TODO complete below endpoint
router.get('/likes/:username', getUserProfileAndRepos)

export default router