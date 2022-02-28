import { gql } from "@apollo/client";

export default gql`
  query GeNotification($userName: String!) {
    organization(login: $userName) {
      notificationDeliveryRestrictionEnabledSetting
    }
  }
`;
