import { Button, Form, Input, Modal, Select } from 'antd';
import { Header } from 'antd/es/layout/layout';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { URL } from '../../constants/constants';

export default function CreateProduct() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showModalSuccess = async () => {
    Modal.success({
      onOk: () => navigate('/product'),
      content: 'Tạo sản phẩm thành công',
      centered: true,
    });
  };
  const showModalError = async () => {
    Modal.error({
      onOk: () => navigate('/product'),
      content: 'Có lỗi gì đó đã sảy ra',
      centered: true,
    });
  };

  const onSubmit = async (data: any) => {
    try {
      await axios.post(URL, data);
      showModalSuccess();
    } catch (error) {
      showModalError();
    }
  };

  return (
    <>
      <Header
        style={{
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => navigate('/product')} className="h-10">
          Quay lại
        </Button>
      </Header>
      <Form
        onFinish={handleSubmit(onSubmit)}
        layout={'horizontal'}
        style={{ maxWidth: '600px' }}
      >
        <Form.Item
          name="_id"
          label="ID"
          required={true}
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          help={
            errors._id && (
              <span style={{ color: 'red' }}>{errors?._id?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="_id"
            rules={{
              required: 'Vui lòng nhập ID',
              min: { value: 0, message: 'ID phải lớn hơn hoặc bằng 0' },
            }}
            render={({ field }) => (
              <Input {...field} type="number" placeholder="ID" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          required={true}
          help={
            errors.name && (
              <span style={{ color: 'red' }}>{errors?.name?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Vui lòng nhập tên sản phẩm',
              maxLength: {
                value: 100,
                message: 'Tên sản phẩm tối đa 100 ký tự',
              },
            }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Tên sản phẩm" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="category_id"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          label="Loại sản phẩm"
          required={true}
          help={
            errors.category_id && (
              <span style={{ color: 'red' }}>
                {errors?.category_id?.message}
              </span>
            )
          }
        >
          <Controller
            control={control}
            name="category_id"
            rules={{ required: 'Vui lòng chọn loại' }}
            render={({ field }) => (
              <Select {...field} placeholder="Chọn loại">
                <Select.Option value="Loại 1">Loại 1</Select.Option>
                <Select.Option value="Loại 2">Loại 2</Select.Option>
                <Select.Option value="Loại 3">Loại 3</Select.Option>
                <Select.Option value="Loại 4">Loại 4</Select.Option>
              </Select>
            )}
          />
        </Form.Item>
        <Form.Item
          name="price"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          label="Giá sản phẩm"
          required={true}
          help={
            errors.price && (
              <span style={{ color: 'red' }}>{errors?.price?.message}</span>
            )
          }
        >
          <Controller
            control={control}
            name="price"
            rules={{
              required: 'Vui lòng nhập giá sản phẩm',
              min: { value: 0, message: 'Giá sản phẩm không được nhỏ hơn 0' },
            }}
            render={({ field }) => (
              <Input {...field} type="number" placeholder="Giá sản phẩm" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="stock_quantity"
          label="Số lượng tồn kho"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          required={true}
          help={
            errors.stock_quantity && (
              <span style={{ color: 'red' }}>
                {errors?.stock_quantity?.message}
              </span>
            )
          }
        >
          <Controller
            control={control}
            name="stock_quantity"
            rules={{ required: 'Vui lòng nhập số lượng' }}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Số lượng" />
            )}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
        >
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Input.TextArea {...field} placeholder="Mô tả" />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
