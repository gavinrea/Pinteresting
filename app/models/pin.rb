class Pin < ActiveRecord::Base
	belongs_to :user
	# added for paperclip gem
	#styles will create two versions, a medium and thumbnail:
	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]



	validates :image, presence: true
	validates :description, presence: true
end