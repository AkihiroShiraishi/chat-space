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
|id|integer|null: false, foreign_key: true|
|email|integer|null:false, foreign_key: true|
|password|integer|null:false, foreign_key: true|
name|integer|null:false, foreign_key: true|

### Association
- has_many :tweets
- belongs_to :chat



## Tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null:false, foreign_key: true|
|image|string|null:false, foreign_key: true|

### Association
- belongs_to:user
- belongs_to:chat
