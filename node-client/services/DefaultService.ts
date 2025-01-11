/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Todo } from '../models/Todo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @param todoId
     * @returns Todo Ok
     * @throws ApiError
     */
    public static getTodo(
        todoId: number,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todos/{todoId}',
            path: {
                'todoId': todoId,
            },
        });
    }
}