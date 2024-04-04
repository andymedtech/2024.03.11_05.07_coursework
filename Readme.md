> Задание в "2024.03.14_05.08_classwork_mongoose" 1:30:35

# API социальной сети

## Выполнить

+ Хранение данных в database [mongodb://localhost:27017/fsd_05]
+ Collections в database **MongoDB**
	* [post]
						[/models/post.model.js]
						[/routes/groups/post.route.js]
						[/post]
		- _id
		+ user_id
		+ content
		+ timestamp
	* [like]
						[/models/like.model.js]
						[/routes/groups/like.route.js]
						[/like]
		- _id
		+ user_id
		+ post_id
		+ timestamp
	* [comment]
						[/models/comment.model.js]
						[/routes/groups/comment.route.js]
						[/comment]
		- _id
		+ user_id
		+ post_id
		+ content
		+ timestamp
	* [profile]
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
	* [message]
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

|                |post|like|comment|profile|message|
|:---------------|:--:|:--:|:-----:|:-----:|:-----:|
|_**id**         |+   |+   |+      |+      |+      |
|**user_id**     |+   |+   |+      |-      |-      |
|**content**     |+   |-   |+      |-      |+      |
|**timestamp**   |+   |+   |+      |-      |+      |
|**post_id**     |-   |+   |+      |-      |-      |
|**name**        |-   |-   |-      |+      |-      |
|**surname**     |-   |-   |-      |+      |-      |
|**email**       |-   |-   |-      |+      |-      |
|**password**    |-   |-   |-      |+      |-      |
|**user_id_from**|-   |-   |-      |-      |+      |
|**user_id_to**  |-   |-   |-      |-      |+      |

## Функционал

- [post]
					[/post]
	* Получить post по ID
					[/:id]					[get]			[getByID]
	* Получить post по ID profile
					[/profile/:id]	[get]			[getByProfileID]
	* Создать post
					[/]							[post]		[create]
	* Изменить post
					[/]							[put]			[update]
	* Удалить post
					[/]							[delete]	[delete]
- [like]
					[/like]
	*  Получить like по ID post
					[/:postID]			[get]			[getByPostID]
	*  Поставить like post
					[/]							[post]		[create]
	*  Удалить like post
					[/]							[delete]	[delete]
- [comment]
					[/comment]
	* Получить comment по ID post
					[/:postID]			[get]			[getByPostID]
	* Создать comment
					[/]							[post]		[create]
	* Изменить comment
					[/]							[put]			[update]
	* Удалить comment
					[/]							[delete]	[delete]
- [profile]
					[/profile]
	+ Получить все profile
					[/]							[get]			[getAll]
	+ Получить profile по ID
					[/:id]					[get]			[getByID]
	* Получить короткую версию profile по ID
					[/short/:id]		[get]			[getShortByID]
	+ Создать profile
					[/]							[post]		[create]
	* Изменить profile
					[/]							[put]			[update]
	* Удалить profile
					[/]							[delete]	[delete]
- [message]
					[/message]
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

+ Получить все profile		[getAll]
	- Postman GET
	- http://localhost:8080/api/profile
+ Получить profile по ID	[getByID]
	- Postman GET
	- http://localhost:8080/api/profile/66068f9d5669f56221fefd69
* Создать profile					[create]
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
