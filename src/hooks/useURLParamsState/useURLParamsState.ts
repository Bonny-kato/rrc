import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigateOptions } from "react-router/dist/lib/context";

import { generateQueryParams } from "@/utilties";

const useURLParamsState = <TData>(
    defaultParams?: TData,
): [TData, (p: TData) => void] => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const params = useMemo(() => {
        return Object.fromEntries(new URLSearchParams(search)) as TData;
    }, [search]);

    const setParams = (p: TData, navigateOpts?: NavigateOptions) => {
        if (p) {
            const queryParams = generateQueryParams({ ...params, ...p });
            navigate(`${pathname}?${queryParams}`, navigateOpts);
        }
    };

    useEffect(() => {
        if (defaultParams) setParams(defaultParams);
    }, []);

    return [params, setParams];
};

export default useURLParamsState;
