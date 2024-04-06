> Задание в "2024.03.14_05.08_classwork_mongoose" 1:30:35

# API социальной сети

## Выполнить
+ [x] Хранение данных в **database** [mongodb://localhost:27017/fsd_05]
+ [x] Collections в database **MongoDB**
+ [x] Применение **CRUD**
- [ ] Использование паттернов и архитектуры **MVC**
- [ ] Авторизация по **JWT**
- [ ] Проверка прав при помощи **middleware**

## Database

**posts**
- _id
+ user_id
+ content
+ timestamp
+ timechange

**likes**
- _id
+ user_id
+ post_id
+ timestamp

**comments**
- _id
+ user_id
+ post_id
+ content
+ timestamp
+ timechange

**profiles**
- _id
+ name
+ surname
+ email
+ login
+ password
+ avatar

**messages**
- _id
+ user_id_from
+ user_id_to
+ content
+ timestamp

|                |posts|likes|comments|profiles|messages|
|:---------------|:---:|:---:|:------:|:------:|:------:|
|**\_id**        |+    |+    |+       |+       |+       |
|**user_id**     |+    |+    |+       |        |        |
|**content**     |+    |-    |+       |        |+       |
|**timestamp**   |+    |+    |+       |        |+       |
|**timechange**  |+    |     |+       |        |        |
|**post_id**     |     |+    |+       |        |        |
|**name**        |     |     |        |+       |        |
|**surname**     |     |     |        |+       |        |
|**email**       |     |     |        |+       |        |
|**password**    |     |     |        |+       |        |
|**user_id_from**|     |     |        |        |+       |
|**user_id_to**  |     |     |        |        |+       |

## Функционал

---

### post
```
[http://localhost:8080/api/post]
[/models/post.model.js]
[/routes/groups/post.route.js]
[/controllers/Post.controller.js]
```
	
+ **Получить post по ID**

```
[http://localhost:8080/api/post/:id]
[getByID]
[GET]
```

``` Postman GET
http://localhost:8080/api/post/661185a25e6fe2b1acc3032e
```
	
+ **Получить все post по ID profile**

```
[http://localhost:8080/api/post/profile/:user_id]
[getByProfileID]
[GET]
```

``` Postman GET
http://localhost:8080/api/post/profile/660f1d41368b7acc9805aa72
```
	
+ **Создать post**

```
[http://localhost:8080/api/post]
[create]
[POST]
```

``` Postman POST Body raw JSON
http://localhost:8080/api/post
{
	"user_id": "660f1d41368b7acc9805aa72",
	"content": "postContent01"
}
```
	
+ **Изменить post**

```
[http://localhost:8080/api/post]
[update]
[PUT]
```

``` Postman PUT Body raw JSON
http://localhost:8080/api/post
{
	"id": "661185a25e6fe2b1acc3032e",
	"content": "postContent02-1"
}
```
	
+ **Удалить post**

```
[http://localhost:8080/api/post]
[remove]
[DELETE]
```

``` Postman PUT Body raw JSON
http://localhost:8080/api/post
{
	"id": "661185a65e6fe2b1acc30330"
}
```

---

### like
```
[http://localhost:8080/api/like]
[/models/like.model.js]
[/routes/groups/like.route.js]
[/controllers/Like.controller.js]
```

+  **Получить все like по ID post**

```
[http://localhost:8080/api/like/:post_id]
[getByPostID]
[GET]
```

``` Postman GET
http://localhost:8080/api/like/6611859c5e6fe2b1acc3032c
```
	
+  **Поставить like post**

```
[http://localhost:8080/api/like]
[create]
[POST]
```

``` Postman POST Body raw JSON
http://localhost:8080/api/like
{
	"user_id": "66068f9d5669f56221fefd69",
	"post_id": "6611859c5e6fe2b1acc3032c"
}
{
	"user_id": "660f1d41368b7acc9805aa72",
	"post_id": "6611859c5e6fe2b1acc3032c"
}
```

+  **Удалить like post**

```
[http://localhost:8080/api/like]
[remove]
[DELETE]
```

``` Postman DELETE Body raw JSON
http://localhost:8080/api/like
{
	"user_id": "66068f9d5669f56221fefd69",
	"post_id": "6611859c5e6fe2b1acc3032c"
}
```

---
	
### comment
```
[http://localhost:8080/api/comment]
[/models/comment.model.js]
[/routes/groups/comment.route.js]
[/controllers/Comment.controller.js]
```
					
+ **Получить все comment по ID post**
```
[http://localhost:8080/api/comment/:post_id]
[getByPostID]
[GET]
```

``` Postman GET
http://localhost:8080/api/comment/661185a25e6fe2b1acc3032e
```
	
+ **Создать comment**
```
[http://localhost:8080/api/comment]
[create]
[POST]
```

``` Postman POST Body raw JSON
http://localhost:8080/api/comment
{
	"user_id": "660f1d41368b7acc9805aa72",
	"post_id": "661185a25e6fe2b1acc3032e",
	"content": "commentContent01"
}
{
	"user_id": "66068f9d5669f56221fefd69",
	"post_id": "661185a25e6fe2b1acc3032e",
	"content": "commentContent02"
}
```
	
+ **Изменить comment**

```
[http://localhost:8080/api/comment]
[update]
[PUT]
```

``` Postman PUT Body raw JSON
http://localhost:8080/api/comment
{
	"id": "661196507d770b28e81431e8",
	"content": "commentContent02-3"
}
```
	
+ **Удалить comment**

```
[http://localhost:8080/api/comment]
[remove]
[DELETE]
```

``` Postman DELETE Body raw JSON
http://localhost:8080/api/comment
{
	"id": "661196487d770b28e81431e6"
}
```

---
	
### profile \[/profile]

					[/models/profile.model.js]
					[/routes/groups/profile.route.js]
					[/profile]
					
					
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

					[models/message.model.js]
					[/routes/groups/message.route.js]
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







### profile
+ Получить все profile					[getAll]
	- Postman GET
	- http://localhost:8080/api/profile
+ Получить profile по ID				[getByID]
	- Postman GET
	- http://localhost:8080/api/profile/66068f9d5669f56221fefd69
+ Получить короткую версию profile по ID	[getShortByID]
	- Postman GET
	- http://localhost:8080/api/profile/short/660f1d41368b7acc9805aa72
+ Создать profile								[create]
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
+	Изменить profile							[update]
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
+ Удалить profile								[remove]
	- Postman DELETE
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