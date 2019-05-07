import * as userActions from "./userActions";
import * as membershipActions from "./membershipActions";

export default () => ({
  user: userActions,
  membership: membershipActions
});
