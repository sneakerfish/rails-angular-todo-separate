class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    if user
      JsonWebToken.encode(user_id: user.id)
    end
  end

private
  attr_accessor :email, :password

  def user
    user = User.find_by(email: email)
    if user && user.authenticate(password)
      return user
    end
    errors.add :user_authentication, 'Invalid credentials'
    nil
  end
end
