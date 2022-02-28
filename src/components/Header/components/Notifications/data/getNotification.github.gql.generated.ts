/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GeNotificationQueryVariables = Types.Exact<{
  userName: Types.Scalars['String'];
}>;


export type GeNotificationQuery = { organization?: { notificationDeliveryRestrictionEnabledSetting: Types.NotificationRestrictionSettingValue } | null | undefined };


export const GeNotificationDocument = gql`
    query GeNotification($userName: String!) {
  organization(login: $userName) {
    notificationDeliveryRestrictionEnabledSetting
  }
}
    ` as unknown as DocumentNode<GeNotificationQuery, GeNotificationQueryVariables>;