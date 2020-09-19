import { Router } from 'express'
import { userInfo } from 'os'

import User from './user.model'

const router = Router()


// Get a user
router.get('/:id', (req, res) => {
    if (User.userIdExists(req.params.id)) {
        res.send(User.getUser(req.params.id))
    }
    else {
        res.send({
            "statusCode": 404,
            "message": "User not found"
        })
    }
})

// Delete a user
router.delete('/:id', (req, res) => {
    if (User.userIdExists(req.params.id)) {
        User.deleteUser(req.params.id);
        res.send({ "message": "User Deleted" })
    }
    else {
        res.send({
            "statusCode": 404,
            "message": "User not found"
        })
    }
})

export default router