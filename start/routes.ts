/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TasksController = () => import('#controllers/tasks_controller')

router.on('/').renderInertia('home')
router.get('/tasks', [TasksController, 'index'])
