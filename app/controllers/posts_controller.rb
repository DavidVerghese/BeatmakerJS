class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  def create
    @user = User.find(post_params[:user])
    @content = post_params[:content]
    @post = Post.new(content: @content,user:@user)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @post
  end
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end
  private
    def set_post
      @post = Post.find(params[:id])
    end
    def post_params 
      params.require(:post).permit(:content, :user)
    end 
end