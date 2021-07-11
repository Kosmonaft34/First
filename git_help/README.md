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