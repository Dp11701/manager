import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
  TreeSelect,
  DatePicker,
  InputNumber,
  Switch,
  Upload,
  Button,
  Slider,
  ColorPicker,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <Button onClick={() => navigate('/product')} className="h-10">
          Quay lại
        </Button>
      </Header>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Tên sản phẩm">
          <Input />
        </Form.Item>
        <Form.Item label="Loại">
          <Select>
            <Select.Option value="demo">Loại 1</Select.Option>
            <Select.Option value="demo">Loại 2</Select.Option>
            <Select.Option value="demo">Loại 3</Select.Option>
            <Select.Option value="demo">Loại 4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [{ title: 'Bamboo', value: 'bamboo' }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
      </Form>
    </>
  );
}
