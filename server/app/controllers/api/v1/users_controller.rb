module Api
    module V1
        class UsersController < ApplicationController
            def register
                # Create the user object
                @user = User.new(user_params)
                # Verify if the user already exist
                if not (User.find_by_email(params[:email]))
                    @user.password = params[:password]
                    @user.password_confirmation = params[:password_confirmation]
                    # Save the user if no errors
                    if @user.save
                        render json: {status: 'SAVED', data: @user}, status: :ok
                    else 
                        render json: {status: 'ERROR', data: @user.errors}, status: :unprocessable_entity
                    end
                else
                    render json: {status: 'User already exist'}, status: :ok
                end
            end

            def login
                # Find the user by its email and compare the password
                @user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
                puts User.find_by_email(params[:email])
                # If no error
                if (@user)
                    # Encode the user information the create the JWT
                    @token = JsonWebToken.encode(user: @user.name, email: @user.email, id: @user.id)
                    render json: {status: 'Login Successfull', token: @token }, status: :ok
                else
                    render json: {status: 'Login Error'}, status: :ok
                end 
            end

            def createEvent
                # Get the token
                @token = request.headers[:Authorization]
                if @token 
                    # Decode the token information
                    @tokenDecode = JsonWebToken.decode(@token)
                    # Find the user by its id
                    @user = User.find_by_id(@tokenDecode[:id])
                    # If the user exist
                    if @user
                        @event = Event.new(event_params)
                        # Save the event if no errors
                        if @event.save
                            # Create the new owner relation
                            @owner = Owner.new(user_id: @user.id, event_id: @event.id)
                            # Save the owner relation if no errors
                            if @owner.save
                                render json: {status: 'SAVED', data: @event}, status: :ok    
                            else
                                render json: {status: 'ERROR', data: @owner.errors}, status: :unprocessable_entity
                            end
                        else 
                            render json: {status: 'ERROR', data: @event.errors}, status: :unprocessable_entity
                        end
                    else
                        render json: {status: "Error", error:"User dont exist"}, status: :ok
                    end
                else
                    render json: {status:"Error", error: "Unauthorized"}, status: :ok
                end
            end

            def joinEvent
                # Get the token
                @token = request.headers[:Authorization]
                if @token 
                    # Decode the token information
                    @tokenDecode = JsonWebToken.decode(@token)
                    # Find the user by its id
                    @user = User.find_by_id(@tokenDecode[:id])
                    # If the user exist
                    if @user
                        @event = Event.find_by_id(params[:event][:event_id])
                        # if the event exist
                        if @event
                            # Create the new assistant relation
                            @assistant = Assistant.new(user_id: @user.id, event_id: @event.id)
                            # Save the assistant relation if no errors
                            if @assistant.save
                                render json: {status: 'SAVED', data: @assistant}, status: :ok    
                            else
                                render json: {status: 'ERROR', data: @assistant.errors}, status: :unprocessable_entity
                            end
                        else 
                            render json: {status: 'ERROR', data: @event.errors}, status: :unprocessable_entity
                        end
                    else
                        render json: {status: "Error", error:"User dont exist"}, status: :ok
                    end
                else
                    render json: {status:"Error", error: "Unauthorized"}, status: :ok
                end
            end

            def commentEvent
                # Get the token
                @token = request.headers[:Authorization]
                if @token 
                    # Decode the token information
                    @tokenDecode = JsonWebToken.decode(@token)
                    # Find the user by its id
                    @user = User.find_by_id(@tokenDecode[:id])
                    # If the user exist
                    if @user
                        @event = Event.find_by_id(params[:comment][:event_id])
                        # if the event exist
                        if @event
                            # Create the new comment
                            @comment = Comment.new(title: params[:comment][:title], text: params[:comment][:text], user_id: @user.id, event_id: @event.id)
                            # Save the comment if no errors
                            if @comment.save
                                render json: {status: 'SAVED', data: @comment}, status: :ok    
                            else
                                render json: {status: 'ERROR', data: @comment.errors}, status: :unprocessable_entity
                            end
                        else 
                            render json: {status: 'ERROR', data: @event.errors}, status: :unprocessable_entity
                        end
                    else
                        render json: {status: "Error", error:"User dont exist"}, status: :ok
                    end
                else
                    render json: {status:"Error", error: "Unauthorized"}, status: :ok
                end
            end

            def getEventOwner
                # Search owner
                @owner = Owner.find_by(event_id: params[:events][:event_id])
                # If owner
                if @owner
                    # Find user
                    @user = User.find_by_id(@owner.user_id)
                    render json: {status: 'DONE', owner: @user}, status: :ok   
                else
                    render json: {status: 'ERROR', data: @events.errors}, status: :unprocessable_entity
                end
            end

            def getEvents
                # Search events
                @events = Event.all
                # If events
                if @events
                    render json: {status: 'DONE', data: @events}, status: :ok   
                else
                    render json: {status: 'ERROR', data: @events.errors}, status: :unprocessable_entity
                end
            end

            def getComments
                # Search commentss
                @comments = Comment.all
                # If comments
                if @comments
                    render json: {status: 'DONE', data: @comments}, status: :ok   
                else
                    render json: {status: 'ERROR', data: @comments.errors}, status: :unprocessable_entity
                end
            end

            private
            def user_params
                params.require(:user).permit(:name, :last_name, :email, :cel, :password, :password_confirmation)
            end
            def event_params
                params.require(:event).permit(:title, :description, :date, :place, :contact, :category)
            end
        end
    end
end
