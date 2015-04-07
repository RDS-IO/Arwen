package controllers

import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.main())
  }

  def dashboard = Action {
    Ok("")
  }

  def hot = Action {
    Ok("")
  }

  def hotByBoard(board: String) = Action {
    Ok("")
  }

  def articlesById(id: String) = Action {
    Ok("")
  }



}