/*
 * Generated by orval v5.4.8 🍺
 * Do not edit manually.
 * Api Documentation
 * Api Documentation
 * OpenAPI spec version: 1.0
 */
import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
} from "react-query";
import type {
  UserDTO,
  GoogleLoginUserDTO,
  LogInUserDTO,
  Unit,
  UserCreationDTO,
  RoleDTO,
  PropertyDTO,
  ErrorUsingGET200,
  ErrorUsingHEAD200,
  ErrorUsingPOST200,
  ErrorUsingPUT200,
  ErrorUsingDELETE200,
  ErrorUsingPATCH200,
  PropertyFilterDto,
  CreatePropertyDTOBody,
  PageCityDTO,
  GetCitiesUsingGETParams,
  AmenityDTO,
  MaterialDTO,
  SecurityDTO,
  StyleDTO,
  GetTypesUsingGET200Item,
  UserContactDto,
  PagePropertyPreviewDTO,
  GetPropertiesUsingGETParams,
  GetPropertiesFilteredUsingPOSTParams,
  PageStateDTO,
  GetStatesUsingGETParams,
} from "./endpoints.schemas";
import { customInstance } from "../mutator/custom-instance";

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

export const loginWithGoogleUsingPOST = <TData = UserDTO>(
  googleLoginUserDTO: GoogleLoginUserDTO,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/google-login`, method: "post", data: googleLoginUserDTO },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useLoginWithGoogleUsingPOST = <
  TData = AsyncReturnType<typeof loginWithGoogleUsingPOST, UserDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: GoogleLoginUserDTO },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { data: GoogleLoginUserDTO }, TContext>(
    (props) => {
      const { data } = props || {};

      return loginWithGoogleUsingPOST<TData>(data, requestOptions);
    },
    mutationOptions
  );
};
export const loginUsingPOST = <TData = UserDTO>(
  logInUserDTO: LogInUserDTO,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/login`, method: "post", data: logInUserDTO },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useLoginUsingPOST = <
  TData = AsyncReturnType<typeof loginUsingPOST, UserDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: LogInUserDTO },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { data: LogInUserDTO }, TContext>(
    (props) => {
      const { data } = props || {};

      return loginUsingPOST<TData>(data, requestOptions);
    },
    mutationOptions
  );
};
export const logOutUsingPOST = <TData = Unit>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/logout`, method: "post", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useLogOutUsingPOST = <
  TData = AsyncReturnType<typeof logOutUsingPOST, Unit>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return logOutUsingPOST<TData>(requestOptions);
  }, mutationOptions);
};
export const getLoggedUsingGET = <TData = UserDTO>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/me`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetLoggedUsingGETQueryKey = () => [`/auth/me`];

export const useGetLoggedUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getLoggedUsingGET, UserDTO>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetLoggedUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getLoggedUsingGET<TQueryFnData>(requestOptions),
    {
      retry: false,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchIntervalInBackground: false,
      staleTime: Infinity,
      ...queryOptions,
    }
  );

  return {
    queryKey,
    ...query,
  };
};

export const registerUsingPOST = <TData = UserDTO>(
  userCreationDTO: UserCreationDTO,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/register`, method: "post", data: userCreationDTO },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useRegisterUsingPOST = <
  TData = AsyncReturnType<typeof registerUsingPOST, UserDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: UserCreationDTO },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { data: UserCreationDTO }, TContext>(
    (props) => {
      const { data } = props || {};

      return registerUsingPOST<TData>(data, requestOptions);
    },
    mutationOptions
  );
};
export const getRolesUsingGET = <TData = RoleDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/auth/roles`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetRolesUsingGETQueryKey = () => [`/auth/roles`];

export const useGetRolesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getRolesUsingGET, RoleDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetRolesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getRolesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const dislikePropertyUsingPUT = <TData = PropertyDTO>(
  id: string,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/dislike/${id}`, method: "put", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useDislikePropertyUsingPUT = <
  TData = AsyncReturnType<typeof dislikePropertyUsingPUT, PropertyDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { id: string }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { id: string }, TContext>((props) => {
    const { id } = props || {};

    return dislikePropertyUsingPUT<TData>(id, requestOptions);
  }, mutationOptions);
};
export const errorUsingGET = <TData = ErrorUsingGET200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getErrorUsingGETQueryKey = () => [`/error`];

export const useErrorUsingGET = <
  TQueryFnData = AsyncReturnType<typeof errorUsingGET, ErrorUsingGET200>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getErrorUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => errorUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const errorUsingHEAD = <TData = ErrorUsingHEAD200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "head" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorUsingHEAD = <
  TData = AsyncReturnType<typeof errorUsingHEAD, ErrorUsingHEAD200>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorUsingHEAD<TData>(requestOptions);
  }, mutationOptions);
};
export const errorUsingPOST = <TData = ErrorUsingPOST200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "post", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorUsingPOST = <
  TData = AsyncReturnType<typeof errorUsingPOST, ErrorUsingPOST200>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorUsingPOST<TData>(requestOptions);
  }, mutationOptions);
};
export const errorUsingPUT = <TData = ErrorUsingPUT200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "put", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorUsingPUT = <
  TData = AsyncReturnType<typeof errorUsingPUT, ErrorUsingPUT200>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorUsingPUT<TData>(requestOptions);
  }, mutationOptions);
};
export const errorUsingDELETE = <TData = ErrorUsingDELETE200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "delete" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorUsingDELETE = <
  TData = AsyncReturnType<typeof errorUsingDELETE, ErrorUsingDELETE200>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorUsingDELETE<TData>(requestOptions);
  }, mutationOptions);
};
export const errorUsingPATCH = <TData = ErrorUsingPATCH200>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/error`, method: "patch", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useErrorUsingPATCH = <
  TData = AsyncReturnType<typeof errorUsingPATCH, ErrorUsingPATCH200>,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, TVariables, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, TVariables, TContext>(() => {
    return errorUsingPATCH<TData>(requestOptions);
  }, mutationOptions);
};
export const getMyFiltersUsingGET = <TData = PropertyFilterDto[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/get-filters`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetMyFiltersUsingGETQueryKey = () => [`/get-filters`];

export const useGetMyFiltersUsingGET = <
  TQueryFnData = AsyncReturnType<
    typeof getMyFiltersUsingGET,
    PropertyFilterDto[]
  >,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetMyFiltersUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getMyFiltersUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const likePropertyUsingPUT = <TData = PropertyDTO>(
  id: string,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/like/${id}`, method: "put", data: undefined },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useLikePropertyUsingPUT = <
  TData = AsyncReturnType<typeof likePropertyUsingPUT, PropertyDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { id: string }, TContext>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { id: string }, TContext>((props) => {
    const { id } = props || {};

    return likePropertyUsingPUT<TData>(id, requestOptions);
  }, mutationOptions);
};
export const createPropertyUsingPOST = <TData = PropertyDTO>(
  createPropertyDTOBody: CreatePropertyDTOBody,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/property/create`, method: "post", data: createPropertyDTOBody },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useCreatePropertyUsingPOST = <
  TData = AsyncReturnType<typeof createPropertyUsingPOST, PropertyDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: CreatePropertyDTOBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<TData, TError, { data: CreatePropertyDTOBody }, TContext>(
    (props) => {
      const { data } = props || {};

      return createPropertyUsingPOST<TData>(data, requestOptions);
    },
    mutationOptions
  );
};
export const getFavoritePropertiesUsingGET = <TData = PropertyDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/property/favorites`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetFavoritePropertiesUsingGETQueryKey = () => [
  `/property/favorites`,
];

export const useGetFavoritePropertiesUsingGET = <
  TQueryFnData = AsyncReturnType<
    typeof getFavoritePropertiesUsingGET,
    PropertyDTO[]
  >,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetFavoritePropertiesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getFavoritePropertiesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getMyPropertiesUsingGET = <TData = PropertyDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/property/own`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetMyPropertiesUsingGETQueryKey = () => [`/property/own`];

export const useGetMyPropertiesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getMyPropertiesUsingGET, PropertyDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetMyPropertiesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getMyPropertiesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const editPropertyUsingPUT = <TData = PropertyDTO>(
  id: string,
  createPropertyDTOBody: CreatePropertyDTOBody,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/property/${id}`, method: "put", data: createPropertyDTOBody },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useEditPropertyUsingPUT = <
  TData = AsyncReturnType<typeof editPropertyUsingPUT, PropertyDTO>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { id: string; data: CreatePropertyDTOBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<
    TData,
    TError,
    { id: string; data: CreatePropertyDTOBody },
    TContext
  >((props) => {
    const { id, data } = props || {};

    return editPropertyUsingPUT<TData>(id, data, requestOptions);
  }, mutationOptions);
};
export const getCitiesUsingGET = <TData = PageCityDTO>(
  stateId: string,
  params?: GetCitiesUsingGETParams,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/cities/${stateId}`, method: "get", params },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetCitiesUsingGETQueryKey = (
  stateId: string,
  params?: GetCitiesUsingGETParams
) => [`/public/cities/${stateId}`, ...(params ? [params] : [])];

export const useGetCitiesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getCitiesUsingGET, PageCityDTO>,
  TError = unknown,
  TData = TQueryFnData
>(
  stateId: string,
  params?: GetCitiesUsingGETParams,
  options?: {
    query?: UseQueryOptions<TQueryFnData, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetCitiesUsingGETQueryKey(stateId, params);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getCitiesUsingGET<TQueryFnData>(stateId, params, requestOptions),
    { enabled: !!stateId, ...queryOptions }
  );

  return {
    queryKey,
    ...query,
  };
};

export const getAmenitiesUsingGET = <TData = AmenityDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/info/amenities`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetAmenitiesUsingGETQueryKey = () => [`/public/info/amenities`];

export const useGetAmenitiesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getAmenitiesUsingGET, AmenityDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetAmenitiesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getAmenitiesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getMaterialsUsingGET = <TData = MaterialDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/info/materials`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetMaterialsUsingGETQueryKey = () => [`/public/info/materials`];

export const useGetMaterialsUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getMaterialsUsingGET, MaterialDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetMaterialsUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getMaterialsUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getSecuritiesUsingGET = <TData = SecurityDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/info/securities`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetSecuritiesUsingGETQueryKey = () => [
  `/public/info/securities`,
];

export const useGetSecuritiesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getSecuritiesUsingGET, SecurityDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetSecuritiesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getSecuritiesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getStylesUsingGET = <TData = StyleDTO[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/info/styles`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetStylesUsingGETQueryKey = () => [`/public/info/styles`];

export const useGetStylesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getStylesUsingGET, StyleDTO[]>,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetStylesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getStylesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getTypesUsingGET = <TData = GetTypesUsingGET200Item[]>(
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/info/types`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetTypesUsingGETQueryKey = () => [`/public/info/types`];

export const useGetTypesUsingGET = <
  TQueryFnData = AsyncReturnType<
    typeof getTypesUsingGET,
    GetTypesUsingGET200Item[]
  >,
  TError = unknown,
  TData = TQueryFnData
>(options?: {
  query?: UseQueryOptions<TQueryFnData, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetTypesUsingGETQueryKey();

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getTypesUsingGET<TQueryFnData>(requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const contactPropertyOwnerUsingPOST = <TData = unknown>(
  id: string,
  userContactDto: UserContactDto,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    {
      url: `/public/property/contact/${id}`,
      method: "post",
      data: userContactDto,
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useContactPropertyOwnerUsingPOST = <
  TData = AsyncReturnType<typeof contactPropertyOwnerUsingPOST, unknown>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { id: string; data: UserContactDto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<
    TData,
    TError,
    { id: string; data: UserContactDto },
    TContext
  >((props) => {
    const { id, data } = props || {};

    return contactPropertyOwnerUsingPOST<TData>(id, data, requestOptions);
  }, mutationOptions);
};
export const getPropertiesUsingGET = <TData = PagePropertyPreviewDTO>(
  params?: GetPropertiesUsingGETParams,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/property/preview`, method: "get", params },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetPropertiesUsingGETQueryKey = (
  params?: GetPropertiesUsingGETParams
) => [`/public/property/preview`, ...(params ? [params] : [])];

export const useGetPropertiesUsingGETInfinite = <
  TQueryFnData = AsyncReturnType<
    typeof getPropertiesUsingGET,
    PagePropertyPreviewDTO
  >,
  TError = unknown,
  TData = TQueryFnData
>(
  params?: GetPropertiesUsingGETParams,
  options?: {
    query?: UseInfiniteQueryOptions<TQueryFnData, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetPropertiesUsingGETQueryKey(params);

  const query = useInfiniteQuery<TQueryFnData, TError, TData>(
    queryKey,
    ({ pageParam }) =>
      getPropertiesUsingGET<TQueryFnData>(
        { page: pageParam, ...params },
        requestOptions
      ),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const useGetPropertiesUsingGET = <
  TQueryFnData = AsyncReturnType<
    typeof getPropertiesUsingGET,
    PagePropertyPreviewDTO
  >,
  TError = unknown,
  TData = TQueryFnData
>(
  params?: GetPropertiesUsingGETParams,
  options?: {
    query?: UseQueryOptions<TQueryFnData, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetPropertiesUsingGETQueryKey(params);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getPropertiesUsingGET<TQueryFnData>(params, requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};

export const getPropertiesFilteredUsingPOST = <TData = PagePropertyPreviewDTO>(
  propertyFilterDto: PropertyFilterDto,
  params?: GetPropertiesFilteredUsingPOSTParams,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    {
      url: `/public/property/preview/by-filter`,
      method: "post",
      data: propertyFilterDto,
      params,
    },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const useGetPropertiesFilteredUsingPOST = <
  TData = AsyncReturnType<
    typeof getPropertiesFilteredUsingPOST,
    PagePropertyPreviewDTO
  >,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    TData,
    TError,
    { data: PropertyFilterDto; params?: GetPropertiesFilteredUsingPOSTParams },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options || {};

  return useMutation<
    TData,
    TError,
    { data: PropertyFilterDto; params?: GetPropertiesFilteredUsingPOSTParams },
    TContext
  >((props) => {
    const { data, params } = props || {};

    return getPropertiesFilteredUsingPOST<TData>(data, params, requestOptions);
  }, mutationOptions);
};
export const getPropertyUsingGET = <TData = PropertyDTO>(
  id: string,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/property/${id}`, method: "get" },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetPropertyUsingGETQueryKey = (id: string) => [
  `/public/property/${id}`,
];

export const useGetPropertyUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getPropertyUsingGET, PropertyDTO>,
  TError = unknown,
  TData = TQueryFnData
>(
  id: string,
  options?: {
    query?: UseQueryOptions<TQueryFnData, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetPropertyUsingGETQueryKey(id);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getPropertyUsingGET<TQueryFnData>(id, requestOptions),
    { enabled: !!id, ...queryOptions }
  );

  return {
    queryKey,
    ...query,
  };
};

export const getStatesUsingGET = <TData = PageStateDTO>(
  params?: GetStatesUsingGETParams,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<TData>(
    { url: `/public/states`, method: "get", params },
    // eslint-disable-next-line
    // @ts-ignore
    options
  );
};

export const getGetStatesUsingGETQueryKey = (
  params?: GetStatesUsingGETParams
) => [`/public/states`, ...(params ? [params] : [])];

export const useGetStatesUsingGET = <
  TQueryFnData = AsyncReturnType<typeof getStatesUsingGET, PageStateDTO>,
  TError = unknown,
  TData = TQueryFnData
>(
  params?: GetStatesUsingGETParams,
  options?: {
    query?: UseQueryOptions<TQueryFnData, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetStatesUsingGETQueryKey(params);

  const query = useQuery<TQueryFnData, TError, TData>(
    queryKey,
    () => getStatesUsingGET<TQueryFnData>(params, requestOptions),
    queryOptions
  );

  return {
    queryKey,
    ...query,
  };
};
