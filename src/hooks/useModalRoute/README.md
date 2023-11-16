# useRouteModal Hook

```typescript
import { useRouteModal } from '[your path here]';

// usage..
const { open, closeModal } = useRouteModal({ callback: yourCallback, navigateTo: { url: '/your-route', replace: true } });
```

## Description

`useRouteModal` is a custom React Hook that handles modal open/close state based on navigation routes.Dealing with modal-based routing often poses challenges when it comes to modal opening animations displaying correctly. This is typically caused by the `open` state of the modal changing too quickly, before the modal has had the opportunity to initialize and 'listen' for this state change. A common workaround is to initialize the `open` state as `false` and then update it with `useEffect` once the component has fully mounted. But employing this solution across every page can be monotonous and add to code redundancy.

To curtail this problem and make the process more efficient, we have a custom hook called `useRouteModal`. This hook automates these steps in the background, drastically reducing both time and code.

The `useRouteModal` hook yields two properties: `open` and `closeModal`. The `open` property indicates the state of the modal, whereas the `closeModal` function can be invoked to close the modal. The example below illustrates how to use this custom hook in a modal-based route:

## Params

| Name | Type | Required | Description |
|---|---|---|---|
| `options` | IUseRouteModal | No | Options object. |

## IUseRouteModal (options)

| Property | Type | Required | Description |
|---|---|---|---|
| `callback` | Callback (a function) | No | A function that will be executed when the modal is closed. |
| `navigateTo` | object | No | An object containing `url` (a string represents where to navigate after modal is closed) and `replace` (a boolean flag, if set to true, the navigation will replace the current entry in the history stack instead of pushing a new one). |

## Returns

| Property     | Type     | Description                                                                                                                                                                                                           |
|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `open`       | boolean  | The state of the modal. True if it's open, false otherwise.                                                                                                                                                           |
| `closeModal` | function | A callback function that triggers the closing of the modal. It will also execute the `callback` from options and navigate to the `url` specified in `navigateTo` from options (or go back in history if not defined). |

To use it, first import the hook, and then call it with the desired values. After calling, it will give you the `open` and `closeModal` which you can use to control your modal's state.
