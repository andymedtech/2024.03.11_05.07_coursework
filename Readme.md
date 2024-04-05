> Задание в "2024.03.14_05.08_classwork_mongoose" 1:30:35

# API социальной сети

## Выполнить
+ Хранение данных в database [mongodb://localhost:27017/fsd_05]
+ Collections в database **MongoDB**
	* posts
						[/models/post.model.js]
						[/routes/groups/post.route.js]
						[/post]
		- _id
		+ user_id
		+ content
		+ timestamp
	* likes
						[/models/like.model.js]
						[/routes/groups/like.route.js]
						[/like]
		- _id
		+ user_id
		+ post_id
		+ timestamp
	* comments
						[/models/comment.model.js]
						[/routes/groups/comment.route.js]
						[/comment]
		- _id
		+ user_id
		+ post_id
		+ content
		+ timestamp
	* profiles
						[/models/profile.model.js]
						[/routes/groups/profile.route.js]
						[/profile]
		- _id
		+ name
		+ surname
		+ email
		+ login
		+ password
		+ avatar
	* messages
						[models/message.model.js]
						[/routes/groups/message.route.js]
						[/message]
		- _id
		+ user_id_from
		+ user_id_to
		+ content
		+ timestamp
- Применение **CRUD**
- Использование паттернов и архитектуры **MVC**
- Авторизация по **JWT**
- Проверка прав при помощи **middleware**

## Database

|                |posts|likes|comments|profiles|messages|
|:---------------|:---:|:---:|:------:|:------:|:------:|
|**\_id**        |+    |+    |+       |+       |+       |
|**user_id**     |+    |+    |+       |-       |-       |
|**content**     |+    |-    |+       |-       |+       |
|**timestamp**   |+    |+    |+       |-       |+       |
|**post_id**     |-    |+    |+       |-       |-       |
|**name**        |-    |-    |-       |+       |-       |
|**surname**     |-    |-    |-       |+       |-       |
|**email**       |-    |-    |-       |+       |-       |
|**password**    |-    |-    |-       |+       |-       |
|**user_id_from**|-    |-    |-       |-       |+       |
|**user_id_to**  |-    |-    |-       |-       |+       |

## Функционал

### post \[/post]
+ Получить post по ID
	[/:id]					[get]			[getByID]
+ Получить все post по ID profile
	[/profile/:id]	[get]			[getByProfileID]
+ Создать post
	[/]							[post]		[create]
- Изменить post
	[/]							[put]			[update]
- Удалить post
	[/]							[delete]	[delete]
### like \[/like]
-  Получить like по ID post
	[/:postID]			[get]			[getByPostID]
-  Поставить like post
	[/]							[post]		[create]
-  Удалить like post
	[/]							[delete]	[delete]
### comment \[/comment]
* Получить comment по ID post
	[/:postID]			[get]			[getByPostID]
* Создать comment
	[/]							[post]		[create]
* Изменить comment
	[/]							[put]			[update]
* Удалить comment
	[/]							[delete]	[delete]
### profile \[/profile]
+ Получить все profile
	[/]							[get]			[getAll]
+ Получить profile по ID
	[/:id]					[get]			[getByID]
+ Получить короткую версию profile по ID
	[/short/:id]		[get]			[getShortByID]
+ Создать profile
	[/]							[post]		[create]
+ Изменить profile
	[/]							[put]			[update]
+ Удалить profile
	[/]							[delete]	[remove]
### message \[/message]
* Получить message по fromID post
	[/:fromID]			[get]		[getFromID]
* Получить message по toID post
	[/:toID]				[get]		[getToID]
* Создать message
	[/]							[post]		[create]
	
## Прочий функционал
- Возможность получения message в режиме реального времени
- Возможность ставить like на comment
- Возможность отвечать на comment
- Изменение profile password
- Генерация случайного password

## Результат

### post
+ Получить post по ID					[getByID]
	- Postman GET
	- http://localhost:8080/api/post/660fd20dab1b6d5596a889b6
+ Получить все post по ID profile	[getByProfileID]
	- Postman GET
	- http://localhost:8080/api/post/profile/660f1d41368b7acc9805aa72
+ Создать post								[create]
	- Postman POST
	- http://localhost:8080/api/post
	*
``` Body raw JSON
{
		"user_id": "660f1d41368b7acc9805aa72",
		"content": "postContent01"
}
```
- Изменить post
- Удалить post

### like
-  Получить like по ID post
-  Поставить like post
-  Удалить like post

### comment
- Получить comment по ID post
- Создать comment
- Изменить comment
- Удалить comment

### profile
+ Получить все profile				[getAll]
	- Postman GET
	- http://localhost:8080/api/profile
+ Получить profile по ID			[getByID]
	- Postman GET
	- http://localhost:8080/api/profile/66068f9d5669f56221fefd69
+ Получить короткую версию profile по ID	[getShortByID]
	- Postman GET
	- http://localhost:8080/api/profile/short/660f1d41368b7acc9805aa72
+ Создать profile							[create]
	- Postman POST
	- http://localhost:8080/api/profile
	*
``` Body raw JSON
{
    "name": "profileName01",
    "surname": "profileSurname01",
    "email": "profile@email01.com",
    "login": "profileLogin01",
    "password": "profilePassword01",
    "avatar": "http://profile.avatar01.jpg"
}
```
+	Изменить profile						[update]
	-	Postman PUT
	-	http://localhost:8080/api/profile
	*
``` Body raw JSON
{
		"id": "660e86b6a00dfd18c8be3484",
    "surname": "profileSurname01-1",
    "avatar": "http://profile.avatar01-1.jpg"
}
```
+ Удалить profile							[remove]
	+ Postman DELETE
	-	http://localhost:8080/api/profile
	*
``` Body raw JSON
{
		"id": "660e86b6a00dfd18c8be3484"
}
```

### message
- Получить message по fromID post
- Получить message по toID post
- Создать message