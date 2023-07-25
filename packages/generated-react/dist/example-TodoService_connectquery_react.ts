// @generated by protoc-gen-connect-query-react v0.0.2 with parameter "target=ts,import_extension=none,import-hook-from=@tanstack/react-query"
// @generated from file example.proto (package buf.connect.demo.example.v1, syntax proto3)
/* eslint-disable */

import { ConnectQueryKey, createQueryService } from "@bufbuild/connect-query";
import { MethodIdempotency, MethodKind, PartialMessage } from "@bufbuild/protobuf";
import { Empty, Todo, Todos } from "./example_pb";
import { useInfiniteQuery, UseInfiniteQueryOptions, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ConnectError } from "@bufbuild/connect";

/**
 * A helpful RPC to get all current Todos
 *
 * @generated from rpc buf.connect.demo.example.v1.TodoService.GetTodos
 */
export const getTodos = createQueryService({
  service: {
    methods: {
      getTodos: {
        name: "GetTodos",
        kind: MethodKind.Unary,
        I: Empty,
        O: Todos,
        idempotency: MethodIdempotency.NoSideEffects,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).getTodos;

export const useGetTodosQuery = (
    inputs: Parameters<typeof getTodos.useQuery>[0],
    options?: Parameters<typeof getTodos.useQuery>[1],
    queryOptions?: Partial<UseQueryOptions<Todos, ConnectError, Todos, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = getTodos.useQuery(inputs, options);

    return useQuery({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useGetTodosMutation = (
    options?: Parameters<typeof getTodos.useMutation>[0],
    queryOptions?: Partial<UseMutationOptions<PartialMessage<Todos>, ConnectError, PartialMessage<Empty>>>
) => {
    const baseOptions = getTodos.useMutation(options);

    return useMutation({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useGetTodosInfiniteQuery = (
    inputs: Parameters<typeof getTodos.useInfiniteQuery>[0],
    options: Parameters<typeof getTodos.useInfiniteQuery>[1],
    queryOptions?: Partial<UseInfiniteQueryOptions<Todos, ConnectError, Todos, Todos, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = getTodos.useInfiniteQuery(inputs, options);

    return useInfiniteQuery<Todos, ConnectError, Todos, keyof typeof inputs extends never ? any : ConnectQueryKey<Empty>>({
        ...baseOptions,
        ...queryOptions,
    });
};

/**
 * @generated from rpc buf.connect.demo.example.v1.TodoService.AddTodo
 */
export const addTodo = createQueryService({
  service: {
    methods: {
      addTodo: {
        name: "AddTodo",
        kind: MethodKind.Unary,
        I: Todo,
        O: Todos,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).addTodo;

export const useAddTodoQuery = (
    inputs: Parameters<typeof addTodo.useQuery>[0],
    options?: Parameters<typeof addTodo.useQuery>[1],
    queryOptions?: Partial<UseQueryOptions<Todos, ConnectError, Todos, ConnectQueryKey<Todo>>>
) => {
    const baseOptions = addTodo.useQuery(inputs, options);

    return useQuery({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useAddTodoMutation = (
    options?: Parameters<typeof addTodo.useMutation>[0],
    queryOptions?: Partial<UseMutationOptions<PartialMessage<Todos>, ConnectError, PartialMessage<Todo>>>
) => {
    const baseOptions = addTodo.useMutation(options);

    return useMutation({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useAddTodoInfiniteQuery = (
    inputs: Parameters<typeof addTodo.useInfiniteQuery>[0],
    options: Parameters<typeof addTodo.useInfiniteQuery>[1],
    queryOptions?: Partial<UseInfiniteQueryOptions<Todos, ConnectError, Todos, Todos, ConnectQueryKey<Todo>>>
) => {
    const baseOptions = addTodo.useInfiniteQuery(inputs, options);

    return useInfiniteQuery<Todos, ConnectError, Todos, keyof typeof inputs extends never ? any : ConnectQueryKey<Todo>>({
        ...baseOptions,
        ...queryOptions,
    });
};

/**
 * this RPC exists to test how JavaScript reserved keywords are translated
 *
 * @generated from rpc buf.connect.demo.example.v1.TodoService.Delete
 */
export const delete$ = createQueryService({
  service: {
    methods: {
      delete: {
        name: "Delete",
        kind: MethodKind.Unary,
        I: Empty,
        O: Empty,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).delete;

export const useDeleteQuery = (
    inputs: Parameters<typeof delete$.useQuery>[0],
    options?: Parameters<typeof delete$.useQuery>[1],
    queryOptions?: Partial<UseQueryOptions<Empty, ConnectError, Empty, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = delete$.useQuery(inputs, options);

    return useQuery({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useDeleteMutation = (
    options?: Parameters<typeof delete$.useMutation>[0],
    queryOptions?: Partial<UseMutationOptions<PartialMessage<Empty>, ConnectError, PartialMessage<Empty>>>
) => {
    const baseOptions = delete$.useMutation(options);

    return useMutation({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useDeleteInfiniteQuery = (
    inputs: Parameters<typeof delete$.useInfiniteQuery>[0],
    options: Parameters<typeof delete$.useInfiniteQuery>[1],
    queryOptions?: Partial<UseInfiniteQueryOptions<Empty, ConnectError, Empty, Empty, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = delete$.useInfiniteQuery(inputs, options);

    return useInfiniteQuery<Empty, ConnectError, Empty, keyof typeof inputs extends never ? any : ConnectQueryKey<Empty>>({
        ...baseOptions,
        ...queryOptions,
    });
};

/**
 * this RPC exists to test how JavaScript reserved object properties are translated
 *
 * @generated from rpc buf.connect.demo.example.v1.TodoService.ValueOf
 */
export const valueOf$ = createQueryService({
  service: {
    methods: {
      valueOf$: {
        name: "ValueOf",
        kind: MethodKind.Unary,
        I: Empty,
        O: Empty,
      },
    },
    typeName: "buf.connect.demo.example.v1.TodoService",
  },
}).valueOf$;

export const useValueOfQuery = (
    inputs: Parameters<typeof valueOf$.useQuery>[0],
    options?: Parameters<typeof valueOf$.useQuery>[1],
    queryOptions?: Partial<UseQueryOptions<Empty, ConnectError, Empty, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = valueOf$.useQuery(inputs, options);

    return useQuery({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useValueOfMutation = (
    options?: Parameters<typeof valueOf$.useMutation>[0],
    queryOptions?: Partial<UseMutationOptions<PartialMessage<Empty>, ConnectError, PartialMessage<Empty>>>
) => {
    const baseOptions = valueOf$.useMutation(options);

    return useMutation({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useValueOfInfiniteQuery = (
    inputs: Parameters<typeof valueOf$.useInfiniteQuery>[0],
    options: Parameters<typeof valueOf$.useInfiniteQuery>[1],
    queryOptions?: Partial<UseInfiniteQueryOptions<Empty, ConnectError, Empty, Empty, ConnectQueryKey<Empty>>>
) => {
    const baseOptions = valueOf$.useInfiniteQuery(inputs, options);

    return useInfiniteQuery<Empty, ConnectError, Empty, keyof typeof inputs extends never ? any : ConnectQueryKey<Empty>>({
        ...baseOptions,
        ...queryOptions,
    });
};
