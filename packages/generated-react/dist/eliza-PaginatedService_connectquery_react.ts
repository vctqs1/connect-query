// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-query-react v0.0.2 with parameter "target=ts,import_extension=none,import-hook-from=@tanstack/react-query"
// @generated from file eliza.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConnectQueryKey, createQueryService } from "@bufbuild/connect-query";
import { MethodKind, PartialMessage } from "@bufbuild/protobuf";
import { ListRequest, ListResponse } from "./eliza_pb";
import { useInfiniteQuery, UseInfiniteQueryOptions, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ConnectError } from "@bufbuild/connect";

/**
 * @generated from rpc buf.connect.demo.eliza.v1.PaginatedService.List
 */
export const list = createQueryService({
  service: {
    methods: {
      list: {
        name: "List",
        kind: MethodKind.Unary,
        I: ListRequest,
        O: ListResponse,
      },
    },
    typeName: "buf.connect.demo.eliza.v1.PaginatedService",
  },
}).list;

export const useListQuery = (
    inputs: Parameters<typeof list.useQuery>[0],
    options?: Parameters<typeof list.useQuery>[1],
    queryOptions?: Partial<UseQueryOptions<ListResponse, ConnectError, ListResponse, ConnectQueryKey<ListRequest>>>
) => {
    const baseOptions = list.useQuery(inputs, options);

    return useQuery({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useListMutation = (
    options?: Parameters<typeof list.useMutation>[0],
    queryOptions?: Partial<UseMutationOptions<PartialMessage<ListResponse>, ConnectError, PartialMessage<ListRequest>>>
) => {
    const baseOptions = list.useMutation(options);

    return useMutation({
        ...baseOptions,
        ...queryOptions,
    });
};

export const useListInfiniteQuery = (
    inputs: Parameters<typeof list.useInfiniteQuery>[0],
    options: Parameters<typeof list.useInfiniteQuery>[1],
    queryOptions?: Partial<UseInfiniteQueryOptions<ListResponse, ConnectError, ListResponse, ListResponse, ConnectQueryKey<ListRequest>>>
) => {
    const baseOptions = list.useInfiniteQuery(inputs, options);

    return useInfiniteQuery<ListResponse, ConnectError, ListResponse, keyof typeof inputs extends never ? any : ConnectQueryKey<ListRequest>>({
        ...baseOptions,
        ...queryOptions,
    });
};
