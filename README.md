# WHITEPAPER STUB

Whitepaper-stub – шаблон проекта на БЭМ-стеке. Вкчючает в себя минимальную конфигурацию для старта работы.

## Установка

В командной строке необходимо выполнить следующие команды

```
git clone https://github.com/whitepapertools/whitepaper-stub.git --depth 1 my-whitepaper-project
cd my-whitepaper-project
npm install
```

## Запуск

Чтобы не писать каждый раз длинные пути до исполняемых файлов, нужно записать эти пути в глобальную переменную PATH

``` export PATH=./node_modules/.bin:$PATH ```

После установки обновлений и перед первым запуском нужно выполнить билд проекта

``` enb make ```

А чтобы увидеть всё в браузере, нужна команда

``` npm start ```

## Браузер

Далее нужно в браузере перейти по ссылке `0.0.0.0:8080/` или `127.0.0.1:8080/`. На ней будет список всех страниц в проекте. Изначально в проекте лежит одна строка с примерами блоков.

## Как работать дальше?

О том, как тут работать написано в нашем (обучении)[http://whitepaper.tools/doc.html]
