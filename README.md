Тестовое задание "Вендинговый автомат" для компании "Фармперспектива".



Компонент с таблицей - main-page.
Модальные окна находятся в папке modals.
Форма находится в папке form, данные о курсе валют получаются в компоненте "форма" с помощью хука "useEffect" и axios запроса.
Источником данных выступает компонент service в папке services, далее данные передаются в глобальный стор Redux в компоненте main-page с помощью метода жизненного цикла "componentDidMount". Reducer и action-creators находятся соответственно в папках reducer и actions.
Верстка сделана на Bootstrap, иконки из font-awesome.

gh-pages: https://maxlapenkov.github.io/test-task/
