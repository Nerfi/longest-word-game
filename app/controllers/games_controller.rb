class GamesController < ApplicationController
  def new
    o = [('A'..'Z')].map(&:to_a).flatten
    @letters = (0...10).map { o[rand(o.length)] }.join

    @letters = params[:name]

    if @letters.blank?
      "you can not create one"
    elsif @letters = params[:name]
      params[:name]
    else
    @letters


    end

  end

  def score
    #raise lo hacemos para saber que params tenemos de vuelta
  end
end
