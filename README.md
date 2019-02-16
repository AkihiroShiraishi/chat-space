# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
R

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null:false|
|password|string|null:false|
|name|string|null:false, index: true, unique: true|


### Association
- has_many :tweets
- has_many :groups, through: :group_users
- has_many :group_users


## Tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|reference|null:false, foreign_key: true|
|group_id|reference|null:false, foreign_key: true|


### Association
- belongs_to:user
- belongs_to:group

##Groupsテーブル
|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :group_users
- has_many :tweets
- has_many :group_users

##Group_usersテーブル
|Colum|Type|Options|
|-----|----|-------|
|user_id|reference|null:false, foreign_key: true|
|group_id|reference|null:false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group
