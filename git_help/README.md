# Git help

### создать пустой git репозиторий (делается один раз при создании):

`$ git init`

### Возможно потребуется настройка Git:

```sh
$git config --global user.name "John Doe"
$git config --global user.email John Doe@example.com
```
### Сначало надо проиндексировать:

`$ git add .`

### Проверить статус файлов для Git:

`$ git status`

### Сохраняем заиндексированный код в истории версий кода Git(репозиторий):
`$ git commit -m "Commit name"`

### Просмотр истории версий кода:

`$ git log`

### Добавить удалённый репозиторий:

`$ git remote add origin https://github.com/First/css_intro.git`

### Отправляем в удалённый репозиторий:

`#$ git push origin master`

## Работа с ветвями:

### Созданте новой ветви:

`$ git branch new-branch`

### Переключиться на новую ветвь:

`$ git checkout new-branch`

### Вносим изменения в файлы и делаем commit

`$ git commit -am "Commits name"`

### Просмотр истории версий кода (выйти из конца команды - клавиша q):

`$ git log`

### Переходим обратно в главную ветвь:

` git checkout master`

### Вносим изменения в файлы и делаем commit(необязательно)

`$ git commit -am "Commits name"`

### Делаем слияние ветвей (необходимо убедиться в ветке master(`git status`)):

`$ git merge new-brunch`

### В случае конфликтов редактируем файлы и делаем индексацию файлов и commit:

`$ git commit -am "Commits name"`

### Удалить ветку:

`$ git branch -d new-branch`
