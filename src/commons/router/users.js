import { PeopleOutline } from "@material-ui/icons";
import UserCreate from "../../modules/users/pages/UserCreate";
import UserEdit from "../../modules/users/pages/UserEdit";
import UserList from "../../modules/users/pages/UserList";

const UserRouter = [
  {
    path: "/users",
    label: "Users",
    component: UserList,
    isMenu: true,
    icon: PeopleOutline,
  },
  {
    path: "/users/create",
    label: "User Create",
    component: UserCreate,
  },
  {
    path: "/users/:id",
    label: "User Edit",
    component: UserEdit,
  },
];

export default UserRouter;
