import { InjectionToken } from '@angular/core';
import { ActionConfig } from './action.config.interface';

export let modalAction = new InjectionToken<ActionConfig>('action.config');

export const modalActionConfig: ActionConfig = {
    title: 'Create New User',
    btnCaption: 'Add',
    btnClass: 'btn-success'
};