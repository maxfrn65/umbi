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

  /**
   * Create a record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({}: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ inertia, params }: HttpContext) {
    try {
      const task: any = await this.prisma.tasks.findUnique({
        where: {
          id: params,
        },
      })
      return inertia.render('tasks', { task })
    } catch (e) {
      throw new ExceptionHandler()
    }
  }

  /**
   * Edit individual record
   */
  async edit({}: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({}: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({}: HttpContext) {}
}
