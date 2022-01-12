class ProfilePic < ActiveRecord::Migration[6.1]
  def change
    change_table :users do |t|
      t.string :profile_pic
    end 

  end
end
