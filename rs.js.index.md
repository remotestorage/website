# remoteStorage.js

## At a glance

### Setup

```javascript
const rs = new RemoteStorage();
rs.access.claim('todos', 'rw');
rs.caching.enable();

const client = rs.scope('/todos/');
```

### Write an object

```javascript
// Declare an object type to validate if you want (JSON Schema)
client.declareType('todo-item', {});

// Write `{"id":"alfa","done":false}` to /todos/alfa.json
await client.storeObject('todo-item', 'alfa.json', {
  id: 'alfa',
  done: false,
});
```

### Get objects

```javascript
const specificItem = await client.getObject('alpha.json');
const allTodoItems = await client.getAll();
```

### Add the Connect Widget UI component

Use our [drop-in UI widget](https://github.com/remotestorage/remotestorage-widget) for connecting remote storage accounts.

```javascript
const widget = new Widget(rs);
widget.attach();
```

[]() [Protocol details](/)
