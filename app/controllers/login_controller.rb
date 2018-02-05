class LoginController < ApplicationController
  def login
    command = AuthenticateUser.call(params[:email], params[:password])
    if command.success?
      render json: { auth_token: command.result }, status: :ok
    else
      render json: { errors: command.errors }, status: :unauthorized
    end
  end
end
