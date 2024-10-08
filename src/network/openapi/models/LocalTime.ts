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
/**
 * 
 * @export
 * @interface LocalTime
 */
export interface LocalTime {
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    hour?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    minute?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    second?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    nano?: number;
}

/**
 * Check if a given object implements the LocalTime interface.
 */
export function instanceOfLocalTime(value: object): value is LocalTime {
    return true;
}

export function LocalTimeFromJSON(json: any): LocalTime {
    return LocalTimeFromJSONTyped(json, false);
}

export function LocalTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalTime {
    if (json == null) {
        return json;
    }
    return {
        
        'hour': json['hour'] == null ? undefined : json['hour'],
        'minute': json['minute'] == null ? undefined : json['minute'],
        'second': json['second'] == null ? undefined : json['second'],
        'nano': json['nano'] == null ? undefined : json['nano'],
    };
}

export function LocalTimeToJSON(value?: LocalTime | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hour': value['hour'],
        'minute': value['minute'],
        'second': value['second'],
        'nano': value['nano'],
    };
}

