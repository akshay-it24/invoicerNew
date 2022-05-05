const express = require('express')
const { getProfiles, createProfile, updateProfile, deleteProfile, getProfile, getProfilesByUser } = require('../controllers/profile');

const router = express.Router()

router.get('/:id', getProfile)
router.get('/', getProfilesByUser)
router.post('/', createProfile)
router.patch('/:id', updateProfile)
router.delete('/:id', deleteProfile)

module.exports = router;