class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers, include: :pokemons
    end

    # def show
    #     trainer = Trainer.find_by(id: params[:id])
    #     if trainer != nil 
    #         render json: trainer, include: :pokemons, except: [:created_at, :updated_at]
    #     else
    #         render json: {error: "Trainer not found!" }, status: 404
    #     end
    # end
end
