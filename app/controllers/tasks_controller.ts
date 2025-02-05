import type { HttpContext } from '@adonisjs/core/http'
import { PrismaClient } from '@prisma/client'

export default class TasksController {
  prisma = new PrismaClient()

  /**
   * Show all records
   */
  public async index({ inertia }: HttpContext) {
    const allTasks: any = await this.prisma.tasks.findMany()
    console.log('Tasks: ', allTasks)
    return inertia.render('tasks', { allTasks })
  }

  /**
   * Create a record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
