import { useRBACProvider } from '@strapi/helper-plugin';

// Only Admin users can create users
const CREATE_USER_PERMISSION = 'admin::users.create'

const useIsAdmin = (): boolean => {
  const { allPermissions } = useRBACProvider();

  return allPermissions?.some(
    (permission) => permission.action === CREATE_USER_PERMISSION
  ) || false;
}

export default useIsAdmin;
