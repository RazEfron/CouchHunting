class ApplicationController < ActionController::Base

    helper_method :current_user, :signed_in?

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    # debugger
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

end
