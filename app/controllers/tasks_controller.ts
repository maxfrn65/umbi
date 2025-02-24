import { ExceptionHandler, HttpContext } from '@adonisjs/core/http'
import { PrismaClient } from '@prisma/client'

export default class TasksController {
  prisma = new PrismaClient()

  /**
   * Show all records
   */
  public async index({ inertia }: HttpContext) {
    try {
      const allTasks: any = await this.prisma.tasks.findMany()
      return inertia.render('tasks', { allTasks })
    } catch (e) {
      throw new ExceptionHandler()
    }
  }

  /*/!**
   * Create a record
   *!/
  async create({ inertia }: HttpContext) {}

  /!**
   * Handle form submission for the create action
   *!/
  async store({ request }: HttpContext) {}

  /!**
   * Show individual record
   *!/
  async show({ params }: HttpContext) {}

  /!**
   * Edit individual record
   *!/
  async edit({ params }: HttpContext) {}

  /!**
   * Handle form submission for the edit action
   *!/
  async update({ params, request }: HttpContext) {}

  /!**
   * Delete record
   *!/
  async destroy({ params }: HttpContext) {}*/
}
