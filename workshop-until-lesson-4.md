# Workshop until lesson 4

## 1. Radera todo

När man klickar på Delete på en todo, gå till närmaste `li` och läs ut `data-todo-id` via `dataset`-nyckeln på elementet.

Skriv `deleteTodo`-funktionen i `TodosAPI.ts` så den accepterar ett `id` och skickar en `DELETE`-request till API:et.

## 2. Toggla todo

När man klickar i checkbox på en todo, gå till närmaste `li` och läs ut `data-todo-id` via `dataset`-nyckeln på elementet.

Skriv `updateTodo`-funktionen i `TodosAPI.ts` så den fungerar för att uppdatera **både** `title` och `completed`, _men_ man ska bara behöva skicka in det som man vill uppdatera, _inte_ data som är oförändrad.

## 3. Redigera todo

När man klickar på Edit på en todo, gå till närmaste `li` och läs ut `data-todo-id` via `dataset`-nyckeln på elementet.

Använd `updateTodo`-funktionen ifrån `TodosAPI.ts`, den bör nu acceptera att man kan uppdatera en todo's `title` om du gjort steg 2 rätt.
