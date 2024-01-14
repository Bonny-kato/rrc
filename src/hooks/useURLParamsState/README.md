# useURLParamsState Hook

### Description
The `useURLParamsState` custom hook is an enhanced tool for managing URL parameters in React applications, effectively serving as a superset of the standard `useSearchParams` provided by React Router. It integrates the functionalities of React Router's `useLocation` and `useNavigate` hooks, as well as React's `useEffect` and `useMemo`. This hook not only offers all the capabilities of useSearchParams but also adds several advanced features for more effective URL parameter management. Below is an overview of its functionalities and how it builds upon and surpasses useSearchParams:

1. **Extended Functionality Over useSearchParams:** While useSearchParams allows basic manipulation and retrieval of URL query parameters, useURLParamsState takes it a step further by providing enhanced capabilities such as default parameter values, automatic merging of parameters, and a more intuitive handling of parameter state as a JavaScript object.
2.  **Simplified Parameter Access:** Unlike useSearchParams, which requires individual retrieval of each parameter, useURLParamsState offers direct access to all parameters as a cohesive object. This makes it much more convenient to work with multiple URL parameters simultaneously.
3.  **Default Parameters and Type Safety:** useURLParamsState allows for the specification of default parameter values and, when used with TypeScript, ensures type safety for the parameters object, enhancing the robustness and reliability of the application.


### When to Use `useURLParamsState`
* When you need to synchronize your component's state with URL query parameters.
* In scenarios where you want a more controlled or customized way of handling URL parameters beyond the basic functionality provided by **useSearchParams**. e.g passing _`defaultParams`_, `type-safe support`,


### Examples 

1. #### Basic Usage Without Default Parameters
   * **Explanation** In this example, the hook is used without providing default parameters. It will initialize with the current URL parameters, if any.
   * **Code Example:**
      ```tsx
        const [params, setParams] = useURLParamsState();
        // params will be initialized based on the current URL's query parameters.
      ```

2. #### With Default Parameters
   * **Explanation** This example demonstrates the use of the hook with default parameters. If the URL lacks certain parameters, they will be set to these defaults.
   * **Code Example:**
      ```tsx
        const [params, setParams] = useURLParamsState({ page: 1, sort: 'asc' });
      // params.page defaults to 1 and params.sort defaults to 'asc' if not present in the URL.
      ```

  2. #### With Strongly Typed Parameters
     * **Explanation:** For TypeScript users, the hook can be used with a type for the parameters. This ensures type safety for the parameters object.
     * **Code Example:**
       ```tsx
        interface Params {
          page: number;
          search?: string;
        }
      
        const [params, setParams] = useURLParamsState<Params>({ page: 1 });
        // params is of type Params with page as a number and an optional search string.

       ```

2. #### Updating URL Parameters
    * **Explanation:** Demonstrates how to use the setParams function to update the URL parameters.
    * **Code Example:**
      ```tsx
       const [params, setParams] = useURLParamsState({ page: 1 });

        const updatePage = (newPage) => {
            setParams({ page: newPage });
            // Updates the URL with the new page parameter.
        };

      ```

2. #### Using with Navigation Options
    * **Explanation:** Shows how to use the hook with navigation options, such as `replace` or `state`.
    * **Code Example:**
      ```tsx
        const [params, setParams] = useURLParamsState();

        const updateParamsWithReplace = (newParams) => {
            setParams(newParams, { replace: true });
            // Updates the URL without adding a new entry in the history stack.
        };

      ```

2. #### Merging with Existing Parameters
    * **Explanation:** The hook simplifies the process of merging new parameters with existing ones. You don't need to merge parameters manually; the hook does it for you. Below is a snippet illustrating how the hook internally handles parameter merging. 
        ```tsx
        const params = useMemo(() => {
            return Object.fromEntries(new URLSearchParams(search)) as TData;
        }, [search]);

        const setParams = (p: TData, navigateOpts?: NavigateOptions) => {
            if (p) {
                // Merging new parameters with existing ones
                const queryParams = generateQueryParams({ ...params, ...p }); 
                navigate(`${pathname}?${queryParams}`, navigateOpts);
            }
        };
        ```

2. #### Accessing Params state
    * **Explanation:** The hook offers a more convenient way to access URL parameters as a JavaScript object, which is an improvement over `useSearchParams` that requires calling `searchParams.get("paramName")` for each parameter. The following snippet demonstrates how to access parameters as an object using this hook
        ```tsx
        const [params, setParams] = useURLParamsState({ page: 1, sort: 'asc' });
      
      console.log(params);  // Outputs: { page: 1, sort: 'asc' }
        
        ```

   * **Benefit:** This approach simplifies the process of accessing and managing URL parameters. Instead of retrieving each parameter individually, you get the entire set of parameters as a cohesive object. This makes it easier to work with multiple URL parameters and enhances code readability.
 

~ 😊 Happy Coding ~

  

