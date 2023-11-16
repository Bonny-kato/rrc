# Modal Component

Please find below the details of how to use the `Modal` component in your project.

## Installation

```bash
yarn add @headlessui/react
```

## Import

To use this component in your application, you need to import it:

```JavaScript
import Modal from '@/compoments/Modal'; // Update the path as per your project structure
```

## Usage

The `Modal` component can be used in a similar way like any other component. Here is an example of how to use it:

```JavaScript
const [isOpen, setIsOpen] = useState(false);

const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);

<Modal
    open={isOpen}
    onClose={handleClose}
    showBackdropBlur={true}
    dialogClass="pt-[10vh]"
>
    <div>
        // Your modal content goes here
    </div>
</Modal>
```

### Modal-Based Route

Modal-based routing refers to a navigation method where clicking a link does not lead to a new page replacing the
current one. Instead, a modal window opens, displaying the new page within it

![modal-based-route](https://user-images.githubusercontent.com/404386/243087049-b5488ab1-2659-412a-8299-6849198a137a.png)

When dealing with modal-based routing, it's common to encounter issues with modal opening animations not displaying
correctly. This often originates from the modal's `open` state changing too rapidly, before the modal has had the chance
to initialize and 'listen' for this state change. A common solution for this is to initialize the `open` state
as `false` and then update it with `useEffect` once the component is fully mounted. However, implementing this solution
on every page can be tedious and contribute to code redundancy.

To streamline this process, you can utilize a custom hook called `useOpenAndCloseModal()`. This hook performs these
steps under the hood — saving you both time and code.

The `useOpenAndCloseModal()` hook returns two properties: `open` and `closeModal`. The `open` property represents the
state of the modal, while the `closeModal` function can be used to close it. Below is an example of how to use this
custom hook in a modal-based route:

```tsx
import Modal, { useOpenAndCloseModal } from "@/Components/Modal";

const ModalBasedRoute = () => {
    const { open, closeModal } = useOpenAndCloseModal()
    return (
        <Modal open={open} onClose={closeModal}>
            // modal contents
        </Modal>
    )
}
```

## Props

This component accepts the following props:

- `open` (boolean) - Determines if the Modals is open or not.
- `onClose` (function) - Callback function that is called when the modal is closed.
- `children` (ReactNode) - The content of the modal.
- `showBackdropBlur?` (boolean, optional) - If set to true, determines if the modal backdrop should show blur. Default
  is true.
- `dialogClass?` (string, optional) - Customizes modal's class (e.g., add padding to dialog). Default is 'pt-[10vh]'.

## Dependencies

The Modal component has a dependency on the @headlessui/react module, so please make sure you have this module installed
and imported in your project.

## TypeScript Interface for Props

This TypeScript interface is used in this component:

```typescript
export interface IModal {
    open: boolean;
    children: ReactNode;
    showBackdropBlur?: boolean;
    dialogClass?: string;
    onClose: (value: boolean) => void;
}
```
