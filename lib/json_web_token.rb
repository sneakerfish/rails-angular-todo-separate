module JsonWebToken
  def self.encode(payload, exp = 1.month.from_now)
    payload[:exp] = exp.to_i
    payload[:iat] = Time.current
    JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
  end

  def self.decode(token)
    body = JWT.decode(token, Rails.application.secrets.secret_key_base, true, { :algorithm => 'HS256' }
    )[0]
    HashWithIndifferentAccess.new body
  rescue
    nil
  end
end
