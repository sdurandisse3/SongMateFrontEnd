All
- id (unqiue)
- createdAt
- updatedAt

Users
- id (unique)
- username (unique)
- name
- email (unique)
- avatar

Posts
- id (unique)
- user_id
- image_url
- caption
- title
- number_of_comments (int)

Comments
- id (unique)
- post_id
- user_id
- text

SELECT * FROM Comments WHERE post_id = :id

Followers
- id
- person_following_id
- person_being_followed_id

SELECT * FROM Followers WHERE person_being_followed = :id

/api/posts/feed/:user_id

SELECT * FROM Posts WHERE user_id = 1

Likes
- id
- user_id
- post_id