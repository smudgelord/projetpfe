/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FileStorage } from './FileStorage';
import {
    FileStorageFromJSON,
    FileStorageFromJSONTyped,
    FileStorageToJSON,
} from './FileStorage';
import type { Client } from './Client';
import {
    ClientFromJSON,
    ClientFromJSONTyped,
    ClientToJSON,
} from './Client';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    phoneNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    status?: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    lastAccess?: Date;
    /**
     * 
     * @type {Array<Client>}
     * @memberof User
     */
    clients?: Array<Client>;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    enabled?: boolean;
    /**
     * 
     * @type {FileStorage}
     * @memberof User
     */
    profileImage?: FileStorage;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'address': json['address'] == null ? undefined : json['address'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : json['phoneNumber'],
        'password': json['password'] == null ? undefined : json['password'],
        'role': json['role'] == null ? undefined : json['role'],
        'status': json['status'] == null ? undefined : json['status'],
        'lastAccess': json['lastAccess'] == null ? undefined : (new Date(json['lastAccess'])),
        'clients': json['clients'] == null ? undefined : ((json['clients'] as Array<any>).map(ClientFromJSON)),
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'profileImage': json['profileImage'] == null ? undefined : FileStorageFromJSON(json['profileImage']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'address': value['address'],
        'phoneNumber': value['phoneNumber'],
        'password': value['password'],
        'role': value['role'],
        'status': value['status'],
        'lastAccess': value['lastAccess'] == null ? undefined : ((value['lastAccess']).toISOString()),
        'clients': value['clients'] == null ? undefined : ((value['clients'] as Array<any>).map(ClientToJSON)),
        'enabled': value['enabled'],
        'profileImage': FileStorageToJSON(value['profileImage']),
    };
}

