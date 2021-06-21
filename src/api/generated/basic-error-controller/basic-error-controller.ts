/*
 * Generated by orval v5.4.8 🍺
 * Do not edit manually.
 * Api Documentation
 * Api Documentation
 * OpenAPI spec version: 1.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "react-query";
import type { ModelAndView } from "../endpoints.schemas";
import { customInstance } from "../../mutator/custom-instance";

type AsyncReturnType<
  T extends (...args: any) => Promise<any>,
  U = unknown
> = T extends (...args: any) => Promise<infer R> ? (U extends R ? U : R) : any;

type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

export const errorHtmlUsingGET = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getErrorHtmlUsingGETQueryKey = () => [`/error`];

export const useErrorHtmlUsingGET = <
  TQueryFnData = AsyncReturnType<typeof errorHtmlUsingGET, ModelAndView>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getErrorHtmlUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => errorHtmlUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const errorHtmlUsingHEAD = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "head" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorHtmlUsingHEAD = <
  TData = AsyncReturnType<typeof errorHtmlUsingHEAD, ModelAndView>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorHtmlUsingHEAD<TData>(requestOptions);
  }, mutationOptions);
};
export const errorHtmlUsingPOST = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "post", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorHtmlUsingPOST = <
  TData = AsyncReturnType<typeof errorHtmlUsingPOST, ModelAndView>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorHtmlUsingPOST<TData>(requestOptions);
  }, mutationOptions);
};
export const errorHtmlUsingPUT = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "put", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorHtmlUsingPUT = <
  TData = AsyncReturnType<typeof errorHtmlUsingPUT, ModelAndView>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorHtmlUsingPUT<TData>(requestOptions);
  }, mutationOptions);
};
export const errorHtmlUsingDELETE = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "delete" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorHtmlUsingDELETE = <
  TData = AsyncReturnType<typeof errorHtmlUsingDELETE, ModelAndView>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorHtmlUsingDELETE<TData>(requestOptions);
  }, mutationOptions);
};
export const errorHtmlUsingPATCH = <TData = ModelAndView>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "patch", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorHtmlUsingPATCH = <
  TData = AsyncReturnType<typeof errorHtmlUsingPATCH, ModelAndView>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorHtmlUsingPATCH<TData>(requestOptions);
  }, mutationOptions);
};
