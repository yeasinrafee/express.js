import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';

const superUser = {
  id: '0001',
  email: 'yeasinrafi808@gmail.com',
  password: config.super_admin_password,
  needsPasswordChange: false,
  role: USER_ROLE.superAdmin,
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  // When database is connected, we will check is there ary user who is admin
  const isSuperAdminExist = await User.findOne({ role: USER_ROLE.superAdmin });
  if (!isSuperAdminExist) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
