import { Form, Input, Select, Button, Modal } from 'antd';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import HeaderComponent from '../common/HeaderComponent/HeaderComponent';
import { URL } from '../../constants/constants';

const CreateUser = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    getValues,
  } = useForm();

  const watchPassword = watch('password');

  const showModalSuccess = async () => {
    Modal.success({
      onOk: () => navigate('/users'),
      content: 'Tạo sản phẩm thành công',
      centered: true,
    });
  };
  const showModalError = async () => {
    Modal.error({
      onOk: () => navigate('/users'),
      content: 'Có lỗi gì đó đã sảy ra',
      centered: true,
    });
  };

  const onSubmit = async () => {
    const formData = {
      username: getValues('username'),
      fullName: getValues('fullName'),
      role: getValues('role'),
      phone: getValues('phone'),
      email: getValues('email'),
      password: getValues('password'),
    };
    try {
      await axios.post(`${URL}/users/register`, formData);
      showModalSuccess();
    } catch (error) {
      showModalError();
    }
  };
  const handleConfirmPasswordBlur = () => {
    trigger('confirmPassword');
  };
  return (
    <>
      <HeaderComponent
        content="Quay lại bảng người dùng"
        navigateContent="/users"
      />
      <Form
        onFinish={handleSubmit(onSubmit)}
        layout={'horizontal'}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item
          name="username"
          label="Tên người dùng"
          required={true}
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          help={
            errors.username && (
              <span style={{ color: 'red' }}>{errors?.username?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="username"
            rules={{
              required: 'Vui lòng nhập tên người dùng',
            }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Tên người dùng" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="fullName"
          label="Tên đầy đủ"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          required={true}
          help={
            errors.fullName && (
              <span style={{ color: 'red' }}>{errors?.fullName?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="fullName"
            rules={{
              required: 'Vui lòng nhập tên đầy đủ',
              maxLength: {
                value: 100,
                message: 'Tên đầy đủ tối đa 100 ký tự',
              },
            }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Tên đầy đủ" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="role"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          label="Vai trò"
          required={true}
          help={
            errors.role && (
              <span style={{ color: 'red' }}>{errors?.role?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="role"
            rules={{ required: 'Vui lòng chọn vai trò' }}
            render={({ field }) => (
              <Select {...field} placeholder="Vai trò">
                <Select.Option value={1}>Người dùng</Select.Option>
                <Select.Option value={2}>Quản trị viên</Select.Option>
              </Select>
            )}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          label="Số điện thoại"
          required={true}
          help={
            errors.phone && (
              <span style={{ color: 'red' }}>{errors?.phone?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="phone"
            rules={{
              required: 'Vui lòng nhập số điện thoại',
              min: { value: 0, message: 'số điện thoại không hợp lệ' },
            }}
            render={({ field }) => (
              <Input {...field} type="number" placeholder="Số điện thoại" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          required={true}
          help={
            errors.email && (
              <span style={{ color: 'red' }}>{errors?.email?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="email"
            rules={{ required: 'Vui lòng nhập email' }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Email" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          hasFeedback
          validateStatus={errors.password ? 'error' : ''}
          help={
            errors.password && (
              <span style={{ color: 'red' }}>{errors?.password?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Vui lòng nhập mật khẩu',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Mật khẩu" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Nhập lại Mật khẩu"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          hasFeedback
          validateStatus={errors.confirmPassword ? 'error' : ''}
          help={
            errors.confirmPassword && (
              <span style={{ color: 'red' }}>
                {errors?.confirmPassword?.message}
              </span>
            )
          }
        >
          <Controller
            control={control}
            rules={{
              required: 'Vui lòng nhập lại mật khẩu',
              validate: (value: string) =>
                value === watchPassword || 'Mật khẩu không khớp',
            }}
            name="confirmPassword"
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Nhập lại mật khẩu"
                onBlur={handleConfirmPasswordBlur}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo người dùng
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateUser;
