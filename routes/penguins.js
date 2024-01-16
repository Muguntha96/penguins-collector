import { Router } from "express"
import * as penguinsCtrl from '../controllers/penguins.js'

const router=Router()

router.post('/new',penguinsCtrl.create)
router.get('/',penguinsCtrl.index)
router.put('/:penguinId',penguinsCtrl.update)
router.delete('/:penguinId',penguinsCtrl.delete)

export {
  router
}