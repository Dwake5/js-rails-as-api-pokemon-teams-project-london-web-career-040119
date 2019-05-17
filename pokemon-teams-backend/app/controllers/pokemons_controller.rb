class PokemonsController < ApplicationController

    # def index
    #     pokemons = Pokemon.all
    #     render json: pokemons
    # end

    # def show
    #     pokemon = Pokemon.find_by(id: params[:id])
    #     if pokemon != nil 
    #         render json: pokemon, except: [:created_at, :updated_at, :trainer_id, :id]
    #     else
    #         render json: {error: "Pokemon not found!" }, status: 404
    #     end
    # end
end
