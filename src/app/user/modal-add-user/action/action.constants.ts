import { InjectionToken } from '@angular/core';
import { ActionConfig } from './action.config.interface';

export let modalAction = new InjectionToken<ActionConfig>('action.config');

export const modalActionConfig: ActionConfig = {
    title: 'Create New User',
    btnCaption: 'Add',
    btnClass: 'btn-success',
    firstnamePlaceholder: 'Firstname',
    surnamePlaceholder: 'Surname',
    emailPlaceholder: 'Email',
    agePlaceholder: '0',
    firstnameMinLength: 3,
    firstnameMaxLength: 10,
    ageMin: 0
};