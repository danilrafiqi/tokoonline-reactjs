import { Button, Spinner } from "@components/atoms/index";
import { SideBar } from "@components/organisms/index";
import Dashboard from "@components/templates/Dashboard/index";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useRetrieveProfileData,
  useUpdatePasswordLoading,
  useUpdateProfileLoading,
  useUserAction,
} from "commons/redux/users/selector";
import { userAction } from "commons/redux/users/slice";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as yup from "yup";

const updatePofileSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
});

const updatePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required(),
});

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userActionState = useUserAction();
  const profileData = useRetrieveProfileData();
  const updateProfileLoading = useUpdateProfileLoading();
  const updatePasswordLoading = useUpdatePasswordLoading();

  const {
    register: updatePofileRegister,
    handleSubmit: updatePofileHandleSubmit,
    formState: { errors: updatePofileErrors },
  } = useForm({
    resolver: yupResolver(updatePofileSchema),
  });

  const {
    register: updatePasswordRegister,
    handleSubmit: updatePasswordHandleSubmit,
    formState: { errors: updatePasswordErrors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const handleRetrieveProfile = useCallback(() => {
    dispatch(userAction.retrieveProfileExecute());
  }, [dispatch]);

  useEffect(() => {
    handleRetrieveProfile();
  }, [handleRetrieveProfile]);

  const handleUpdateProfile = useCallback(
    (payload) => dispatch(userAction.updateProfileExecute(payload)),
    [dispatch]
  );

  const handleUpdatePassword = useCallback(
    (payload) => dispatch(userAction.updatePasswordExecute(payload)),
    [dispatch]
  );

  //#region WATCHER
  useEffect(() => {
    if (userActionState === userAction.updateProfileSuccess.type) {
      alert("sukses");
    }
  }, [userActionState, history]);
  //#endregion

  return (
    <Dashboard>
      {profileData && (
        <div className="flex flex-row py-4">
          <div>
            <SideBar />
          </div>
          <div className="flex-1">
            <div className="flex flex-row rounded-md shadow bg-white p-4">
              <div className="w-64">
                <img src="" alt="" className="w-64 h-64" />
                <Button className="mt-4 w-full" type="button">
                  {true ? <Spinner className="mr-4" /> : "Simpan Alamat"}
                </Button>
              </div>
              <form
                className="flex flex-col w-full ml-8"
                onSubmit={updatePofileHandleSubmit(handleUpdateProfile)}
              >
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-500">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Input Email"
                    className="p-3 rounded-md bg-gray-2 border-none"
                    defaultValue={profileData.email}
                    {...updatePofileRegister("email")}
                    readOnly
                  />
                  {updatePofileErrors?.email && (
                    <div className="text-red-500">
                      {updatePofileErrors?.email?.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col mt-6">
                  <label htmlFor="name" className="text-gray-500">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Input name"
                    className="p-3 rounded-md bg-gray-2 border-none"
                    defaultValue={profileData.name}
                    {...updatePofileRegister("name")}
                  />
                  {updatePofileErrors?.name && (
                    <div className="text-red-500">
                      {updatePofileErrors?.name?.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col mt-6">
                  <label htmlFor="phone" className="text-gray-500">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Input phone"
                    className="p-3 rounded-md bg-gray-2 border-none"
                    {...updatePofileRegister("phone")}
                    defaultValue={profileData.phone}
                  />
                  {updatePofileErrors?.phone && (
                    <div className="text-red-500">
                      {updatePofileErrors?.phone?.message}
                    </div>
                  )}
                </div>

                <Button className="mt-10" type="submit">
                  {updateProfileLoading ? (
                    <Spinner className="mr-4" />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </form>
            </div>

            <form
              className="flex flex-col rounded-md shadow bg-white p-4 mt-4"
              onSubmit={updatePasswordHandleSubmit(handleUpdatePassword)}
            >
              <div className="flex flex-col mt-6">
                <label htmlFor="oldPassword" className="text-gray-500">
                  Old Password
                </label>
                <input
                  id="oldPassword"
                  name="oldPassword"
                  type="password"
                  placeholder="Input Old Password"
                  className="p-3 rounded-md bg-gray-2 border-none"
                  {...updatePasswordRegister("oldPassword")}
                />
                {updatePasswordErrors?.oldPassword && (
                  <div className="text-red-500">
                    {updatePasswordErrors?.oldPassword?.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="newPassword" className="text-gray-500">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Input New Password"
                  className="p-3 rounded-md bg-gray-2 border-none"
                  {...updatePasswordRegister("newPassword")}
                />
                {updatePasswordErrors?.newPassword && (
                  <div className="text-red-500">
                    {updatePasswordErrors?.newPassword?.message}
                  </div>
                )}
              </div>

              <Button className="mt-10" type="submit">
                {updatePasswordLoading ? (
                  <Spinner className="mr-4" />
                ) : (
                  "Update Password"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </Dashboard>
  );
};

export default Profile;
