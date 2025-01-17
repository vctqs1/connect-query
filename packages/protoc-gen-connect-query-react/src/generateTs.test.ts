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

import type { Target } from '@bufbuild/protoplugin/ecmascript';
import { describe, expect, it } from '@jest/globals';

import packageJson from '../package.json';
import { generate } from './jest/helpers';

describe('generateTs', () => {
  describe('eliza.proto', () => {
    const expected = (target: Target, importHookFrom: string) => [
      '// Copyright 2021-2022 Buf Technologies, Inc.',
      '//',
      '// Licensed under the Apache License, Version 2.0 (the "License");',
      '// you may not use this file except in compliance with the License.',
      '// You may obtain a copy of the License at',
      '//',
      '//      http://www.apache.org/licenses/LICENSE-2.0',
      '//',
      '// Unless required by applicable law or agreed to in writing, software',
      '// distributed under the License is distributed on an "AS IS" BASIS,',
      '// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
      '// See the License for the specific language governing permissions and',
      '// limitations under the License.',
      '',
      `// @generated by protoc-gen-connect-query-react v${
        packageJson.version
      } with parameter "target=${target}${
        importHookFrom ? `,import-hook-from=${importHookFrom}` : ''
      }"`,
      '// @generated from file eliza.proto (package connectrpc.eliza.v1, syntax proto3)',
      '/* eslint-disable */',
      '// @ts-nocheck',
      '',
      'import { ConnectQueryKey, createQueryService } from "@bufbuild/connect-query";',
      'import { MethodKind, PartialMessage } from "@bufbuild/protobuf";',
      'import { SayRequest, SayResponse } from "./eliza_pb.js";',
      `import { useInfiniteQuery, UseInfiniteQueryOptions, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "${
        importHookFrom || '@tanstack/react-query'
      }";`,
      'import { ConnectError } from "@bufbuild/connect";',
      '',
      '/**',
      ' * Say is a unary RPC. Eliza responds to the prompt with a single sentence.',
      ' *',
      ' * @generated from rpc connectrpc.eliza.v1.ElizaService.Say',
      ' */',
      'export const say = createQueryService({',
      '  service: {',
      '    methods: {',
      '      say: {',
      '        name: "Say",',
      '        kind: MethodKind.Unary,',
      '        I: SayRequest,',
      '        O: SayResponse,',
      '      },',
      '    },',
      '    typeName: "connectrpc.eliza.v1.ElizaService",',
      '  },',
      '}).say;',
      '',
      'export const useSayQuery = (',
      '    inputs: Parameters<typeof say.useQuery>[0],',
      '    options?: Parameters<typeof say.useQuery>[1],',
      '    queryOptions?: Partial<UseQueryOptions<SayResponse, ConnectError, SayResponse, ConnectQueryKey<SayRequest>>>',
      ') => {',
      '    const baseOptions = say.useQuery(inputs, options);',
      '',
      '    return useQuery({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
      '',
      'export const useSayMutation = (',
      '    options?: Parameters<typeof say.useMutation>[0],',
      '    queryOptions?: Partial<UseMutationOptions<PartialMessage<SayResponse>, ConnectError, PartialMessage<SayRequest>>>',
      ') => {',
      '    const baseOptions = say.useMutation(options);',
      '',
      '    return useMutation({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
      '',
      'export const useSayInfiniteQuery = (',
      '    inputs: Parameters<typeof say.useInfiniteQuery>[0],',
      '    options: Parameters<typeof say.useInfiniteQuery>[1],',
      '    queryOptions?: Partial<UseInfiniteQueryOptions<SayResponse, ConnectError, SayResponse, SayResponse, ConnectQueryKey<SayRequest>>>',
      ') => {',
      '    const baseOptions = say.useInfiniteQuery(inputs, options);',
      '',
      '    return useInfiniteQuery<SayResponse, ConnectError, SayResponse, keyof typeof inputs extends never ? any : ConnectQueryKey<SayRequest>>({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
      '',
      '/**',
      ' * SayAgain is a unary RPC. Eliza responds to the prompt with a single sentence.',
      ' *',
      ' * @generated from rpc connectrpc.eliza.v1.ElizaService.SayAgain',
      ' */',
      'export const sayAgain = createQueryService({',
      '  service: {',
      '    methods: {',
      '      sayAgain: {',
      '        name: "SayAgain",',
      '        kind: MethodKind.Unary,',
      '        I: SayRequest,',
      '        O: SayResponse,',
      '      },',
      '    },',
      '    typeName: "connectrpc.eliza.v1.ElizaService",',
      '  },',
      '}).sayAgain;',
      '',
      'export const useSayAgainQuery = (',
      '    inputs: Parameters<typeof sayAgain.useQuery>[0],',
      '    options?: Parameters<typeof sayAgain.useQuery>[1],',
      '    queryOptions?: Partial<UseQueryOptions<SayResponse, ConnectError, SayResponse, ConnectQueryKey<SayRequest>>>',
      ') => {',
      '    const baseOptions = sayAgain.useQuery(inputs, options);',
      '',
      '    return useQuery({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
      '',
      'export const useSayAgainMutation = (',
      '    options?: Parameters<typeof sayAgain.useMutation>[0],',
      '    queryOptions?: Partial<UseMutationOptions<PartialMessage<SayResponse>, ConnectError, PartialMessage<SayRequest>>>',
      ') => {',
      '    const baseOptions = sayAgain.useMutation(options);',
      '',
      '    return useMutation({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
      '',
      'export const useSayAgainInfiniteQuery = (',
      '    inputs: Parameters<typeof sayAgain.useInfiniteQuery>[0],',
      '    options: Parameters<typeof sayAgain.useInfiniteQuery>[1],',
      '    queryOptions?: Partial<UseInfiniteQueryOptions<SayResponse, ConnectError, SayResponse, SayResponse, ConnectQueryKey<SayRequest>>>',
      ') => {',
      '    const baseOptions = sayAgain.useInfiniteQuery(inputs, options);',
      '',
      '    return useInfiniteQuery<SayResponse, ConnectError, SayResponse, keyof typeof inputs extends never ? any : ConnectQueryKey<SayRequest>>({',
      '        ...baseOptions,',
      '        ...queryOptions,',
      '    });',
      '};',
    ];

    it('generates a full ts file with customize import hook from', () => {
      const target = 'ts';
      const output = generate(
        target,
        'import-hook-from=@buf/react-query',
      )(`eliza-ElizaService_connectquery_react.${target}`);
      expect(output).toStrictEqual(expected(target, '@buf/react-query'));
    });

    it('generates a full ts file with invalid option', () => {
      const target = 'ts';

      expect(() => {
        generate(
          target,
          'invalid-import-hook-from=@tanstack/react-query',
        )(`eliza-ElizaService_connectquery_react.${target}`);
      }).toThrow(
        'invalid option "invalid-import-hook-from=@tanstack/react-query: invalid option "invalid-import-hook-from"',
      );
    });

    it('generates a full ts file with default import', () => {
      const target = 'ts';
      const output = generate(target)(
        `eliza-ElizaService_connectquery_react.${target}`,
      );
      expect(output).toStrictEqual(expected(target, ''));
    });
  });
  describe('example.proto', () => {
    it('generates a full ts file', () => {
      const target = 'ts';
      const output = generate(target)(
        `example-TodoService_connectquery_react.${target}`,
      );
      expect(output).toContain(
        '        idempotency: MethodIdempotency.NoSideEffects,',
      );
    });
  });
});
