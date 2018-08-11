class HomeController < ApplicationController
  def index
  end

  def search
    char = ['a|b|c', 'd|e|f', 'g|h|i', 'j|k|l', 'm|n|o', 'p|q|r|s', 't|u|v', 'w|x|y|z']
    regex_str = ''
    regex_num =''
    params["input"].split('').each do |x|
      c = char[x.to_i - 2].to_s
      str = '[' + c + ']'
      regex_str = regex_str + str
      regex_num = regex_num + '[' + x  + ']'
    end
    # regex_num = regex_num.split('').join('')
    # regex_num = 
    a = Contact.where("name ~* ? ", "(#{regex_str})" ).pluck(:id)
    b = Contact.where("number LIKE  ?", "%#{regex_num}%" ).all
    binding.pry
    a = Contact.where(id: a + b)
    render json: {contacts: a}, status: 200
  end
end
